using System;
using System.Collections.Generic;
using UnityEngine;

namespace Unseen
{
    /// <summary>
    /// Every sound in the game is synthesized here at runtime: no external or licensed audio is required.
    /// Clips are generated on first use and cached.
    /// </summary>
    public static class ProceduralAudio
    {
        public const int Rate = 22050;
        static readonly Dictionary<Snd, AudioClip> Cache = new Dictionary<Snd, AudioClip>();
        static System.Random _rng = new System.Random(19);
        static float N() => (float)(_rng.NextDouble() * 2.0 - 1.0);
        const float TwoPi = Mathf.PI * 2f;

        public static AudioClip Get(Snd s)
        {
            if (s == Snd.None) return null;
            if (Cache.TryGetValue(s, out var c) && c != null) return c;
            c = Create(s.ToString(), Generate(s));
            Cache[s] = c;
            return c;
        }

        static AudioClip Create(string name, float[] data)
        {
            var clip = AudioClip.Create(name, data.Length, 1, Rate, false);
            clip.SetData(data, 0);
            return clip;
        }

        static float Lp(float fc) => 1f - Mathf.Exp(-TwoPi * fc / Rate);

        static float[] Buf(float seconds) => new float[Mathf.Max(1, (int)(seconds * Rate))];

        static float[] Generate(Snd s)
        {
            switch (s)
            {
                case Snd.Ring: return Ring();
                case Snd.Static: return Static();
                case Snd.Hum: return Hum(50f, 2f, 0.25f);
                case Snd.Buzz: return Buzz();
                case Snd.Fridge: return Fridge();
                case Snd.Tick: return Tick();
                case Snd.Step: return Step(1f);
                case Snd.StepHeavy: return Step(0.6f);
                case Snd.Creak: return Creak(1.3f);
                case Snd.DoorOpen: return Mix(Creak(0.9f), Click(0.02f, 1800f), 0);
                case Snd.DoorClose: return Mix(Thump(70f, 0.25f, 0.9f), Click(0.02f, 1400f), 0);
                case Snd.Locked: return Mix(Click(0.03f, 900f), Click(0.03f, 1100f), (int)(0.09f * Rate));
                case Snd.Scrape: return Scrape();
                case Snd.Drip: return Drip();
                case Snd.Breath: return Breath();
                case Snd.Whisper: return Whisper();
                case Snd.Wind: return Loopable(Wind(), 0.6f);
                case Snd.MusicBox: return Melody(1.0f, 0.55f, true);
                case Snd.Lullaby: return Melody(1.6f, 0.35f, false);
                case Snd.Knock: return Knocks();
                case Snd.Switch: return Click(0.015f, 2500f);
                case Snd.Shutter: return Shutter();
                case Snd.Pickup: return Rustle(0.25f);
                case Snd.Paper: return Rustle(0.5f);
                case Snd.Water: return Loopable(Water(), 0.3f);
                case Snd.Heartbeat: return Heartbeat();
                case Snd.Drone: return Loopable(Drone(), 0.8f);
                case Snd.Thud: return Thump(45f, 0.5f, 1f);
                case Snd.Unlock: return Mix(Click(0.02f, 3000f), Click(0.03f, 2200f), (int)(0.12f * Rate));
                case Snd.Breaker: return Mix(Thump(60f, 0.3f, 1f), Click(0.05f, 3200f), 0);
                case Snd.RoomTone: return Loopable(RoomTone(), 0.5f);
                case Snd.Stinger: return Stinger();
                case Snd.PhonePickup: return Mix(Click(0.03f, 700f), Rustle(0.15f), 0);
            }
            return Buf(0.1f);
        }

        // ---------- building blocks ----------
        static float[] Mix(float[] a, float[] b, int offset)
        {
            var o = new float[Mathf.Max(a.Length, b.Length + offset)];
            for (int i = 0; i < a.Length; i++) o[i] += a[i];
            for (int i = 0; i < b.Length; i++) o[i + offset] += b[i];
            return o;
        }

        /// <summary>Crossfades the tail into the head so the clip loops without a click.</summary>
        static float[] Loopable(float[] d, float fadeSeconds)
        {
            int f = Mathf.Min((int)(fadeSeconds * Rate), d.Length / 3);
            var o = new float[d.Length - f];
            Array.Copy(d, o, o.Length);
            for (int i = 0; i < f; i++)
            {
                float t = (float)i / f;
                o[i] = d[i] * t + d[o.Length + i] * (1f - t);
            }
            return o;
        }

