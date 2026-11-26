using System;
using System.Collections;
using System.Collections.Generic;
using UnityEngine;

namespace Unseen
{
    /// <summary>
    /// All interface, drawn with IMGUI so it needs no prefabs or font assets: main menu, HUD, pause,
    /// settings, inventory, document reader, photo inspection, puzzle panels, transitions and endings.
    /// Layout is authored for a 1080-pixel-high virtual screen and scaled to any resolution.
    /// </summary>
    public partial class UIManager : MonoBehaviour
    {
        enum Modal { None, Inventory, Document, Padlock, Channels, Fragments, Confirm }
        enum MenuPage { Main, Settings, Credits }

        const float VH = 1080f;
        float VW => Screen.width / Scale;
        static float Scale => Screen.height / VH;

        Modal _modal;
        MenuPage _menuPage, _pausePage;
        float _modalOpenedAt;
        float _fade = 1f;
        public float FlashAmount { get; private set; }

        readonly List<KeyValuePair<string, float>> _notes = new List<KeyValuePair<string, float>>();
        float _objectiveUntil, _hintUntil, _chapterStart = -100f, _savingUntil, _latestUntil;
        string _hint, _message, _docId;
        int _chapterCard;
        PhotoRecord _latestPhoto;

        public bool ModalOpen => _modal != Modal.None;

        void OnEnable() => GameEvents.Notification += OnNotify;
        void OnDisable() => GameEvents.Notification -= OnNotify;

        void OnNotify(string text)
        {
            _notes.Add(new KeyValuePair<string, float>(text, Time.unscaledTime));
            if (_notes.Count > 5) _notes.RemoveAt(0);
        }

        // ------------------------------------------------------------------ public API
        public IEnumerator Fade(float target, float duration)
        {
            float start = _fade, t = 0f;
            while (t < duration)
            {
                t += Time.unscaledDeltaTime;
                _fade = Mathf.Lerp(start, target, Mathf.SmoothStep(0, 1, t / duration));
                yield return null;
            }
            _fade = target;
        }

        public void ShowChapterCard(int chapter)
        {
            _chapterCard = chapter;
            _chapterStart = Time.unscaledTime;
            GameManager.I.Audio.Play2D(Snd.Drone, 0.35f, AudioCat.Music);
        }

        public void ShowObjective() => _objectiveUntil = Time.unscaledTime + 7f;
        public void ShowHint(string hint) { _hint = hint; _hintUntil = Time.unscaledTime + 12f; }
        public void ShowSaving() => _savingUntil = Time.unscaledTime + 2f;
        public void ShowMessage(string text) => _message = text;
        public void TriggerFlash() => FlashAmount = 1f;
        public void ShowLatestPhoto(PhotoRecord p) { _latestPhoto = p; _latestUntil = Time.unscaledTime + 3.5f; }

        public void ShowDocument(string docId)
        {
            _docId = docId;
            OpenModal(Modal.Document);
        }

        void OpenModal(Modal m)
        {
            _modal = m;
            _modalOpenedAt = Time.unscaledTime;
        }

        /// <summary>Unscaled time the last modal closed (stops the closing key press from re-interacting).</summary>
        public float LastModalClosed { get; private set; } = -10f;

        public void CloseAllModals()
        {
            if (_modal != Modal.None) LastModalClosed = Time.unscaledTime;
            _modal = Modal.None;
            _rebinding = -1;
            _confirmYes = null;
        }

        /// <summary>Esc handling. Returns true if the UI consumed it.</summary>
        public bool HandleEscape()
        {
            if (_rebinding >= 0) { _rebinding = -1; return true; }
            if (_message != null) { _message = null; return true; }
            if (_modal != Modal.None) { CloseAllModals(); return true; }
            var gm = GameManager.I;
            if (gm.State == GameState.MainMenu && _menuPage != MenuPage.Main) { LeaveSettings(); _menuPage = MenuPage.Main; return true; }
            if (gm.State == GameState.Paused && _pausePage != MenuPage.Main) { LeaveSettings(); _pausePage = MenuPage.Main; return true; }
            if (gm.State == GameState.Ending || gm.State == GameState.Loading) return true;
            return false;
        }

