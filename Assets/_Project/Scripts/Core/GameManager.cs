using System;
using System.Collections;
using UnityEngine;
using UnityEngine.SceneManagement;

namespace Unseen
{
    public enum GameState { Boot, MainMenu, Loading, Playing, Paused, Cutscene, Ending }

    /// <summary>
    /// Composition root and game flow (new game, continue, checkpoints, scene transitions, endings).
    /// It is created automatically before the first scene loads, so every scene works on its own.
    /// </summary>
    public class GameManager : MonoBehaviour
    {
        public static GameManager I { get; private set; }

        public GameSettings Settings { get; private set; }
        public SaveData Data { get; set; }
        public GameState State { get; private set; } = GameState.Boot;

        public SaveManager Saves { get; private set; }
        public CheckpointManager Checkpoints { get; private set; }
        public StoryManager Story { get; private set; }
        public InventoryManager Inventory { get; private set; }
        public AudioManager Audio { get; private set; }
        public UIManager UI { get; private set; }
        public PerceptionManager Perception { get; private set; }
        public ObservationManager Observation { get; private set; }
        public HorrorDirector Director { get; private set; }
        public DialogueManager Dialogue { get; private set; }
        public PuzzleManager Puzzles { get; private set; }

        public PlayerController Player { get; private set; }
        public WorldBuilder World { get; private set; }
        public string CurrentWorld { get; private set; }

        /// <summary>True whenever the player should not be able to move/act.</summary>
        public bool InputLocked => State != GameState.Playing || (UI != null && UI.ModalOpen);

        bool _busy;
        Color _baseAmbient = new Color(0.08f, 0.085f, 0.1f);

        [RuntimeInitializeOnLoadMethod(RuntimeInitializeLoadType.BeforeSceneLoad)]
        static void Boot()
        {
            if (I != null) return;
            var go = new GameObject("[Unseen]");
            DontDestroyOnLoad(go);
            go.AddComponent<GameManager>();
        }

        void Awake()
        {
            if (I != null && I != this) { Destroy(gameObject); return; }
            I = this;
            Settings = GameSettings.Load();
            Settings.Apply();
            Saves = new SaveManager(Application.persistentDataPath);
            Checkpoints = new CheckpointManager(this);
            Story = new StoryManager(this);
            Inventory = new InventoryManager(this);
            Audio = gameObject.AddComponent<AudioManager>();
            Perception = gameObject.AddComponent<PerceptionManager>();
            Observation = gameObject.AddComponent<ObservationManager>();
            Director = gameObject.AddComponent<HorrorDirector>();
            Dialogue = gameObject.AddComponent<DialogueManager>();
            Puzzles = gameObject.AddComponent<PuzzleManager>();
            UI = gameObject.AddComponent<UIManager>();
        }

        void Start()
        {
            // Whatever scene the game was started in, build the matching world.
            string scene = SceneManager.GetActiveScene().name;
            if (scene == SceneNames.Apartment || scene == SceneNames.Basement)
            {
                Data = NewData();
                Data.scene = scene;
                BuildWorld(scene);
                StartCoroutine(UI.Fade(0f, 1.5f));
                State = GameState.Playing;
                Story.Set(F.Woke);
                Story.Evaluate(true);
                World.OnEntered();
            }
            else
            {
                BuildWorld(SceneNames.MainMenu);
                State = GameState.MainMenu;
                StartCoroutine(UI.Fade(0f, 2f));
            }
        }

        static SaveData NewData() => new SaveData();

        // ---------------------------------------------------------------- flow

        public void NewGame()
        {
            if (_busy) return;
            Saves.DeleteAll();
            Checkpoints.Forget();
            Data = NewData();
            StartCoroutine(LoadRoutine(SceneNames.Apartment, null, true));
        }

        public bool CanContinue => Saves.HasSave;