        static float[] Click(float len, float freq)
        {
            var d = Buf(len);
            for (int i = 0; i < d.Length; i++)
            {
                float t = (float)i / Rate, env = Mathf.Exp(-t * 180f);
                d[i] = (N() * 0.6f + Mathf.Sin(TwoPi * freq * t) * 0.5f) * env * 0.8f;
            }
            return d;
        }

        static float[] Thump(float freq, float len, float amp)
        {
            var d = Buf(len);
            float lp = 0, a = Lp(400f);
            for (int i = 0; i < d.Length; i++)
            {
                float t = (float)i / Rate;
                lp += a * (N() - lp);
                float f = freq * (1f + 0.6f * Mathf.Exp(-t * 30f));
                d[i] = (Mathf.Sin(TwoPi * f * t) * 0.9f + lp * 0.6f) * Mathf.Exp(-t * 9f / len) * amp;
            }
            return d;
        }

        // ---------- sounds ----------
        static float[] Ring()
        {
            // Old electromechanical bell: two tones struck ~20 times a second; 2 s on, 4 s off.
            var d = Buf(6f);
            for (int i = 0; i < d.Length; i++)
            {
                float t = (float)i / Rate;
                if (t > 2f) break;
                float strike = Mathf.Exp(-(t * 20f % 1f) * 4f);
                float tone = Mathf.Sin(TwoPi * 880f * t) * 0.5f + Mathf.Sin(TwoPi * 1320f * t) * 0.25f + Mathf.Sin(TwoPi * 2205f * t) * 0.1f;
                float edge = Mathf.Clamp01(t * 30f) * Mathf.Clamp01((2f - t) * 30f);
                d[i] = tone * strike * edge * 0.5f;
            }
            return d;
        }

        static float[] Static()
        {
            var d = Buf(2f);
            float lp = 0, a = Lp(5000f);
            for (int i = 0; i < d.Length; i++)
            {
                lp += a * (N() - lp);
                float crackle = _rng.NextDouble() < 0.0015 ? N() * 2f : 0f;
                d[i] = (lp * 0.5f + crackle) * 0.5f;
            }
            return d;
        }

        static float[] Hum(float f, float len, float noise)
        {
            var d = Buf(len);
            float lp = 0, a = Lp(200f);
            for (int i = 0; i < d.Length; i++)
            {
                float t = (float)i / Rate;
                lp += a * (N() - lp);
                d[i] = (Mathf.Sin(TwoPi * f * t) * 0.5f + Mathf.Sin(TwoPi * f * 2 * t) * 0.3f + Mathf.Sin(TwoPi * f * 3 * t) * 0.12f + lp * noise) * 0.4f;
            }
            return d;
        }

        static float[] Buzz()
        {
            var d = Hum(50f, 2f, 0.1f);
            for (int i = 0; i < d.Length; i++)
            {
                float t = (float)i / Rate;
                float sq = Mathf.Sign(Mathf.Sin(TwoPi * 100f * t)) * 0.08f;
                d[i] = d[i] * 0.6f + sq + (_rng.NextDouble() < 0.0008 ? N() * 0.6f : 0f);
            }
            return d;
        }

        static float[] Fridge()
        {
            var d = Buf(4f);
            float lp = 0, a = Lp(120f);
            for (int i = 0; i < d.Length; i++)
            {
                float t = (float)i / Rate;
                lp += a * (N() - lp);
                d[i] = (Mathf.Sin(TwoPi * 50f * t) * 0.35f + Mathf.Sin(TwoPi * 150f * t) * 0.1f + lp * 1.5f) * (0.9f + 0.1f * Mathf.Sin(TwoPi * 0.5f * t)) * 0.35f;
            }
            return d;
        }

        static float[] Tick()
        {
            var d = Buf(2f);
            var tick = Click(0.03f, 2600f);
            var tock = Click(0.03f, 1900f);
            Array.Copy(tick, 0, d, 0, tick.Length);
            for (int i = 0; i < tock.Length; i++) d[Rate + i] += tock[i] * 0.8f;
            return d;
        }

