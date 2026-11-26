using System;
using System.Collections;
using System.Collections.Generic;
using UnityEngine;

namespace Unseen
{
    public partial class UIManager
    {
        int _invTab, _selected = -1;
        Vector2 _invScroll, _detailScroll;
        CombinationLock _lock;
        Action _lockSolved;
        Action<int> _onTune;
        int _channel;
        FragmentPuzzle _frag;
        Action _fragSolved;
        int _fragSelected = -1;
        float _fragSolvedAt = -1f;
        Texture2D[] _fragTex;
        Texture2D[] _symbolTex;
        static readonly string[] FragIds = { F.FragA, F.FragB, F.FragC, F.FragD };

        // ------------------------------------------------------------------ open puzzle panels
        public void OpenPadlock(CombinationLock lk, Action solved)
        {
            _lock = lk; _lockSolved = solved;
            OpenModal(Modal.Padlock);
        }

        public void OpenChannels(int current, Action<int> onTune)
        {
            _channel = current; _onTune = onTune;
            OpenModal(Modal.Channels);
        }

        public void OpenFragments(FragmentPuzzle p, Action solved)
        {
            _frag = p; _fragSolved = solved; _fragSelected = -1; _fragSolvedAt = -1f;
            if (_fragTex == null)
            {
                var photo = Materials.FamilyPhoto(true);
                _fragTex = new[] { photo.Crop(0, 0, 128, 96), photo.Crop(128, 0, 128, 96), photo.Crop(0, 96, 128, 96), photo.Crop(128, 96, 128, 96) };
            }
            OpenModal(Modal.Fragments);
        }

        Texture2D SymbolIcon(int i)
        {
            if (_symbolTex == null)
            {
                _symbolTex = new Texture2D[4];
                for (int k = 0; k < 4; k++)
                {
                    var c = new PixelCanvas(64, 64, Color.clear);
                    c.DrawSymbol((Symbol)k, 32, 32, 22, 5, new Color(0.86f, 0.83f, 0.77f));
                    _symbolTex[k] = c.ToTexture(false);
                }
            }
            return _symbolTex[i];
        }

        // ------------------------------------------------------------------ dispatcher
        void DrawModal(GameManager gm)
        {
            switch (_modal)
            {
                case Modal.Inventory: DrawInventory(gm); break;
                case Modal.Document: DrawDocument(_docId, true); break;
                case Modal.Padlock: DrawPadlock(gm); break;
                case Modal.Channels: DrawChannels(); break;
                case Modal.Fragments: DrawFragments(gm); break;
                case Modal.Confirm: DrawConfirmBox(); break;
            }
        }

        Rect PanelRect => new Rect(VW / 2 - 820, 90, 1640, VH - 180);

