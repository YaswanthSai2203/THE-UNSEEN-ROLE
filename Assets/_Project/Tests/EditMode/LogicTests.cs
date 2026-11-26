using System;
using System.Collections.Generic;
using System.Linq;
using NUnit.Framework;
using UnityEngine;

namespace Unseen.Tests
{
    public class PerceptionTests
    {
        [Test]
        public void DrainLowersAndClamps()
        {
            var m = new PerceptionModel();
            m.Tick(10f, 5f, 0f);
            Assert.AreEqual(50f, m.Value, 0.01f);
            m.Tick(100f, 5f, 0f);
            Assert.AreEqual(0f, m.Value);
            Assert.IsTrue(m.Depleted);
        }

        [Test]
        public void PassiveRecoveryStopsAtCap()
        {
            var m = new PerceptionModel();
            m.Set(10f);
            m.Tick(1000f, 0f, 0f);
            Assert.AreEqual(PerceptionModel.PassiveCap, m.Value, 0.01f);
        }

        [Test]
        public void SafeAreaRecoversAboveCap()
        {
            var m = new PerceptionModel();
            m.Set(50f);
            m.Tick(100f, 0f, 3f);
            Assert.AreEqual(PerceptionModel.Max, m.Value, 0.01f);
        }

        [Test]
        public void DrainSuppressesRecovery()
        {
            var m = new PerceptionModel();
            m.Set(50f);
            m.Tick(1f, 1f, 10f);
            Assert.Less(m.Value, 50f);
        }

        [Test]
        public void LevelsAndDistortion()
        {
            var m = new PerceptionModel();
            Assert.AreEqual(PerceptionLevel.Stable, m.Level);
            m.Set(40f); Assert.AreEqual(PerceptionLevel.Uneasy, m.Level);
            m.Set(20f); Assert.AreEqual(PerceptionLevel.Unstable, m.Level);
            m.Set(5f); Assert.AreEqual(PerceptionLevel.Breaking, m.Level);
            Assert.AreEqual(0.95f, m.Distortion, 0.001f);
            m.Hit(50f); Assert.AreEqual(0f, m.Value);
            m.Restore(500f); Assert.AreEqual(100f, m.Value);
        }
    }

    public class ObservationMathTests
    {
        static readonly Vector3 Eye = new Vector3(0, 1.6f, 0);

        [Test] public void PointInFrontIsInView() => Assert.IsTrue(ObservationMath.InViewCone(Eye, Vector3.forward, Vector3.up, 70f, 16f / 9f, new Vector3(0, 1.5f, 5f)));
        [Test] public void PointBehindIsNotInView() => Assert.IsFalse(ObservationMath.InViewCone(Eye, Vector3.forward, Vector3.up, 70f, 16f / 9f, new Vector3(0, 1.5f, -5f)));
        [Test] public void PointFarToTheSideIsNotInView() => Assert.IsFalse(ObservationMath.InViewCone(Eye, Vector3.forward, Vector3.up, 70f, 16f / 9f, new Vector3(10f, 1.6f, 1f)));
        [Test] public void PointBeyondMaxDistanceIsNotInView() => Assert.IsFalse(ObservationMath.InViewCone(Eye, Vector3.forward, Vector3.up, 70f, 1.7f, new Vector3(0, 1.6f, 100f)));

        [Test]
        public void MarginCountsJustOffscreenAsObserved()
        {
            // Horizontal half-angle for 70° vertical at 16:9 is ~51°; 55° is just off screen.
            var p = Eye + Quaternion.Euler(0, 55f, 0) * Vector3.forward * 4f;
            Assert.IsFalse(ObservationMath.InViewCone(Eye, Vector3.forward, Vector3.up, 70f, 16f / 9f, p, 0f));
            Assert.IsTrue(ObservationMath.InViewCone(Eye, Vector3.forward, Vector3.up, 70f, 16f / 9f, p, 0.15f));
        }

        [Test]
        public void AngleTo()
        {
            Assert.AreEqual(0f, ObservationMath.AngleTo(Eye, Vector3.forward, Eye + Vector3.forward * 3f), 0.01f);
            Assert.AreEqual(90f, ObservationMath.AngleTo(Eye, Vector3.forward, Eye + Vector3.right * 3f), 0.01f);
        }
    }