        static float[] Step(float bright)
        {
            var d = Buf(0.28f);
            float lp = 0, a = Lp(900f * bright);
            for (int i = 0; i < d.Length; i++)
            {
                float t = (float)i / Rate;
                lp += a * (N() - lp);
                float heel = Mathf.Exp(-t * 35f), body = Mathf.Exp(-Mathf.Max(0, t - 0.05f) * 25f) * (t > 0.05f ? 1f : 0f);
                d[i] = (Mathf.Sin(TwoPi * 85f * t) * heel * 0.8f + lp * (heel + body * 0.7f) * 1.4f) * 0.7f;
            }
            return d;
        }

        static float[] Creak(float len)
        {
            var d = Buf(len);
            float phase = 0, lp = 0, a = Lp(1800f), wob = (float)_rng.NextDouble() * 6f;
            for (int i = 0; i < d.Length; i++)
            {
                float t = (float)i / Rate;
                float f = 95f + 45f * Mathf.Sin(t * 2.3f + wob) + 25f * Mathf.Sin(t * 7.1f);
                phase += f / Rate;
                float saw = (phase % 1f) * 2f - 1f;
                float grain = Mathf.Pow(Mathf.Max(0, Mathf.Sin(TwoPi * (18f + 8f * Mathf.Sin(t * 3f)) * t)), 6f);
                lp += a * (saw * grain - lp);
                float env = Mathf.Sin(Mathf.PI * Mathf.Clamp01(t / len));
                d[i] = lp * env * 0.9f;
            }
            return d;
        }

        static float[] Scrape()
        {
            var d = Buf(0.9f);
            float lp = 0, a = Lp(700f), lp2 = 0, a2 = Lp(150f);
            for (int i = 0; i < d.Length; i++)
            {
                float t = (float)i / Rate;
                lp += a * (N() - lp);
                lp2 += a2 * (lp - lp2);
                float rough = 0.6f + 0.4f * Mathf.Sin(TwoPi * 31f * t + Mathf.Sin(TwoPi * 3f * t) * 4f);
                float env = Mathf.Clamp01(t * 12f) * Mathf.Clamp01((0.9f - t) * 6f);
                d[i] = (lp - lp2) * rough * env * 2.2f;
            }
            return d;
        }

        static float[] Drip()
        {
            var d = Buf(0.25f);
            for (int i = 0; i < d.Length; i++)
            {
                float t = (float)i / Rate;
                float f = 700f + 1200f * Mathf.Clamp01(t / 0.03f);
                d[i] = Mathf.Sin(TwoPi * f * t) * Mathf.Exp(-t * 40f) * 0.6f;
            }
            return d;
        }

        static float[] Breath()
        {
            var d = Buf(3.6f);
            float lo = 0, hi = 0, aLo = Lp(250f), aHi = Lp(1400f);
            for (int i = 0; i < d.Length; i++)
            {
                float t = (float)i / Rate;
                float n = N();
                lo += aLo * (n - lo);
                hi += aHi * (n - hi);
                float band = hi - lo;
                float inhale = t < 1.3f ? Mathf.Sin(Mathf.PI * t / 1.3f) : 0f;
                float exhale = t > 1.6f && t < 3.4f ? Mathf.Sin(Mathf.PI * (t - 1.6f) / 1.8f) * 1.2f : 0f;
                d[i] = band * (inhale * 0.7f + exhale) * 1.6f;
            }
            return d;
        }

        static float[] Whisper()
        {
            var d = Buf(3f);
            float lo = 0, hi = 0, aLo = Lp(1800f), aHi = Lp(6000f), env = 0, target = 0;
            for (int i = 0; i < d.Length; i++)
            {
                float t = (float)i / Rate;
                if (i % (Rate / 6) == 0) target = _rng.NextDouble() < 0.7 ? (float)_rng.NextDouble() : 0f;
                env += (target - env) * 0.0015f;
                float n = N();
                lo += aLo * (n - lo);
                hi += aHi * (n - hi);
                float fade = Mathf.Clamp01(t * 3f) * Mathf.Clamp01((3f - t) * 3f);
                d[i] = (hi - lo) * env * fade * 2.2f;
            }
            return d;
        }

        static float[] Wind()
        {
            var d = Buf(9f);
            float brown = 0, lp = 0;
            for (int i = 0; i < d.Length; i++)
            {
                float t = (float)i / Rate;
                brown = Mathf.Clamp(brown + N() * 0.02f, -1f, 1f) * 0.999f;
                float gust = 0.5f + 0.35f * Mathf.Sin(TwoPi * 0.11f * t) + 0.15f * Mathf.Sin(TwoPi * 0.37f * t + 1f);
                lp += Lp(300f + 500f * gust) * (N() - lp);
                d[i] = (brown * 0.8f + lp * 0.5f) * gust * 0.6f;
            }
            return d;
        }