        void Update()
        {
            FlashAmount = Mathf.MoveTowards(FlashAmount, 0f, Time.unscaledDeltaTime * 4f);
            var gm = GameManager.I;
            if (gm.State != GameState.Playing) return;
            if (gm.Settings.Down(InputAction.Inventory))
            {
                if (_modal == Modal.Inventory) CloseAllModals();
                else if (_modal == Modal.None) { OpenModal(Modal.Inventory); _invTab = 0; _selected = -1; }
            }
            else if (_modal == Modal.Document && Time.unscaledTime - _modalOpenedAt > 0.3f && gm.Settings.Down(InputAction.Interact))
                CloseAllModals();
        }

        // ------------------------------------------------------------------ styles
        GUIStyle _text, _small, _title, _sub, _button, _center, _paper, _heading, _prompt;
        Texture2D _white, _panel, _btn, _btnHover;
        readonly Color _ink = new Color(0.86f, 0.83f, 0.77f);
        readonly Color _dim = new Color(0.6f, 0.58f, 0.54f);

        static Texture2D Solid(Color c)
        {
            var t = new Texture2D(1, 1);
            t.SetPixel(0, 0, c);
            t.Apply();
            return t;
        }

        void EnsureStyles()
        {
            if (_text != null) return;
            _white = Solid(Color.white);
            _panel = Solid(new Color(0.03f, 0.03f, 0.035f, 0.9f));
            _btn = Solid(new Color(0.1f, 0.1f, 0.1f, 0.0f));
            _btnHover = Solid(new Color(0.85f, 0.8f, 0.7f, 0.1f));
            _text = new GUIStyle(GUI.skin.label) { fontSize = 26, wordWrap = true, richText = true };
            _text.normal.textColor = _ink;
            _small = new GUIStyle(_text) { fontSize = 20 };
            _small.normal.textColor = _dim;
            _heading = new GUIStyle(_text) { fontSize = 34, fontStyle = FontStyle.Bold };
            _title = new GUIStyle(_text) { fontSize = 120, fontStyle = FontStyle.Bold, wordWrap = false };
            _sub = new GUIStyle(_text) { fontSize = 30, alignment = TextAnchor.UpperCenter };
            _center = new GUIStyle(_text) { alignment = TextAnchor.MiddleCenter };
            _prompt = new GUIStyle(_text) { fontSize = 22, alignment = TextAnchor.UpperCenter };
            _paper = new GUIStyle(_text) { fontSize = 25 };
            _paper.normal.textColor = new Color(0.12f, 0.1f, 0.08f);
            _button = new GUIStyle(GUI.skin.button) { fontSize = 30, alignment = TextAnchor.MiddleLeft, padding = new RectOffset(16, 16, 6, 6) };
            _button.normal.background = _btn;
            _button.hover.background = _btnHover;
            _button.active.background = _btnHover;
            _button.normal.textColor = _ink;
            _button.hover.textColor = Color.white;
            _button.active.textColor = Color.white;
        }

        void Fill(Rect r, Color c)
        {
            var old = GUI.color;
            GUI.color = c;
            GUI.DrawTexture(r, _white);
            GUI.color = old;
        }

        bool Button(Rect r, string label, bool enabled = true)
        {
            var old = GUI.enabled;
            GUI.enabled = enabled;
            bool b = GUI.Button(r, label, _button);
            GUI.enabled = old;
            if (b) GameManager.I.Audio.Play2D(Snd.Switch, 0.25f);
            return b;
        }

