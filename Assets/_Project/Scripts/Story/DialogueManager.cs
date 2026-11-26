using System;
using System.Collections.Generic;
using UnityEngine;

namespace Unseen
{
    /// <summary>
    /// Plays dialogue lines with a synthesized voice (spatialized at its source) and subtitles.
    /// Everything said is also written to the journal so it can be re-read with subtitles off.
    /// </summary>
    public class DialogueManager : MonoBehaviour
    {
        class Request
        {
            public Line[] Lines;
            public VoiceKind Voice;
            public Transform Source;
            public Action Done;
            public int Index;
        }

        readonly Queue<Request> _queue = new Queue<Request>();
        Request _current;
        float _lineEnd;
        AudioSource _playing;

        public string Subtitle { get; private set; }
        public string Speaker { get; private set; }
        public bool Busy => _current != null || _queue.Count > 0;

        public void Play(Line[] lines, VoiceKind voice, Transform source = null, Action onDone = null)
        {
            if (lines == null || lines.Length == 0) { onDone?.Invoke(); return; }
            _queue.Enqueue(new Request { Lines = lines, Voice = voice, Source = source, Done = onDone });
        }

        /// <summary>Protagonist's inner voice: subtitle only, no sound.</summary>
        public void Thought(string text) => Play(new[] { new Line("", text) }, VoiceKind.Thought);

        public void StopAll()
        {
            _queue.Clear();
            _current = null;
            Subtitle = null;
            if (_playing != null) _playing.Stop();
        }

        void Update()
        {
            var gm = GameManager.I;
            if (gm.State == GameState.Paused) return;
            if (_current != null && Time.time < _lineEnd) return;

            if (_current != null)
            {
                _current.Index++;
                if (_current.Index >= _current.Lines.Length)
                {
                    var done = _current.Done;
                    _current = null;
                    Subtitle = null;
                    done?.Invoke();
                }
            }
            if (_current == null)
            {
                if (_queue.Count == 0) return;
                _current = _queue.Dequeue();
            }
            StartLine(_current);
        }

        void StartLine(Request r)
        {
            var line = r.Lines[r.Index];
            Speaker = line.Speaker;
            Subtitle = line.Text;
            float duration = 1.4f + line.Text.Length * 0.055f;
            if (r.Voice != VoiceKind.Thought && r.Voice != VoiceKind.None)
            {
                float pitch; bool phone;
                switch (r.Voice)
                {
                    case VoiceKind.Child: pitch = 255f; phone = r.Source != null && r.Source.name.Contains("Phone"); break;
                    case VoiceKind.Radio: pitch = 128f; phone = true; break;
                    case VoiceKind.Tape: pitch = 112f; phone = true; break;
                    case VoiceKind.Woman: pitch = 190f; phone = true; break;
                    default: pitch = 92f; phone = true; break;
                }
                var clip = ProceduralAudio.Voice(line.Text, pitch, phone, line.Text.GetHashCode());
                var gm = GameManager.I;
                _playing = r.Source != null
                    ? gm.Audio.PlayClipAt(clip, r.Source.position, 0.9f, 1f, AudioCat.Voice, 8f, 0.85f)
                    : gm.Audio.PlayClipAt(clip, Vector3.zero, 0.8f, 1f, AudioCat.Voice, 8f, 0f);
                duration = Mathf.Max(duration, clip.length + 0.3f);
            }
            _lineEnd = Time.time + duration;
            GameManager.I.Story.AddJournal(string.IsNullOrEmpty(line.Speaker) ? "(" + line.Text + ")" : line.Speaker + ": " + line.Text);
        }
    }
}