        // An original, simple melody in A minor (not based on any existing piece).
        static readonly int[] Notes = { 76, 79, 81, 79, 76, 74, 76, -1, 72, 74, 76, 74, 71, 69, -1, -1 };

        static float[] Melody(float beat, float amp, bool box)
        {
            float noteLen = 0.42f * beat;
            var d = Buf(noteLen * Notes.Length + 1.5f);
            for (int n = 0; n < Notes.Length; n++)
            {
                if (Notes[n] < 0) continue;
                float f = 440f * Mathf.Pow(2f, (Notes[n] - 69) / 12f);
                int start = (int)(n * noteLen * Rate);
                int len = (int)((box ? 1.4f : 2.2f) * Rate);
                for (int i = 0; i < len && start + i < d.Length; i++)
                {
                    float t = (float)i / Rate;
                    float env = box ? Mathf.Exp(-t * 3.2f) : Mathf.Clamp01(t * 6f) * Mathf.Exp(-t * 1.6f);
                    float v = Mathf.Sin(TwoPi * f * t) + (box ? 0.35f * Mathf.Sin(TwoPi * f * 3.01f * t) * Mathf.Exp(-t * 9f) : 0.2f * Mathf.Sin(TwoPi * f * 0.5f * t));
                    d[start + i] += v * env * amp * 0.5f;
                }
            }
            return d;
        }

        static float[] Knocks()
        {
            var d = Buf(1.4f);
            for (int k = 0; k < 3; k++)
            {
                var t = Thump(110f, 0.18f, 1f);
                int off = (int)((k * 0.32f + (k == 2 ? 0.1f : 0f)) * Rate);
                for (int i = 0; i < t.Length && off + i < d.Length; i++) d[off + i] += t[i];
            }
            return d;
        }

        static float[] Shutter()
        {
            var d = Mix(Click(0.02f, 3500f), Click(0.03f, 2000f), (int)(0.06f * Rate));
            var whir = Buf(0.6f);
            float lp = 0;
            for (int i = 0; i < whir.Length; i++)
            {
                float t = (float)i / Rate;
                lp += Lp(1200f + t * 2000f) * (N() - lp);
                whir[i] = (lp * 0.4f + Mathf.Sin(TwoPi * (300f + t * 400f) * t) * 0.08f) * Mathf.Sin(Mathf.PI * t / 0.6f);
            }
            return Mix(d, whir, (int)(0.12f * Rate));
        }

        static float[] Rustle(float len)
        {
            var d = Buf(len);
            float hp = 0;
            for (int i = 0; i < d.Length; i++)
            {
                float t = (float)i / Rate;
                float n = N();
                hp += Lp(800f) * (n - hp);
                float burst = _rng.NextDouble() < 0.004 ? 1f : 0f;
                d[i] = (n - hp) * (0.25f + burst) * Mathf.Sin(Mathf.PI * t / len) * 0.5f;
            }
            return d;
        }

        static float[] Water()
        {
            var d = Buf(3.4f);
            float lp = 0, a = Lp(2500f);
            for (int i = 0; i < d.Length; i++)
            {
                lp += a * (N() - lp);
                d[i] = lp * 0.45f;
            }
            for (int k = 0; k < 40; k++)
            {
                var drip = Drip();
                int off = _rng.Next(0, d.Length - drip.Length);
                for (int i = 0; i < drip.Length; i++) d[off + i] += drip[i] * 0.25f;
            }
            return d;
        }

        static float[] Heartbeat()
        {
            var d = Buf(1.1f);
            var a = Thump(55f, 0.15f, 1f);
            var b = Thump(50f, 0.18f, 0.7f);
            return Mix(Mix(d, a, 0), b, (int)(0.28f * Rate));
        }

        static float[] Drone()
        {
            var d = Buf(10f);
            float lp = 0, a = Lp(160f);
            for (int i = 0; i < d.Length; i++)
            {
                float t = (float)i / Rate;
                lp += a * (N() - lp);
                d[i] = (Mathf.Sin(TwoPi * 55f * t) * 0.3f + Mathf.Sin(TwoPi * 58.27f * t) * 0.25f + Mathf.Sin(TwoPi * 110.6f * t) * 0.12f
                        + Mathf.Sin(TwoPi * 164.8f * t) * 0.05f * (0.5f + 0.5f * Mathf.Sin(TwoPi * 0.07f * t)) + lp * 1.2f) * 0.45f;
            }
            return d;
        }