        public void Continue()
        {
            if (_busy) return;
            var d = Saves.Load();
            if (d == null)
            {
                UI.ShowMessage(Saves.WasCorrupted
                    ? "The save file is damaged and could not be loaded. Please start a new game."
                    : "There is no saved game.");
                return;
            }
            Data = d;
            Checkpoints.Forget();
            StartCoroutine(LoadRoutine(d.scene, null, false));
        }

        public void RestartCheckpoint()
        {
            if (_busy) return;
            var d = Checkpoints.Restore();
            if (d == null) { NewGame(); return; }
            Data = d;
            Time.timeScale = 1f;
            StartCoroutine(LoadRoutine(d.scene, null, false));
        }

        public void GoToMainMenu(bool save = true)
        {
            if (_busy) return;
            if (save && Data != null && (State == GameState.Playing || State == GameState.Paused)) Checkpoints.Save("menu");
            Time.timeScale = 1f;
            StartCoroutine(LoadRoutine(SceneNames.MainMenu, null, false));
        }

        /// <summary>Move between apartment and basement. Progress is saved before the transition.</summary>
        public void TransitionTo(string scene, string spawnId)
        {
            if (_busy || Data == null) return;
            Data.scene = scene;
            Data.hasPosition = false;
            StartCoroutine(LoadRoutine(scene, spawnId, false));
        }

        public void Quit()
        {
            if (Data != null && State == GameState.Playing) Checkpoints.Save("quit");
            Application.Quit();
#if UNITY_EDITOR
            UnityEditor.EditorApplication.isPlaying = false;
#endif
        }

        public void SetPaused(bool paused)
        {
            if (paused && State == GameState.Playing) { State = GameState.Paused; Time.timeScale = 0f; }
            else if (!paused && State == GameState.Paused) { State = GameState.Playing; Time.timeScale = 1f; }
        }

        public void SetCutscene(bool on)
        {
            if (on && State == GameState.Playing) State = GameState.Cutscene;
            else if (!on && State == GameState.Cutscene) State = GameState.Playing;
        }

        IEnumerator LoadRoutine(string scene, string spawnId, bool newGame)
        {
            _busy = true;
            State = GameState.Loading;
            Time.timeScale = 1f;
            yield return UI.Fade(1f, 0.8f);
            Dialogue.StopAll();
            Audio.StopAll();
            UI.CloseAllModals();

            if (Application.CanStreamedLevelBeLoaded(scene) && SceneManager.GetActiveScene().name != scene)
            {
                var op = SceneManager.LoadSceneAsync(scene);
                while (!op.isDone) yield return null;
            }
            BuildWorld(scene, spawnId);
            yield return null;

            if (scene == SceneNames.MainMenu)
            {
                State = GameState.MainMenu;
                Data = null;
            }
            else
            {
                Perception.Model.Set(Data.perception);
                if (Player != null)
                {
                    // Record where we arrived, so a quit right after a transition resumes here.
                    Data.hasPosition = true;
                    Data.position = Player.transform.position;
                    Data.yaw = Player.Yaw;
                }
                State = GameState.Playing;
                Story.Evaluate(false);
                if (newGame)
                {
                    Story.Set(F.Woke);
                    UI.ShowChapterCard(1);
                }
                Checkpoints.Save("scene");
                World?.OnEntered();
                UI.ShowObjective();
            }
            yield return UI.Fade(0f, 1.2f);
            _busy = false;
        }

        void BuildWorld(string scene, string spawnId = null)
        {
            Director.ClearEvents();
            if (World != null) Destroy(World.gameObject);
            Player = null;
            CurrentWorld = scene;
            var root = new GameObject("World");
            switch (scene)
            {
                case SceneNames.Apartment: World = root.AddComponent<ApartmentBuilder>(); break;
                case SceneNames.Basement: World = root.AddComponent<BasementBuilder>(); break;
                default: World = root.AddComponent<MenuBuilder>(); break;
            }
            World.Build();
            if (World.HasPlayer)
            {
                Pose spawn = World.GetSpawn(spawnId ?? "default");
                Vector3 pos = spawn.position;
                float yaw = spawn.rotation.eulerAngles.y;
                if (spawnId == null && Data.hasPosition && Data.scene == scene) { pos = Data.position; yaw = Data.yaw; }
                Player = PlayerController.Create(pos, yaw, root.transform);
                PostFX.Impl?.SetupCamera(Player.Cam);
            }
            _baseAmbient = RenderSettings.ambientLight;
            ApplyBrightness();
        }