        // ------------------------------------------------------------------ inventory
        void DrawInventory(GameManager gm)
        {
            Fill(new Rect(0, 0, VW, VH), new Color(0, 0, 0, 0.78f));
            var p = PanelRect;
            string[] tabs = { "Items", "Documents", "Photographs", "Journal" };
            for (int i = 0; i < tabs.Length; i++)
            {
                var tr = new Rect(p.x + i * 260, p.y, 250, 50);
                if (i == _invTab) Fill(new Rect(tr.x, tr.yMax - 3, tr.width, 3), _ink);
                if (Button(tr, tabs[i])) { _invTab = i; _selected = -1; _invScroll = _detailScroll = Vector2.zero; }
            }
            GUI.Label(new Rect(p.x + 1100, p.y + 10, 540, 40), StoryContent.ChapterLabel(gm.Story.Chapter) + "  " + StoryContent.ChapterTitles[gm.Story.Chapter], _small);
            GUI.Label(new Rect(p.x, p.y + 70, p.width, 40), "<color=#9c968a>Objective:</color> " + gm.Story.ObjectiveText, _text);

            var inv = gm.Inventory.State;
            var list = new Rect(p.x, p.y + 130, 520, p.height - 200);
            var detail = new Rect(p.x + 560, p.y + 130, p.width - 560, p.height - 200);
            switch (_invTab)
            {
                case 0:
                    {
                        var names = new List<string>();
                        foreach (var s in inv.items) names.Add(s.count > 1 ? $"{StoryContent.ItemName(s.id)}  ×{s.count}" : StoryContent.ItemName(s.id));
                        DrawList(list, names);
                        if (_selected >= 0 && _selected < inv.items.Count)
                        {
                            var id = inv.items[_selected].id;
                            GUI.Label(new Rect(detail.x, detail.y, detail.width, 50), StoryContent.ItemName(id), _heading);
                            GUI.Label(new Rect(detail.x, detail.y + 60, detail.width, 300), StoryContent.ItemDescription(id), _text);
                            int fi = Array.IndexOf(FragIds, id);
                            if (fi >= 0)
                            {
                                if (_fragTex == null) OpenFragmentsTexturesOnly();
                                GUI.DrawTexture(new Rect(detail.x, detail.y + 220, 320, 240), _fragTex[fi], ScaleMode.ScaleToFit);
                            }
                        }
                        break;
                    }
                case 1:
                    {
                        var names = new List<string>();
                        foreach (var d in inv.documents) names.Add(StoryContent.DocTitle(d));
                        DrawList(list, names);
                        if (_selected >= 0 && _selected < inv.documents.Count) DrawDocumentInRect(detail, inv.documents[_selected]);
                        break;
                    }
                case 2: DrawPhotos(p, inv); break;
                case 3:
                    {
                        var j = gm.Data.story.journal;
                        var view = new Rect(p.x, p.y + 130, p.width, p.height - 200);
                        float h = 0;
                        var heights = new float[j.Count];
                        for (int i = j.Count - 1; i >= 0; i--) { heights[i] = _text.CalcHeight(new GUIContent(j[i]), view.width - 40) + 10; h += heights[i]; }
                        _invScroll = GUI.BeginScrollView(view, _invScroll, new Rect(0, 0, view.width - 30, Mathf.Max(h, view.height)));
                        float y = 0;
                        for (int i = j.Count - 1; i >= 0; i--)
                        {
                            GUI.Label(new Rect(0, y, view.width - 40, heights[i]), j[i], i == j.Count - 1 ? _text : _small);
                            y += heights[i];
                        }
                        GUI.EndScrollView();
                        if (j.Count == 0) GUI.Label(view, "Nothing yet.", _small);
                        break;
                    }
            }
            var keyName = KeyName(gm.Settings.KeyFor(InputAction.Inventory));
            GUI.Label(new Rect(p.x, p.yMax - 40, 900, 40), $"[{keyName}] or [Esc] to close", _small);
        }

        void OpenFragmentsTexturesOnly()
        {
            var photo = Materials.FamilyPhoto(true);
            _fragTex = new[] { photo.Crop(0, 0, 128, 96), photo.Crop(128, 0, 128, 96), photo.Crop(0, 96, 128, 96), photo.Crop(128, 96, 128, 96) };
        }

        void DrawList(Rect r, List<string> names)
        {
            _invScroll = GUI.BeginScrollView(r, _invScroll, new Rect(0, 0, r.width - 30, Mathf.Max(names.Count * 52, r.height)));
            for (int i = 0; i < names.Count; i++)
            {
                var br = new Rect(0, i * 52, r.width - 30, 48);
                if (i == _selected) Fill(br, new Color(1, 1, 1, 0.07f));
                if (Button(br, names[i])) { _selected = i; _detailScroll = Vector2.zero; }
            }
            GUI.EndScrollView();
            if (names.Count == 0) GUI.Label(r, "Nothing yet.", _small);
        }