        static float[] RoomTone()
        {
            var d = Buf(5f);
            float brown = 0;
            for (int i = 0; i < d.Length; i++)
            {
                brown = Mathf.Clamp(brown + N() * 0.015f, -1f, 1f) * 0.998f;
                d[i] = brown * 0.3f;
            }
            return d;
        }

        static float[] Stinger()
        {
            var d = Buf(2.6f);
            float lp = 0;
            for (int i = 0; i < d.Length; i++)
            {
                float t = (float)i / Rate;
                lp += Lp(200f + t * 1500f) * (N() - lp);
                float swell = Mathf.Pow(t / 2.6f, 2.5f);
                d[i] = (lp + Mathf.Sin(TwoPi * 73f * t) * 0.4f + Mathf.Sin(TwoPi * 77.8f * t) * 0.4f) * swell * 0.6f;
            }
            return d;
        }

        // ---------- voice ----------
        static readonly Vector2[] Vowels = { new Vector2(750, 1200), new Vector2(450, 1900), new Vector2(320, 2250), new Vector2(520, 900), new Vector2(370, 850) };

        /// <summary>
        /// Garbled formant "speech" whose length follows the text: reads as a voice on a bad line.
        /// Subtitles carry the words; this carries the presence.
        /// </summary>
        public static AudioClip Voice(string text, float pitch, bool phone, int seed)
        {
            var rng = new System.Random(seed);
            int syllables = Mathf.Max(2, text.Length / 3);
            float sylLen = 0.17f;
            var d = new float[(int)((syllables * sylLen + 0.4f) * Rate)];
            float lpN = 0;
            for (int s = 0; s < syllables; s++)
            {
                Vector2 v = Vowels[rng.Next(Vowels.Length)];
                int start = (int)(s * sylLen * Rate);
                int len = (int)(sylLen * (0.8f + 0.4f * (float)rng.NextDouble()) * Rate);
                bool pause = rng.NextDouble() < 0.08;
                bool fricative = rng.NextDouble() < 0.35;
                float progress = (float)s / syllables;
                float f0 = pitch * (1.1f - 0.25f * progress) * (0.95f + 0.1f * (float)rng.NextDouble());
                // Formant gains depend only on the harmonic, so compute them once per syllable.
                int harmonics = Mathf.Max(1, (int)(3200f / f0));
                var gains = new float[harmonics + 1];
                for (int k = 1; k <= harmonics; k++)
                {
                    float fk = k * f0;
                    gains[k] = Mathf.Exp(-Sq((fk - v.x) / 110f)) + 0.6f * Mathf.Exp(-Sq((fk - v.y) / 160f)) + 0.08f / k;
                }
                for (int i = 0; i < len && start + i < d.Length; i++)
                {
                    float t = (float)i / Rate;
                    float u = (float)i / len;
                    float env = Mathf.Sin(Mathf.PI * u);
                    if (pause) env *= 0.05f;
                    float sample = 0;
                    float phase = TwoPi * f0 * (start + i) / Rate;
                    for (int k = 1; k <= harmonics; k++)
                        if (gains[k] > 0.02f) sample += Mathf.Sin(phase * k) * gains[k];
                    if (fricative && u < 0.25f)
                    {
                        float n = (float)(rng.NextDouble() * 2 - 1);
                        lpN += Lp(3000f) * (n - lpN);
                        sample += (n - lpN) * 1.5f * (1f - u * 4f);
                    }
                    d[start + i] += sample * env * 0.22f;
                }
            }
            if (phone)
            {
                float lp = 0, hp = 0;
                for (int i = 0; i < d.Length; i++)
                {
                    lp += Lp(3000f) * (d[i] - lp);
                    hp += Lp(350f) * (lp - hp);
                    float x = (lp - hp) * 2.2f + (float)(rng.NextDouble() * 2 - 1) * 0.015f;
                    d[i] = (float)Math.Tanh(x) * 0.6f;
                }
            }
            return Create("voice", d);
        }

        static float Sq(float x) => x * x;
    }
}
