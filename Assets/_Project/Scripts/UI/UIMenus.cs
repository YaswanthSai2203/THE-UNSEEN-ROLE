using System;
using UnityEngine;

namespace Unseen
{
    public partial class UIManager
    {
        int _rebinding = -1;
        Vector2 _settingsScroll, _creditsScroll;
        string _confirmText;
        Action _confirmYes;

        public void Confirm(string text, Action yes)
        {
            _confirmText = text;
            _confirmYes = yes;
            if (GameManager.I.State == GameState.Playing) OpenModal(Modal.Confirm);
        }

        void LeaveSettings()
        {
            _rebinding = -1;
            GameManager.I.Settings.Save();
        }

        // ------------------------------------------------------------------ main menu
        void DrawMainMenu(GameManager gm)
        {
            // soft gradient behind the menu so text reads over the hallway
            for (int i = 0; i < 12; i++) Fill(new Rect(i * 60, 0, 60, VH), new Color(0, 0, 0, 0.55f * (1f - i / 12f)));

            if (_confirmYes != null) { DrawConfirmBox(); return; }

            if (_menuPage == MenuPage.Settings) { DrawSettings(gm, () => _menuPage = MenuPage.Main); return; }
            if (_menuPage == MenuPage.Credits) { DrawCredits(() => _menuPage = MenuPage.Main); return; }

            float x = 140;
            float flicker = 0.85f + 0.15f * Mathf.PerlinNoise(Time.unscaledTime * 0.8f, 3f);
            GUI.color = new Color(1, 1, 1, flicker);
            GUI.Label(new Rect(x, 190, 1200, 150), "THE UNSEEN", _title);
            GUI.color = Color.white;
            GUI.Label(new Rect(x + 6, 335, 1000, 40), "<i>You can only see what you are willing to forget.</i>", _small);

            float y = 470;
            if (Button(new Rect(x, y, 420, 56), "Continue", gm.CanContinue)) gm.Continue();
            y += 64;
            if (Button(new Rect(x, y, 420, 56), "New Game"))
            {
                if (gm.CanContinue) Confirm("Start a new game? Your saved progress will be lost.", gm.NewGame);
                else gm.NewGame();
            }
            y += 64;
            if (Button(new Rect(x, y, 420, 56), "Settings")) { _menuPage = MenuPage.Settings; _settingsScroll = Vector2.zero; }
            y += 64;
            if (Button(new Rect(x, y, 420, 56), "Credits")) { _menuPage = MenuPage.Credits; _creditsScroll = Vector2.zero; }
            y += 64;
            if (Button(new Rect(x, y, 420, 56), "Quit")) gm.Quit();

            int endings = 0;
            for (int i = 1; i <= 3; i++) if (PlayerPrefs.GetInt("ending_seen_" + i, 0) == 1) endings++;
            GUI.Label(new Rect(x, VH - 120, 900, 30), endings > 0 ? $"Endings found: {endings} / 3" : "Headphones recommended. Play in the dark.", _small);
            GUI.Label(new Rect(x, VH - 90, 900, 30), "This game contains themes of grief, child death and self-harm.", _small);
        }

        void DrawConfirmBox()
        {
            Fill(new Rect(0, 0, VW, VH), new Color(0, 0, 0, 0.6f));
            var r = new Rect(VW / 2 - 450, VH / 2 - 130, 900, 260);
            GUI.DrawTexture(r, _panel);
            GUI.Label(new Rect(r.x + 40, r.y + 40, r.width - 80, 120), _confirmText, _text);
            if (Button(new Rect(r.x + 40, r.yMax - 80, 200, 54), "Yes"))
            {
                var yes = _confirmYes;
                CloseAllModals();
                yes?.Invoke();
            }
            if (Button(new Rect(r.xMax - 240, r.yMax - 80, 200, 54), "No")) CloseAllModals();
        }