        void DrawPhotos(Rect p, InventoryState inv)
        {
            var photos = inv.photos;
            if (_selected >= 0 && _selected < photos.Count)
            {
                var ph = photos[_selected];
                var tex = CameraController.LoadPhoto(ph.file);
                var r = new Rect(p.x + 40, p.y + 130, 820, 615);
                Fill(new Rect(r.x - 18, r.y - 18, r.width + 36, r.height + 110), new Color(0.9f, 0.88f, 0.82f));
                if (tex != null) GUI.DrawTexture(r, tex, ScaleMode.ScaleToFit);
                else GUI.Label(r, "(The photograph has faded.)", _paper);
                GUI.Label(new Rect(r.x, r.yMax + 14, r.width, 70), ph.caption, _paper);
                GUI.Label(new Rect(r.xMax + 60, r.y, 600, 40), "Taken at " + ph.takenAt, _small);
                GUI.Label(new Rect(r.xMax + 60, r.y + 40, 640, 300), ph.caption, _text);
                if (Button(new Rect(r.xMax + 60, r.yMax - 50, 240, 50), "Back")) _selected = -1;
                return;
            }
            var view = new Rect(p.x, p.y + 130, p.width, p.height - 200);
            int cols = 5;
            float cw = 300, ch = 250;
            int rows = (photos.Count + cols - 1) / cols;
            _invScroll = GUI.BeginScrollView(view, _invScroll, new Rect(0, 0, view.width - 30, Mathf.Max(rows * (ch + 20), view.height)));
            for (int i = 0; i < photos.Count; i++)
            {
                var r = new Rect((i % cols) * (cw + 20), (i / cols) * (ch + 20), cw, ch);
                Fill(r, new Color(0.88f, 0.86f, 0.8f));
                var tex = CameraController.LoadPhoto(photos[i].file);
                if (tex != null) GUI.DrawTexture(new Rect(r.x + 10, r.y + 10, cw - 20, ch - 50), tex, ScaleMode.ScaleAndCrop);
                GUI.Label(new Rect(r.x + 10, r.yMax - 38, cw - 20, 30), photos[i].takenAt, new GUIStyle(_paper) { fontSize = 18 });
                if (GUI.Button(r, GUIContent.none, GUIStyle.none)) _selected = i;
            }
            GUI.EndScrollView();
            if (photos.Count == 0) GUI.Label(view, "No photographs yet.", _small);
        }

        // ------------------------------------------------------------------ documents
        void DrawDocument(string id, bool modal)
        {
            Fill(new Rect(0, 0, VW, VH), new Color(0, 0, 0, 0.75f));
            var r = new Rect(VW / 2 - 520, 90, 1040, VH - 180);
            DrawDocumentInRect(r, id);
            var gm = GameManager.I;
            GUI.Label(new Rect(r.x, r.yMax + 20, r.width, 40), $"[{KeyName(gm.Settings.KeyFor(InputAction.Interact))}] or [Esc] to close", _small);
        }

        void DrawDocumentInRect(Rect r, string id)
        {
            Fill(r, new Color(0.86f, 0.83f, 0.75f));
            Fill(new Rect(r.x, r.y, r.width, 6), new Color(0.7f, 0.66f, 0.58f));
            var title = new GUIStyle(_paper) { fontSize = 32, fontStyle = FontStyle.Bold };
            GUI.Label(new Rect(r.x + 50, r.y + 40, r.width - 100, 50), StoryContent.DocTitle(id), title);
            string body = StoryContent.DocBody(id);
            float h = _paper.CalcHeight(new GUIContent(body), r.width - 130);
            var view = new Rect(r.x + 50, r.y + 110, r.width - 80, r.height - 150);
            _detailScroll = GUI.BeginScrollView(view, _detailScroll, new Rect(0, 0, r.width - 130, Mathf.Max(h, view.height)));
            GUI.Label(new Rect(0, 0, r.width - 130, h), body, _paper);
            GUI.EndScrollView();
        }

        // ------------------------------------------------------------------ padlock
        void DrawPadlock(GameManager gm)
        {
            Fill(new Rect(0, 0, VW, VH), new Color(0, 0, 0, 0.75f));
            var r = new Rect(VW / 2 - 420, VH / 2 - 300, 840, 600);
            GUI.DrawTexture(r, _panel);
            GUI.Label(new Rect(r.x + 40, r.y + 30, r.width - 80, 40), "A heavy padlock. Four dials, each engraved with a symbol.", _text);
            for (int i = 0; i < 4; i++)
            {
                float cx = r.x + 110 + i * 180;
                GUI.DrawTexture(new Rect(cx - 32, r.y + 110, 64, 64), SymbolIcon(i));
                if (Button(new Rect(cx - 40, r.y + 190, 80, 56), "   +")) { _lock.Step(i, 1); gm.Audio.Play2D(Snd.Switch, 0.3f, AudioCat.Sfx, 0.7f); }
                Fill(new Rect(cx - 45, r.y + 255, 90, 100), new Color(0.15f, 0.14f, 0.12f));
                GUI.Label(new Rect(cx - 45, r.y + 255, 90, 100), _lock.Digits[i].ToString(), new GUIStyle(_center) { fontSize = 64 });
                if (Button(new Rect(cx - 40, r.y + 365, 80, 56), "   -")) { _lock.Step(i, -1); gm.Audio.Play2D(Snd.Switch, 0.3f, AudioCat.Sfx, 0.7f); }
            }
            if (Button(new Rect(r.x + 40, r.yMax - 90, 260, 56), "Pull the shackle"))
            {
                if (_lock.IsOpen) { CloseAllModals(); _lockSolved?.Invoke(); }
                else { gm.Audio.Play2D(Snd.Locked, 0.8f); GameEvents.Notify("It doesn't open."); }
            }
            if (Button(new Rect(r.xMax - 220, r.yMax - 90, 180, 56), "Leave")) CloseAllModals();
        }

