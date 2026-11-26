using System;
using UnityEngine;

namespace Unseen
{
    public enum InputAction { Forward, Back, Left, Right, Interact, Sprint, Crouch, CloseEyes, Flashlight, Camera, Inventory }

    /// <summary>Player settings persisted in PlayerPrefs (kept separate from the story save).</summary>
    [Serializable]
    public class GameSettings
    {
        const string Key = "unseen_settings_v1";

        public float masterVolume = 1f, musicVolume = 0.8f, sfxVolume = 1f;
        public float mouseSensitivity = 2f;
        public float brightness = 0.5f;
        public float fieldOfView = 70f;
        public int resolutionIndex = -1;
        public int qualityLevel = -1;
        public bool fullscreen = true, vsync = true, subtitles = true, cameraShake = true, motionBlur = false,
                    headBob = true, reducedMotion = false, invertY = false;
        public KeyCode[] keys = DefaultKeys();

        public static KeyCode[] DefaultKeys() => new[]
        {
            KeyCode.W, KeyCode.S, KeyCode.A, KeyCode.D, KeyCode.E, KeyCode.LeftShift, KeyCode.C,
            KeyCode.Q, KeyCode.F, KeyCode.G, KeyCode.Tab
        };

        public KeyCode KeyFor(InputAction a) => keys[(int)a];

        public bool Held(InputAction a) => Input.GetKey(KeyFor(a));
        public bool Down(InputAction a) => Input.GetKeyDown(KeyFor(a));

        public static GameSettings Load()
        {
            GameSettings s = null;
            try
            {
                if (PlayerPrefs.HasKey(Key)) s = JsonUtility.FromJson<GameSettings>(PlayerPrefs.GetString(Key));
            }
            catch (Exception e) { Debug.LogWarning("Settings unreadable, using defaults: " + e.Message); }
            if (s == null) s = new GameSettings();
            s.Sanitize();
            return s;
        }

        public void Sanitize()
        {
            int n = Enum.GetValues(typeof(InputAction)).Length;
            if (keys == null || keys.Length != n) keys = DefaultKeys();
            masterVolume = Mathf.Clamp01(masterVolume);
            musicVolume = Mathf.Clamp01(musicVolume);
            sfxVolume = Mathf.Clamp01(sfxVolume);
            brightness = Mathf.Clamp01(brightness);
            mouseSensitivity = Mathf.Clamp(mouseSensitivity, 0.2f, 8f);
            fieldOfView = Mathf.Clamp(fieldOfView, 55f, 95f);
        }

        public void Save()
        {
            PlayerPrefs.SetString(Key, JsonUtility.ToJson(this));
            PlayerPrefs.Save();
        }

        /// <summary>Applies display settings. Cheap to call repeatedly.</summary>
        public void Apply()
        {
            var res = Screen.resolutions;
            if (resolutionIndex >= 0 && resolutionIndex < res.Length)
            {
                var r = res[resolutionIndex];
                Screen.SetResolution(r.width, r.height, fullscreen ? FullScreenMode.FullScreenWindow : FullScreenMode.Windowed);
            }
            else Screen.fullScreenMode = fullscreen ? FullScreenMode.FullScreenWindow : FullScreenMode.Windowed;

            if (qualityLevel >= 0 && qualityLevel < QualitySettings.names.Length) QualitySettings.SetQualityLevel(qualityLevel, true);
            QualitySettings.vSyncCount = vsync ? 1 : 0;
            Application.targetFrameRate = vsync ? -1 : 144;
        }

        public bool ShakeAllowed => cameraShake && !reducedMotion;
        public bool BobAllowed => headBob && !reducedMotion;
    }
}
