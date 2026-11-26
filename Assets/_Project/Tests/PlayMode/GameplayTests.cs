using System.Collections;
using NUnit.Framework;
using UnityEngine;
using UnityEngine.TestTools;

namespace Unseen.Tests
{
    /// <summary>
    /// Runtime tests (Unity Test Runner, PlayMode). GameManager boots automatically, so each test starts a
    /// session and builds what it needs in an isolated area of the world.
    /// </summary>
    public class GameplayTests
    {
        static GameManager G => GameManager.I;
        GameObject _root;

        [UnitySetUp]
        public IEnumerator SetUp()
        {
            yield return null; // let GameManager boot
            G.Data = new SaveData();
            _root = new GameObject("TestRoot");
            _root.transform.position = new Vector3(500, 0, 500);
        }

        [UnityTearDown]
        public IEnumerator TearDown()
        {
            Object.Destroy(_root);
            yield return null;
        }

        GameObject Cube(Vector3 localPos, Vector3 size)
        {
            var c = GameObject.CreatePrimitive(PrimitiveType.Cube);
            c.transform.SetParent(_root.transform, false);
            c.transform.localPosition = localPos;
            c.transform.localScale = size;
            return c;
        }

        PlayerController SpawnPlayer(Vector3 localPos, float yaw = 0f)
        {
            Cube(new Vector3(0, -0.5f, 0), new Vector3(40, 1, 40));
            var p = PlayerController.Create(_root.transform.position + localPos, yaw, _root.transform);
            typeof(GameManager).GetProperty("Player").SetValue(G, p);
            typeof(GameManager).GetProperty("State").SetValue(G, GameState.Playing);
            return p;
        }

        [UnityTest]
        public IEnumerator PlayerCannotWalkThroughWalls()
        {
            var p = SpawnPlayer(Vector3.zero);
            Cube(new Vector3(0, 1.5f, 2f), new Vector3(4, 3, 0.2f));
            yield return null;
            for (int i = 0; i < 120; i++) { p.CC.Move(Vector3.forward * 0.05f + Vector3.down * 0.05f); yield return null; }
            Assert.Less(p.transform.position.z - _root.transform.position.z, 1.9f - PlayerController.Radius + 0.05f);
            Assert.IsTrue(p.IsGrounded);
        }

        [UnityTest]
        public IEnumerator InteractionDetectsObjectUnderCrosshair()
        {
            var p = SpawnPlayer(Vector3.zero);
            var box = Cube(new Vector3(0, 1.62f, 1.2f), new Vector3(0.4f, 0.4f, 0.4f));
            bool used = false;
            Interactable.Add(box, "Test", () => used = true);
            yield return null;
            yield return null;
            Assert.AreEqual(box.GetComponent<Interactable>(), p.Interaction.Current);
            p.Interaction.Current.Interact();
            Assert.IsTrue(used);
        }

        [UnityTest]
        public IEnumerator ObservationSeesFrontNotBehindNotOccluded()
        {
            var p = SpawnPlayer(Vector3.zero);
            yield return null;
            Vector3 o = _root.transform.position;
            Assert.IsTrue(G.Observation.IsPointObserved(o + new Vector3(0, 1.5f, 4f)));
            Assert.IsFalse(G.Observation.IsPointObserved(o + new Vector3(0, 1.5f, -4f)));
            Cube(new Vector3(0, 1.5f, 2f), new Vector3(3, 3, 0.2f));
            Physics.SyncTransforms();
            Assert.IsFalse(G.Observation.IsPointObserved(o + new Vector3(0, 1.5f, 4f)), "occluded by wall");
        }

        [UnityTest]
        public IEnumerator ObservableMovesOnlyWhenUnobserved()
        {
            var p = SpawnPlayer(Vector3.zero);
            Vector3 o = _root.transform.position;
            var seen = Cube(new Vector3(0, 0.5f, 4f), Vector3.one * 0.5f).AddComponent<ObservableObject>();
            seen.MovementDelay = 0.3f; seen.MinPlayerDistance = 0f; seen.EventCooldown = 0f;
            seen.Steps.Add(ObservableStep.Pose(o + new Vector3(1f, 0.5f, 4f), 0f));
            var hidden = Cube(new Vector3(0, 0.5f, -4f), Vector3.one * 0.5f).AddComponent<ObservableObject>();
            hidden.MovementDelay = 0.3f; hidden.MinPlayerDistance = 0f; hidden.EventCooldown = 0f;
            hidden.Steps.Add(ObservableStep.Pose(o + new Vector3(1f, 0.5f, -4f), 0f));
            yield return new WaitForSeconds(1.0f);
            Assert.AreEqual(-1, seen.StepIndex, "observed object must stay frozen");
            Assert.AreEqual(0, hidden.StepIndex, "unobserved object must move");
            Assert.AreEqual(o.x + 1f, hidden.transform.position.x, 0.01f);
            // Turn around: now the first one is unobserved and may move.
            p.Teleport(p.transform.position, 180f);
            yield return new WaitForSeconds(1.0f);
            Assert.AreEqual(0, seen.StepIndex);
        }