        // ------------------------------------------------------------------ TV channels
        void DrawChannels()
        {
            Fill(new Rect(0, 0, VW, VH), new Color(0, 0, 0, 0.35f));
            var r = new Rect(VW - 700, VH / 2 - 300, 600, 600);
            GUI.DrawTexture(r, _panel);
            GUI.Label(new Rect(r.x + 40, r.y + 30, 520, 40), "The channel dial clicks stiffly.", _text);
            GUI.Label(new Rect(r.x + 40, r.y + 80, 520, 80), "CH " + _channel.ToString("00"), new GUIStyle(_center) { fontSize = 56 });
            for (int i = 0; i < 12; i++)
            {
                var b = new Rect(r.x + 60 + (i % 4) * 125, r.y + 190 + (i / 4) * 90, 110, 76);
                if (Button(b, "  " + (i + 1)))
                {
                    _channel = i + 1;
                    GameManager.I.Audio.Play2D(Snd.Switch, 0.6f, AudioCat.Sfx, 0.6f);
                    _onTune?.Invoke(_channel);
                }
            }
            if (Button(new Rect(r.xMax - 220, r.yMax - 90, 180, 56), "Leave")) CloseAllModals();
        }

        // ------------------------------------------------------------------ photo reconstruction
        void DrawFragments(GameManager gm)
        {
            Fill(new Rect(0, 0, VW, VH), new Color(0, 0, 0, 0.8f));
            var r = new Rect(VW / 2 - 700, 120, 1400, 820);
            GUI.Label(new Rect(r.x, r.y - 60, r.width, 40), "The frame is empty except for torn edges. Put the pieces back where they belong.", _text);
            var frame = new Rect(r.x + 40, r.y + 40, 800, 600);
            Fill(new Rect(frame.x - 24, frame.y - 24, frame.width + 48, frame.height + 48), new Color(0.22f, 0.15f, 0.1f));
            for (int s = 0; s < 4; s++)
            {
                var sr = new Rect(frame.x + (s % 2) * 400, frame.y + (s / 2) * 300, 400, 300);
                Fill(new Rect(sr.x + 2, sr.y + 2, sr.width - 4, sr.height - 4), new Color(0.1f, 0.09f, 0.08f));
                int f = _frag.Slots[s];
                if (f >= 0) GUI.DrawTexture(sr, _fragTex[f], ScaleMode.StretchToFill);
                if (_fragSolvedAt < 0f && GUI.Button(sr, GUIContent.none, GUIStyle.none))
                {
                    if (_fragSelected >= 0) { _frag.Place(_fragSelected, s); _fragSelected = -1; gm.Audio.Play2D(Snd.Paper, 0.5f); }
                    else if (f >= 0) _frag.Clear(s);
                    if (_frag.IsSolved) { _fragSolvedAt = Time.unscaledTime; gm.Audio.Play2D(Snd.MusicBox, 0.4f, AudioCat.Music); }
                }
            }
            float y = frame.y;
            GUI.Label(new Rect(frame.xMax + 60, y - 40, 400, 40), "Pieces", _small);
            for (int i = 0; i < 4; i++)
            {
                if (!gm.Story.Has(FragIds[i]) || _frag.IsPlaced(i)) continue;
                var br = new Rect(frame.xMax + 60, y, 240, 180);
                if (_fragSelected == i) Fill(new Rect(br.x - 6, br.y - 6, br.width + 12, br.height + 12), _ink);
                GUI.DrawTexture(br, _fragTex[i], ScaleMode.StretchToFill);
                if (_fragSolvedAt < 0f && GUI.Button(br, GUIContent.none, GUIStyle.none)) _fragSelected = _fragSelected == i ? -1 : i;
                y += 196;
            }
            if (_fragSolvedAt > 0f)
            {
                GUI.Label(new Rect(frame.x, frame.yMax + 40, 900, 40), "A man, a woman, and between them, a small girl in yellow.", _text);
                if (Time.unscaledTime - _fragSolvedAt > 3.5f) { CloseAllModals(); _fragSolved?.Invoke(); }
                return;
            }
            GUI.Label(new Rect(frame.x, frame.yMax + 40, 900, 40), "Select a piece, then a corner. Select a placed piece to remove it.", _small);
            if (Button(new Rect(r.xMax - 220, r.yMax - 40, 180, 56), "Leave")) CloseAllModals();
        }