    public class StoryRulesTests
    {
        /// <summary>The canonical order of story flags in a full playthrough.</summary>
        public static readonly string[] Playthrough =
        {
            F.Woke, F.GotFlashlight, F.FrontDoorTried, F.Phone1, F.GotFuse, F.FuseInstalled, F.ChairNoticed,
            F.GotCamera, F.TvLiveSeen, F.KeyRevealed, F.GotBrassKey, F.WardrobeOpen, F.DiaryRead, F.RadioOn, F.RadioOff, F.KitchenMsg,
            F.MirrorMsg, F.TvSolved, F.ClosetFound, F.FragA, F.MusicBoxFound, F.FragB, F.BasementUnlocked,
            F.EnteredBasement, F.Breaker1, F.Breaker2, F.Breaker3, F.PowerOn, F.TapeSeen, F.FragC, F.FragD, F.PhotoRestored, F.GotRoomKey,
            F.EnteredMirasRoom, F.Mem1, F.Mem2, F.Mem3, F.Mem4, F.MemoriesDone, F.FinalCall, F.GotFrontKey
        };

        [Test]
        public void FullPlaythroughProgressesMonotonically()
        {
            var flags = new HashSet<string>();
            Func<string, bool> has = flags.Contains;
            int chapter = 1;
            var seen = new List<string>();
            foreach (var f in Playthrough)
            {
                flags.Add(f);
                int ch = StoryRules.Chapter(has);
                Assert.GreaterOrEqual(ch, chapter, "chapter went backwards after " + f);
                chapter = ch;
                string obj = StoryRules.Objective(has);
                Assert.IsFalse(string.IsNullOrEmpty(StoryContent.ObjectiveText(obj, has)), "no text for objective " + obj);
                if (seen.Count == 0 || seen[seen.Count - 1] != obj) seen.Add(obj);
            }
            Assert.AreEqual(5, chapter);
            Assert.AreEqual("choice", seen.Last());
            // Every objective in the game is reached, in this order.
            CollectionAssert.AreEqual(new[] { "light", "exit", "phone", "fuse", "look_around", "search", "television", "photo_bathroom",
                "take_key", "wardrobe", "radio", "cabinet", "mirror", "tv_channels", "footsteps", "listen", "padlock", "enter_basement",
                "power", "fragments", "restore_photo", "open_room", "memories", "toy_phone", "choice" }, seen);
        }

        [Test]
        public void ChaptersStartAtTheRightBeats()
        {
            var flags = new HashSet<string>();
            Func<string, bool> has = flags.Contains;
            Assert.AreEqual(1, StoryRules.Chapter(has));
            flags.Add(F.ChairNoticed); Assert.AreEqual(2, StoryRules.Chapter(has));
            flags.Add(F.KitchenMsg); Assert.AreEqual(3, StoryRules.Chapter(has));
            flags.Add(F.EnteredBasement); Assert.AreEqual(4, StoryRules.Chapter(has));
            flags.Add(F.EnteredMirasRoom); Assert.AreEqual(5, StoryRules.Chapter(has));
        }

        [Test]
        public void SkippingOptionalOrderStillLeadsSomewhere()
        {
            // Player guesses the padlock before finding the music box: the missing fragment is still asked for.
            var flags = new HashSet<string>(Playthrough.TakeWhile(f => f != F.ClosetFound)) { F.BasementUnlocked, F.EnteredBasement, F.PowerOn, F.FragC, F.FragD };
            Func<string, bool> has = flags.Contains;
            Assert.AreEqual("fragments", StoryRules.Objective(has));
            Assert.AreEqual(2, StoryRules.FragmentCount(has));
            StringAssert.Contains("2/4", StoryContent.ObjectiveText("fragments", has));
        }

        [Test]
        public void EveryObjectiveHasTwoHints()
        {
            foreach (var id in StoryContent.ObjectiveIds)
            {
                Assert.IsFalse(string.IsNullOrEmpty(StoryContent.Hint(id, 0)), id);
                Assert.IsFalse(string.IsNullOrEmpty(StoryContent.Hint(id, 1)), id);
            }
        }
    }

    public class HorrorSchedulerTests
    {
        class Ctx : IHorrorContext
        {
            public float Time { get; set; }
            public int Chapter { get; set; } = 1;
            public HashSet<string> Flags = new HashSet<string>();
            public bool HasFlag(string f) => Flags.Contains(f);
            public Vector3 PlayerPosition { get; set; }
            public bool Observed;
            public bool IsObserved(Vector3 p) => Observed;
            public float Roll;
            public float Random01() => Roll;
        }