        // ------------------------------------------------------------------ main draw
        void OnGUI()
        {
            EnsureStyles();
            var gm = GameManager.I;
            GUI.matrix = Matrix4x4.Scale(new Vector3(Scale, Scale, 1f));

            bool inGame = gm.State == GameState.Playing || gm.State == GameState.Paused || gm.State == GameState.Cutscene;
            if (inGame && gm.Player != null)
            {
                float eyes = gm.Player.Eyes.Amount;
                if (eyes > 0f) Fill(new Rect(0, 0, VW, VH), new Color(0, 0, 0, Mathf.Pow(eyes, 0.7f)));
                if (gm.State != GameState.Paused) DrawHud(gm);
            }
            if (gm.State == GameState.MainMenu) DrawMainMenu(gm);
            if (gm.State == GameState.Paused) DrawPause(gm);
            if (gm.State == GameState.Playing) DrawModal(gm);

            if (_fade > 0.001f) Fill(new Rect(0, 0, VW, VH), new Color(0, 0, 0, _fade));
            if (inGame || gm.State == GameState.Loading) DrawChapterCard();
            if (gm.State == GameState.Ending) DrawEnding();
            if (FlashAmount > 0.001f) Fill(new Rect(0, 0, VW, VH), new Color(1, 1, 1, FlashAmount * 0.85f));
            if (_message != null) DrawMessage();
        }

        // ------------------------------------------------------------------ HUD
        void DrawHud(GameManager gm)
        {
            float now = Time.unscaledTime;
            var s = gm.Settings;
            // crosshair + prompt
            if (_modal == Modal.None && !gm.Player.Eyes.IsClosed)
            {
                var it = gm.Player.Interaction.Current;
                Fill(new Rect(VW / 2 - 2, VH / 2 - 2, 4, 4), new Color(1, 1, 1, it != null ? 0.8f : 0.3f));
                if (it != null)
                    GUI.Label(new Rect(VW / 2 - 400, VH / 2 + 26, 800, 40), $"<color=#aaa69a>[{KeyName(s.KeyFor(InputAction.Interact))}]</color>  {it.PromptText}", _prompt);
            }

            // notifications
            float y = 40;
            for (int i = 0; i < _notes.Count; i++)
            {
                float age = now - _notes[i].Value;
                if (age > 5f) continue;
                float a = Mathf.Clamp01(5f - age) * Mathf.Clamp01(age * 4f);
                GUI.color = new Color(1, 1, 1, a);
                GUI.Label(new Rect(48, y, 900, 36), _notes[i].Key, _text);
                y += 36;
            }
            GUI.color = Color.white;

            // objective
            if (now < _objectiveUntil || _modal == Modal.Inventory)
            {
                float a = _modal == Modal.Inventory ? 1f : Mathf.Clamp01(_objectiveUntil - now);
                GUI.color = new Color(1, 1, 1, a);
                GUI.Label(new Rect(48, VH - 170, 1000, 30), "OBJECTIVE", _small);
                GUI.Label(new Rect(48, VH - 142, 1000, 40), gm.Story.ObjectiveText, _text);
                GUI.color = Color.white;
            }

            // hint
            if (now < _hintUntil && !string.IsNullOrEmpty(_hint))
            {
                GUI.color = new Color(1, 1, 1, Mathf.Clamp01(_hintUntil - now) * 0.85f);
                GUI.Label(new Rect(48, VH - 230, 1100, 60), "<i>" + _hint + "</i>", _small);
                GUI.color = Color.white;
            }

            // subtitles
            var d = gm.Dialogue;
            if (s.subtitles && !string.IsNullOrEmpty(d.Subtitle))
            {
                string txt = string.IsNullOrEmpty(d.Speaker) ? "<i>" + d.Subtitle + "</i>" : $"<color=#9c968a>{d.Speaker}:</color> {d.Subtitle}";
                var r = new Rect(VW / 2 - 700, VH - 190, 1400, 120);
                var shadow = new GUIStyle(_sub);
                shadow.normal.textColor = new Color(0, 0, 0, 0.9f);
                GUI.Label(new Rect(r.x + 2, r.y + 2, r.width, r.height), StripTags(txt), shadow);
                GUI.Label(r, txt, _sub);
            }

            // perception indicator
            if (gm.Perception.MeterVisible)
            {
                float v = gm.Perception.Value / PerceptionModel.Max;
                float pulse = v < 0.35f ? 0.6f + 0.4f * Mathf.Sin(now * 6f) : 1f;
                var rr = new Rect(VW - 230, VH - 64, 180, 5);
                Fill(rr, new Color(1, 1, 1, 0.12f));
                Fill(new Rect(rr.x, rr.y, rr.width * v, rr.height), Color.Lerp(new Color(0.6f, 0.2f, 0.15f), new Color(0.8f, 0.78f, 0.7f), v) * new Color(1, 1, 1, 0.8f * pulse));
                GUI.Label(new Rect(rr.x, rr.y - 30, 220, 30), "perception", _small);
            }
            if (gm.Inventory.Has(Items.Camera))
                GUI.Label(new Rect(VW - 230, VH - 120, 220, 30), $"film  {gm.Inventory.Count(Items.Film)}", _small);

            if (now < _savingUntil) GUI.Label(new Rect(VW - 230, 40, 200, 30), "saving...", _small);

            // latest photo
            if (_latestPhoto != null && now < _latestUntil)
            {
                var tex = CameraController.LoadPhoto(_latestPhoto.file);
                if (tex != null)
                {
                    var pr = new Rect(VW - 330, VH - 420, 280, 230);
                    Fill(new Rect(pr.x - 10, pr.y - 10, pr.width + 20, pr.height + 50), new Color(0.88f, 0.86f, 0.8f, Mathf.Clamp01(_latestUntil - now)));
                    GUI.color = new Color(1, 1, 1, Mathf.Clamp01(_latestUntil - now));
                    GUI.DrawTexture(pr, tex, ScaleMode.ScaleAndCrop);
                    GUI.color = Color.white;
                }
            }
        }