        [UnityTest]
        public IEnumerator ObservableNeverMovesIntoOccupiedSpace()
        {
            SpawnPlayer(Vector3.zero, 0f);
            Vector3 o = _root.transform.position;
            Cube(new Vector3(2f, 0.5f, -4f), Vector3.one);
            var ob = Cube(new Vector3(0, 0.5f, -4f), Vector3.one * 0.5f).AddComponent<ObservableObject>();
            ob.MovementDelay = 0.2f; ob.MinPlayerDistance = 0f; ob.EventCooldown = 0f;
            ob.Steps.Add(ObservableStep.Pose(o + new Vector3(2f, 0.5f, -4f), 0f));
            yield return new WaitForSeconds(0.8f);
            Assert.AreEqual(-1, ob.StepIndex);
        }

        [UnityTest]
        public IEnumerator PerceptionDrainsAndRecovers()
        {
            SpawnPlayer(Vector3.zero);
            G.Perception.Model.Set(80f);
            for (int i = 0; i < 30; i++) { G.Perception.Drain(20f); yield return null; }
            float low = G.Perception.Value;
            Assert.Less(low, 80f);
            for (int i = 0; i < 30; i++) { G.Perception.Recover(50f); yield return null; }
            Assert.Greater(G.Perception.Value, low);
        }

        [UnityTest]
        public IEnumerator InventoryCollectsItems()
        {
            SpawnPlayer(Vector3.zero);
            var box = Cube(new Vector3(0, 1.62f, 1.2f), Vector3.one * 0.3f);
            Interactable.Add(box, "Take", () => G.Inventory.Add(Items.Fuse));
            yield return null;
            yield return null;
            G.Player.Interaction.Current.Interact();
            Assert.IsTrue(G.Inventory.Has(Items.Fuse));
        }

        [UnityTest]
        public IEnumerator StoryFlagsDriveChapterAndObjective()
        {
            SpawnPlayer(Vector3.zero);
            yield return null;
            foreach (var f in StoryRulesTests.Playthrough)
            {
                if (f == F.EnteredMirasRoom) break;
                G.Story.Set(f);
            }
            Assert.AreEqual(4, G.Story.Chapter);
            Assert.AreEqual("open_room", G.Story.ObjectiveId);
        }
    }

    /// <summary>Full-session tests: real world building, scene transitions, save/continue and endings.</summary>
    public class SessionTests
    {
        static GameManager G => GameManager.I;

        static IEnumerator WaitUntilPlaying(float timeout = 15f)
        {
            float t = 0f;
            while ((G.State != GameState.Playing || G.Player == null) && t < timeout) { t += Time.unscaledDeltaTime; yield return null; }
        }

        [UnityTest]
        public IEnumerator NewGameBuildsApartmentAndTransitionKeepsInventory()
        {
            yield return null;
            G.NewGame();
            yield return WaitUntilPlaying();
            Assert.AreEqual(SceneNames.Apartment, G.CurrentWorld);
            Assert.IsNotNull(G.Player);
            Assert.AreEqual("light", G.Story.ObjectiveId);
            G.Inventory.Add(Items.Flashlight);
            G.TransitionTo(SceneNames.Basement, "default");
            yield return new WaitForSeconds(0.5f);
            yield return WaitUntilPlaying();
            Assert.AreEqual(SceneNames.Basement, G.CurrentWorld);
            Assert.IsTrue(G.Inventory.Has(Items.Flashlight));
            Assert.IsTrue(G.Story.Has(F.EnteredBasement));
            Assert.AreEqual(4, G.Story.Chapter, "entering the basement starts chapter 4");
        }

        [UnityTest]
        public IEnumerator ContinueRestoresCheckpoint()
        {
            yield return null;
            G.NewGame();
            yield return WaitUntilPlaying();
            G.Story.Set(F.GotFlashlight);
            G.Inventory.Add(Items.Flashlight);
            G.Checkpoints.Save("test");
            G.GoToMainMenu(false);
            float t = 0f;
            while (G.State != GameState.MainMenu && t < 10f) { t += Time.unscaledDeltaTime; yield return null; }
            Assert.IsTrue(G.CanContinue);
            G.Continue();
            yield return WaitUntilPlaying();
            Assert.IsTrue(G.Story.Has(F.GotFlashlight));
            Assert.IsTrue(G.Inventory.Has(Items.Flashlight));
        }

        [UnityTest]
        public IEnumerator EndingRunsAndReturnsToMenu()
        {
            yield return null;
            G.NewGame();
            yield return WaitUntilPlaying();
            G.TriggerEnding(Ending.Stay);
            yield return null;
            Assert.AreEqual(GameState.Ending, G.State);
            Assert.AreEqual(1, PlayerPrefs.GetInt("ending_seen_3", 0));
        }
    }
}