        [Test]
        public void StoryEventRunsOnceWhenRequirementsMet()
        {
            var s = new HorrorScheduler();
            int runs = 0;
            s.Register(new HorrorEvent { Id = "call", Story = true, RequiredFlag = "a", Start = () => runs++ });
            var c = new Ctx();
            Assert.IsNull(s.Tick(c));
            c.Flags.Add("a");
            Assert.IsNotNull(s.Tick(c));
            c.Time = 100;
            Assert.IsNull(s.Tick(c));
            Assert.AreEqual(1, runs);
        }

        [Test]
        public void AmbientEventsRespectGapAndDoNotOverlap()
        {
            var s = new HorrorScheduler { AmbientGap = 10f };
            bool done = false;
            s.Register(new HorrorEvent { Id = "a", OneShot = false, Cooldown = 0f, Completion = () => done });
            s.Register(new HorrorEvent { Id = "b", OneShot = false, Cooldown = 0f });
            var c = new Ctx { Time = 100f };
            var first = s.Tick(c);
            Assert.IsNotNull(first);
            c.Time = 200f;
            if (first.Id == "a") Assert.IsNull(s.Tick(c), "must not overlap while 'a' is active");
            done = true;
            c.Time = 201f;
            Assert.IsNull(s.Tick(c), "gap after previous ambient event");
            c.Time = 215f;
            var second = s.Tick(c);
            Assert.IsNotNull(second);
            Assert.AreNotEqual(first.Id, second.Id, "no immediate repeat when alternatives exist");
        }

        [Test]
        public void CooldownChapterVisibilityAndDistanceGate()
        {
            var s = new HorrorScheduler();
            var e = new HorrorEvent { Id = "e", OneShot = false, MinChapter = 2, Cooldown = 30f, Anchor = new Vector3(10, 0, 0), MinPlayerDistance = 4f, AnchorVisibility = HorrorEvent.Visibility.MustBeUnobserved };
            var c = new Ctx { Time = 0f };
            Assert.IsFalse(s.IsEligible(e, c), "chapter");
            c.Chapter = 2;
            Assert.IsTrue(s.IsEligible(e, c));
            c.Observed = true;
            Assert.IsFalse(s.IsEligible(e, c), "observed");
            c.Observed = false;
            c.PlayerPosition = new Vector3(9, 0, 0);
            Assert.IsFalse(s.IsEligible(e, c), "too close");
            c.PlayerPosition = Vector3.zero;
            e.LastRun = 0f; c.Time = 10f;
            Assert.IsFalse(s.IsEligible(e, c), "cooldown");
            c.Time = 31f;
            Assert.IsTrue(s.IsEligible(e, c));
        }

        [Test]
        public void ProbabilityIsRespected()
        {
            var s = new HorrorScheduler { AmbientGap = 0f };
            s.Register(new HorrorEvent { Id = "rare", OneShot = false, Cooldown = 0f, Probability = 0.1f });
            var c = new Ctx { Roll = 0.5f, Time = 10f };
            Assert.IsNull(s.Tick(c));
            c.Roll = 0.05f;
            Assert.IsNotNull(s.Tick(c));
        }
    }

    public class PuzzleTests
    {
        [Test]
        public void PadlockOpensOnlyWithBirthday()
        {
            var l = new CombinationLock("0219");
            Assert.IsFalse(l.IsOpen);
            l.Step(1, 2); l.Step(2, 1); l.Step(3, -1);
            Assert.AreEqual("0219", l.Current);
            Assert.IsTrue(l.IsOpen);
            l.Step(0, 11);
            Assert.AreEqual("1219", l.Current);
        }

        [Test]
        public void ChannelsMustBeInOrder()
        {
            var c = new ChannelSequence(11, 4, 7);
            Assert.IsFalse(c.Push(4));
            Assert.IsFalse(c.Push(11));
            Assert.IsFalse(c.Push(7));
            Assert.IsFalse(c.Push(11));
            Assert.IsFalse(c.Push(4));
            Assert.IsTrue(c.Push(7));
        }

        [Test]
        public void PhotographFragmentsGoBackInTheirCorners()
        {
            var p = new FragmentPuzzle();
            p.Place(1, 0); p.Place(0, 1); p.Place(2, 2); p.Place(3, 3);
            Assert.IsFalse(p.IsSolved);
            p.Place(0, 0); // moves fragment 0 out of slot 1
            Assert.AreEqual(FragmentPuzzle.Empty, p.Slots[1]);
            p.Place(1, 1);
            Assert.IsTrue(p.IsSolved);
            p.Clear(3);
            Assert.IsFalse(p.IsSolved);
            Assert.IsFalse(p.IsPlaced(3));
        }