        // ------------------------------------------------------------------ endings
        string _endLine, _endSpeaker, _endTitle, _endEpigraph;
        float _endAlpha;
        bool _endCredits;
        float _creditsY;

        public IEnumerator PlayEnding(Ending ending)
        {
            var e = StoryContent.GetEnding(ending);
            var gm = GameManager.I;
            gm.Audio.Play2D(ending == Ending.Remember ? Snd.Lullaby : Snd.Drone, 0.5f, AudioCat.Music);
            _endCredits = false;
            _endTitle = null;
            foreach (var line in e.Lines)
            {
                _endLine = line.Text;
                _endSpeaker = line.Speaker;
                if (!string.IsNullOrEmpty(line.Speaker))
                {
                    var clip = ProceduralAudio.Voice(line.Text, line.Speaker == StoryContent.Child ? 255f : 92f, true, line.Text.GetHashCode());
                    gm.Audio.PlayClipAt(clip, Vector3.zero, 0.8f, 1f, AudioCat.Voice, 5f, 0f);
                }
                gm.Story.AddJournal(line.Text);
                float dur = Mathf.Max(3.5f, 2f + line.Text.Length * 0.06f);
                yield return FadeEnd(1f, 1f);
                yield return new WaitForSecondsRealtime(dur);
                yield return FadeEnd(0f, 0.8f);
            }
            _endLine = null;
            _endTitle = e.Title;
            _endEpigraph = e.Epigraph;
            yield return FadeEnd(1f, 1.5f);
            yield return new WaitForSecondsRealtime(5f);
            yield return FadeEnd(0f, 1.5f);
            _endTitle = null;
            _endCredits = true;
            _creditsY = VH;
            _endAlpha = 1f;
            float t = 0f;
            while (t < 40f && _creditsY > -900f)
            {
                t += Time.unscaledDeltaTime;
                _creditsY -= Time.unscaledDeltaTime * 55f;
                if (t > 3f && Input.anyKeyDown) break;
                yield return null;
            }
            _endCredits = false;
        }

        IEnumerator FadeEnd(float target, float duration)
        {
            float start = _endAlpha, t = 0;
            while (t < duration) { t += Time.unscaledDeltaTime; _endAlpha = Mathf.Lerp(start, target, t / duration); yield return null; }
            _endAlpha = target;
        }

        void DrawEnding()
        {
            Fill(new Rect(0, 0, VW, VH), Color.black);
            GUI.color = new Color(1, 1, 1, _endAlpha);
            if (_endLine != null)
            {
                string txt = string.IsNullOrEmpty(_endSpeaker) ? _endLine : $"<color=#9c968a>{_endSpeaker}:</color> {_endLine}";
                GUI.Label(new Rect(VW / 2 - 700, VH / 2 - 60, 1400, 160), txt, new GUIStyle(_sub) { fontSize = 34 });
            }
            if (_endTitle != null)
            {
                GUI.Label(new Rect(0, VH / 2 - 80, VW, 80), _endTitle, new GUIStyle(_center) { fontSize = 50, fontStyle = FontStyle.Bold });
                GUI.Label(new Rect(0, VH / 2 + 10, VW, 60), "<i>" + _endEpigraph + "</i>", new GUIStyle(_center) { fontSize = 28 });
            }
            if (_endCredits)
                GUI.Label(new Rect(VW / 2 - 600, _creditsY, 1200, 1400), StoryContent.Credits, new GUIStyle(_sub) { fontSize = 30 });
            GUI.color = Color.white;
        }
    }
}