        // ------------------------------------------------------------------ pause
        void DrawPause(GameManager gm)
        {
            Fill(new Rect(0, 0, VW, VH), new Color(0, 0, 0, 0.72f));
            if (_confirmYes != null) { DrawConfirmBox(); return; }
            if (_pausePage == MenuPage.Settings) { DrawSettings(gm, () => _pausePage = MenuPage.Main); return; }

            float x = 140, y = 300;
            GUI.Label(new Rect(x, 200, 800, 60), "PAUSED", _heading);
            GUI.Label(new Rect(x, 250, 1200, 40), StoryContent.ChapterLabel(gm.Story.Chapter) + "  -  " + gm.Story.ObjectiveText, _small);
            if (Button(new Rect(x, y, 460, 56), "Resume")) gm.SetPaused(false);
            y += 64;
            if (Button(new Rect(x, y, 460, 56), "Settings")) { _pausePage = MenuPage.Settings; _settingsScroll = Vector2.zero; }
            y += 64;
            if (Button(new Rect(x, y, 460, 56), "Restart checkpoint"))
                Confirm("Return to the last checkpoint? Progress since then will be lost.", () => { gm.SetPaused(false); gm.RestartCheckpoint(); });
            y += 64;
            if (Button(new Rect(x, y, 460, 56), "Main menu")) gm.GoToMainMenu();
            y += 64;
            if (Button(new Rect(x, y, 460, 56), "Quit to desktop")) gm.Quit();
        }

        // ------------------------------------------------------------------ settings
        void DrawSettings(GameManager gm, Action back)
        {
            var s = gm.Settings;
            float x = 140, w = 1100;
            GUI.Label(new Rect(x, 90, 800, 60), "SETTINGS", _heading);
            var view = new Rect(x, 160, w + 40, VH - 300);
            var content = new Rect(0, 0, w, 1650);
            _settingsScroll = GUI.BeginScrollView(view, _settingsScroll, content);
            float y = 0;

            Section(ref y, "Audio");
            s.masterVolume = Slider(ref y, "Master volume", s.masterVolume, 0, 1, Pct);
            s.musicVolume = Slider(ref y, "Music volume", s.musicVolume, 0, 1, Pct);
            s.sfxVolume = Slider(ref y, "Sound effects volume", s.sfxVolume, 0, 1, Pct);

            Section(ref y, "Video");
            var res = Screen.resolutions;
            int ri = s.resolutionIndex >= 0 && s.resolutionIndex < res.Length ? s.resolutionIndex : res.Length - 1;
            string resName = res.Length > 0 && ri >= 0 ? $"{res[ri].width} x {res[ri].height}" : $"{Screen.width} x {Screen.height}";
            int nri = Cycle(ref y, "Resolution", resName, ri, res.Length);
            if (nri != ri) { s.resolutionIndex = nri; s.Apply(); }
            bool fs = Toggle(ref y, "Fullscreen", s.fullscreen);
            if (fs != s.fullscreen) { s.fullscreen = fs; s.Apply(); }
            var q = QualitySettings.names;
            int qi = s.qualityLevel >= 0 && s.qualityLevel < q.Length ? s.qualityLevel : QualitySettings.GetQualityLevel();
            int nqi = Cycle(ref y, "Graphics quality", q.Length > 0 ? q[Mathf.Clamp(qi, 0, q.Length - 1)] : "Default", qi, q.Length);
            if (nqi != qi) { s.qualityLevel = nqi; s.Apply(); }
            bool vs = Toggle(ref y, "VSync", s.vsync);
            if (vs != s.vsync) { s.vsync = vs; s.Apply(); }
            s.fieldOfView = Slider(ref y, "Field of view", s.fieldOfView, 55, 95, v => Mathf.RoundToInt(v) + "°");
            float b = Slider(ref y, "Brightness", s.brightness, 0, 1, Pct);
            if (!Mathf.Approximately(b, s.brightness)) { s.brightness = b; gm.ApplyBrightness(); }
            s.motionBlur = Toggle(ref y, "Motion blur", s.motionBlur);

            Section(ref y, "Accessibility");
            s.subtitles = Toggle(ref y, "Subtitles", s.subtitles);
            s.cameraShake = Toggle(ref y, "Camera shake", s.cameraShake);
            s.headBob = Toggle(ref y, "Head bob", s.headBob);
            s.reducedMotion = Toggle(ref y, "Reduced motion (disables shake, bob and lens effects)", s.reducedMotion);

            Section(ref y, "Controls");
            s.mouseSensitivity = Slider(ref y, "Mouse sensitivity", s.mouseSensitivity, 0.2f, 8f, v => v.ToString("0.0"));
            s.invertY = Toggle(ref y, "Invert mouse Y", s.invertY);
            var actions = (InputAction[])Enum.GetValues(typeof(InputAction));
            foreach (var a in actions)
            {
                GUI.Label(new Rect(0, y, 560, 44), Nice(a.ToString()), _text);
                string label = _rebinding == (int)a ? "press a key..." : KeyName(s.keys[(int)a]);
                if (Button(new Rect(600, y, 300, 44), label)) _rebinding = (int)a;
                y += 50;
            }
            if (Button(new Rect(600, y, 300, 44), "Reset controls")) { s.keys = GameSettings.DefaultKeys(); _rebinding = -1; }
            y += 60;
            GUI.Label(new Rect(0, y, 1000, 40), "Esc always pauses / goes back. Mouse look cannot be rebound.", _small);
            GUI.EndScrollView();

            var e = Event.current;
            if (_rebinding >= 0 && e.type == EventType.KeyDown && e.keyCode != KeyCode.None)
            {
                if (e.keyCode != KeyCode.Escape) s.keys[_rebinding] = e.keyCode;
                _rebinding = -1;
                e.Use();
            }

            if (Button(new Rect(x, VH - 120, 260, 56), "Back")) { LeaveSettings(); back(); }
        }