        [Test]
        public void AtLeastEightDistinctPuzzles()
        {
            Assert.GreaterOrEqual(PuzzleRegistry.All.Length, 8);
            Assert.AreEqual(PuzzleRegistry.All.Length, PuzzleRegistry.All.Select(p => p.SolvedFlag).Distinct().Count());
            foreach (var p in PuzzleRegistry.All) CollectionAssert.Contains(StoryRulesTests.Playthrough, p.SolvedFlag, p.Id + " is not reachable in the playthrough");
        }

        [Test]
        public void PadlockCluesMatchTheCode()
        {
            // circle=0 (bathroom photo), triangle=2 (TV), square=1 (closet), cross=9 (cabinet)
            StringAssert.Contains("SQUARE = 1", StoryContent.DocBody("closet_note"));
            StringAssert.Contains("CROSS = 9", StoryContent.DocBody("cabinet"));
            StringAssert.Contains("February 19th", StoryContent.DocBody("diary"));
            Assert.IsTrue(StoryContent.TvBroadcast.Any(l => l.Text.Contains("number two")));
        }
    }

    public class InventoryAndStateTests
    {
        [Test]
        public void ItemsStackAndRemove()
        {
            var inv = new InventoryState();
            inv.Add(Items.Film, 3);
            inv.Add(Items.Film, 2);
            Assert.AreEqual(5, inv.Count(Items.Film));
            Assert.IsTrue(inv.Remove(Items.Film, 5));
            Assert.IsFalse(inv.Has(Items.Film));
            Assert.IsFalse(inv.Remove(Items.Film));
            inv.Add(null);
            inv.Add("x", 0);
            Assert.AreEqual(0, inv.items.Count);
        }

        [Test]
        public void DocumentsAreUnique()
        {
            var inv = new InventoryState();
            Assert.IsTrue(inv.AddDocument("diary"));
            Assert.IsFalse(inv.AddDocument("diary"));
            Assert.AreEqual(1, inv.documents.Count);
        }

        [Test]
        public void StoryFlags()
        {
            var s = new StoryState();
            Assert.IsTrue(s.Add("a"));
            Assert.IsFalse(s.Add("a"));
            Assert.IsTrue(s.Has("a"));
            s.Remove("a");
            Assert.IsFalse(s.Has("a"));
            s.flags.Add("b");
            s.Sanitize();
            Assert.IsTrue(s.Has("b"));
        }

        [Test]
        public void SaveDataValidationRepairsAndRejects()
        {
            var d = new SaveData { story = null, inventory = null, perception = float.NaN, scene = "Nowhere" };
            Assert.IsTrue(d.Validate());
            Assert.IsNotNull(d.story);
            Assert.AreEqual(PerceptionModel.Max, d.perception);
            Assert.AreEqual(SceneNames.Apartment, d.scene);
            d.inventory.items.Add(new ItemStack { id = "", count = 3 });
            d.Validate();
            Assert.AreEqual(0, d.inventory.items.Count);
            Assert.IsFalse(new SaveData { version = 99 }.Validate(), "future versions are rejected, not misread");
            Assert.IsFalse(new SaveData { version = 0 }.Validate());
        }

        [Test]
        public void ContentIsComplete()
        {
            foreach (var doc in new[] { "fridge_note", "photo_back", "diary", "drawing", "cabinet", "closet_note", "clipping", "coroner", "psych", "letter", "basement_note" })
                Assert.AreNotEqual(doc, StoryContent.DocTitle(doc), "missing document " + doc);
            foreach (var item in new[] { Items.Flashlight, Items.Camera, Items.Film, Items.Fuse, Items.BrassKey, Items.MusicBox, Items.RoomKey, Items.FrontKey, F.FragA, F.FragB, F.FragC, F.FragD })
                Assert.AreNotEqual(item, StoryContent.ItemName(item), "missing item " + item);
            foreach (Ending e in new[] { Ending.Forget, Ending.Remember, Ending.Stay })
            {
                var t = StoryContent.GetEnding(e);
                Assert.IsNotEmpty(t.Lines);
                Assert.IsFalse(string.IsNullOrEmpty(t.Title));
            }
        }
    }
}
