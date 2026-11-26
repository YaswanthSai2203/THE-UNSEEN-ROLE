using System.IO;
using NUnit.Framework;
using UnityEngine;

namespace Unseen.Tests
{
    /// <summary>Tests that need the Unity runtime (JsonUtility, physics, file IO through Application paths).</summary>
    [Category("UnityOnly")]
    public class SaveSystemTests
    {
        string _dir;

        [SetUp] public void SetUp() { _dir = Path.Combine(Path.GetTempPath(), "unseen_test_" + System.Guid.NewGuid().ToString("N")); }
        [TearDown] public void TearDown() { if (Directory.Exists(_dir)) Directory.Delete(_dir, true); }

        [Test]
        public void RoundTripPreservesProgress()
        {
            var m = new SaveManager(_dir);
            var d = new SaveData { scene = SceneNames.Basement, perception = 42f, hasPosition = true, position = new Vector3(1, 2, 3) };
            d.story.Add(F.PowerOn);
            d.story.chapter = 4;
            d.inventory.Add(Items.Film, 2);
            d.inventory.AddDocument("diary");
            Assert.IsTrue(m.Write(d));
            var l = m.Load();
            Assert.IsNotNull(l);
            Assert.AreEqual(SceneNames.Basement, l.scene);
            Assert.AreEqual(42f, l.perception, 0.001f);
            Assert.IsTrue(l.story.Has(F.PowerOn));
            Assert.AreEqual(4, l.story.chapter);
            Assert.AreEqual(2, l.inventory.Count(Items.Film));
            Assert.AreEqual(new Vector3(1, 2, 3), l.position);
        }

        [Test]
        public void CorruptedSaveFallsBackToBackupWithoutThrowing()
        {
            var m = new SaveManager(_dir);
            var a = new SaveData(); a.story.Add("first");
            var b = new SaveData(); b.story.Add("second");
            m.Write(a);
            m.Write(b); // a becomes the backup
            File.WriteAllText(m.MainPath, "{ this is not json");
            var l = m.Load();
            Assert.IsNotNull(l);
            Assert.IsTrue(l.story.Has("first"));
            Assert.IsTrue(m.WasCorrupted);
            File.WriteAllText(m.BackupPath, "garbage");
            Assert.IsNull(m.Load());
        }

        [Test]
        public void ParseRejectsJunk()
        {
            Assert.IsNull(SaveManager.Parse(null));
            Assert.IsNull(SaveManager.Parse(""));
            Assert.IsNull(SaveManager.Parse("[1,2,3"));
            Assert.IsNull(SaveManager.Parse("{\"version\": 999}"));
        }

        [Test]
        public void PixelCanvasDrawsText()
        {
            var c = new PixelCanvas(64, 16, Color.black);
            c.Text(0, 0, "A1", 1, Color.white);
            Assert.AreEqual(Color.white, c.Get(1, 0)); // top row of 'A' starts at column 1
        }
    }
}