        static string Pct(float v) => Mathf.RoundToInt(v * 100) + "%";

        static string Nice(string camel)
        {
            var sb = new System.Text.StringBuilder();
            foreach (char c in camel) { if (char.IsUpper(c) && sb.Length > 0) sb.Append(' '); sb.Append(sb.Length == 0 ? c : char.ToLowerInvariant(c)); }
            return sb.ToString();
        }

        void Section(ref float y, string title)
        {
            y += 10;
            GUI.Label(new Rect(0, y, 600, 40), title.ToUpperInvariant(), _small);
            y += 40;
        }

        float Slider(ref float y, string label, float v, float min, float max, Func<float, string> fmt)
        {
            GUI.Label(new Rect(0, y, 560, 44), label, _text);
            float nv = GUI.HorizontalSlider(new Rect(600, y + 14, 380, 20), v, min, max);
            GUI.Label(new Rect(1000, y, 100, 44), fmt(nv), _small);
            y += 50;
            return nv;
        }

        bool Toggle(ref float y, string label, bool v)
        {
            GUI.Label(new Rect(0, y, 580, 44), label, _text);
            bool nv = v;
            if (Button(new Rect(600, y, 300, 44), v ? "On" : "Off")) nv = !v;
            y += 50;
            return nv;
        }

        int Cycle(ref float y, string label, string value, int index, int count)
        {
            GUI.Label(new Rect(0, y, 560, 44), label, _text);
            int ni = index;
            if (count > 0)
            {
                if (Button(new Rect(600, y, 50, 44), "<")) ni = (index - 1 + count) % count;
                GUI.Label(new Rect(660, y, 260, 44), value, _center);
                if (Button(new Rect(930, y, 50, 44), ">")) ni = (index + 1) % count;
            }
            else GUI.Label(new Rect(600, y, 380, 44), value, _text);
            y += 50;
            return ni;
        }

        // ------------------------------------------------------------------ credits
        void DrawCredits(Action back)
        {
            var r = new Rect(140, 120, 1100, VH - 280);
            _creditsScroll = GUI.BeginScrollView(r, _creditsScroll, new Rect(0, 0, 1060, 1100));
            GUI.Label(new Rect(0, 0, 1060, 1100), StoryContent.Credits, _text);
            GUI.EndScrollView();
            if (Button(new Rect(140, VH - 120, 260, 56), "Back")) back();
        }
    }
}