        public void ApplyBrightness()
        {
            RenderSettings.ambientLight = _baseAmbient * Mathf.Lerp(0.55f, 1.9f, Settings.brightness);
        }

        /// <summary>Copies live runtime state (position, perception) into Data before saving.</summary>
        public void CaptureRuntimeState()
        {
            if (Data == null) return;
            Data.perception = Perception.Model.Value;
            if (Player != null && Player.IsGrounded)
            {
                Data.hasPosition = true;
                Data.position = Player.transform.position;
                Data.yaw = Player.Yaw;
            }
            Data.scene = CurrentWorld == SceneNames.Basement ? SceneNames.Basement : SceneNames.Apartment;
        }

        // ---------------------------------------------------------------- blackout & endings

        /// <summary>Perception collapse or contact with the presence: the player loses time, never progress.</summary>
        public void Blackout(string thought)
        {
            if (State != GameState.Playing || _busy) return;
            StartCoroutine(BlackoutRoutine(thought));
        }

        IEnumerator BlackoutRoutine(string thought)
        {
            _busy = true;
            State = GameState.Cutscene;
            Audio.Play2D(Snd.Heartbeat, 0.9f);
            yield return UI.Fade(1f, 0.6f);
            var safe = World.GetSpawn("safe");
            Player?.Teleport(safe.position, safe.rotation.eulerAngles.y);
            Perception.Model.Set(45f);
            World.OnBlackout();
            yield return new WaitForSeconds(1.5f);
            State = GameState.Playing;
            yield return UI.Fade(0f, 1.5f);
            if (!string.IsNullOrEmpty(thought)) Dialogue.Thought(thought);
            _busy = false;
        }

        public void TriggerEnding(Ending ending)
        {
            if (State == GameState.Ending) return;
            StartCoroutine(EndingRoutine(ending));
        }

        IEnumerator EndingRoutine(Ending ending)
        {
            _busy = true;
            State = GameState.Ending;
            UI.CloseAllModals();
            Dialogue.StopAll();
            yield return UI.Fade(1f, 3f);
            Audio.StopAll();
            PlayerPrefs.SetInt("ending_seen_" + (int)ending, 1);
            PlayerPrefs.Save();
            // The checkpoint taken before the final choice stays on disk so other endings can be reached.
            yield return UI.PlayEnding(ending);
            _busy = false;
            GoToMainMenu(false);
        }

        void Update()
        {
            if (Input.GetKeyDown(KeyCode.Escape))
            {
                if (UI.HandleEscape()) return;
                if (State == GameState.Playing) SetPaused(true);
                else if (State == GameState.Paused) SetPaused(false);
            }
            if (State == GameState.Playing && Player != null)
            {
                bool locked = UI.ModalOpen;
                Cursor.lockState = locked ? CursorLockMode.None : CursorLockMode.Locked;
                Cursor.visible = locked;
            }
            else
            {
                Cursor.lockState = CursorLockMode.None;
                Cursor.visible = State != GameState.Cutscene && State != GameState.Loading;
            }
            PostFX.Impl?.Apply(State == GameState.Playing || State == GameState.Paused ? Perception.Model.Distortion : 0f,
                Settings.brightness, Settings.motionBlur, Settings.reducedMotion, UI.FlashAmount);
        }

        void OnApplicationQuit()
        {
            Settings.Save();
        }
    }
}