        static string StripTags(string s) => System.Text.RegularExpressions.Regex.Replace(s, "<.*?>", "");

        void DrawChapterCard()
        {
            float t = Time.unscaledTime - _chapterStart;
            if (t > 6f || _chapterCard <= 0) return;
            float a = Mathf.Clamp01(t / 1.2f) * Mathf.Clamp01((6f - t) / 1.5f);
            GUI.color = new Color(1, 1, 1, a);
            GUI.Label(new Rect(0, VH / 2 - 90, VW, 40), StoryContent.ChapterLabel(_chapterCard), new GUIStyle(_center) { fontSize = 26 });
            GUI.Label(new Rect(0, VH / 2 - 50, VW, 80), StoryContent.ChapterTitles[_chapterCard], new GUIStyle(_center) { fontSize = 58, fontStyle = FontStyle.Bold });
            GUI.color = Color.white;
        }

        void DrawMessage()
        {
            Fill(new Rect(0, 0, VW, VH), new Color(0, 0, 0, 0.6f));
            var r = new Rect(VW / 2 - 450, VH / 2 - 140, 900, 280);
            GUI.DrawTexture(r, _panel);
            GUI.Label(new Rect(r.x + 40, r.y + 40, r.width - 80, 160), _message, _text);
            if (Button(new Rect(r.xMax - 200, r.yMax - 70, 160, 50), "OK")) _message = null;
        }

        public static string KeyName(KeyCode k)
        {
            switch (k)
            {
                case KeyCode.LeftShift: return "Shift";
                case KeyCode.RightShift: return "R-Shift";
                case KeyCode.LeftControl: return "Ctrl";
                case KeyCode.Mouse0: return "LMB";
                case KeyCode.Mouse1: return "RMB";
                default: return k.ToString();
            }
        }
    }
}
