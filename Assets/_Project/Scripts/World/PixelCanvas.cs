using System.Collections.Generic;
using UnityEngine;

namespace Unseen
{
    public enum Symbol { Circle, Triangle, Square, Cross }

    /// <summary>
    /// CPU drawing surface for procedural textures: text (built-in 5x7 bitmap font, so no font assets),
    /// symbols, rectangles and simple figures. Used for notes, mirror writing, TV cards and photographs.
    /// </summary>
    public class PixelCanvas
    {
        public readonly int W, H;
        readonly Color32[] _px;
        readonly System.Random _rng = new System.Random(7);

        public PixelCanvas(int w, int h, Color bg)
        {
            W = w; H = h;
            _px = new Color32[w * h];
            Color32 c = bg;
            for (int i = 0; i < _px.Length; i++) _px[i] = c;
        }

        /// <summary>Set a pixel; y = 0 is the top row.</summary>
        public void Set(int x, int y, Color c)
        {
            if (x < 0 || y < 0 || x >= W || y >= H) return;
            int i = (H - 1 - y) * W + x;
            _px[i] = c.a >= 0.999f ? (Color32)c : (Color32)Color.Lerp(_px[i], c, c.a);
        }

        public Color Get(int x, int y) => _px[(H - 1 - y) * W + x];

        public void Rect(int x, int y, int w, int h, Color c)
        {
            for (int j = y; j < y + h; j++) for (int i = x; i < x + w; i++) Set(i, j, c);
        }

        public void Disc(float cx, float cy, float r, Color c)
        {
            for (int y = (int)(cy - r); y <= cy + r; y++)
                for (int x = (int)(cx - r); x <= cx + r; x++)
                    if ((x - cx) * (x - cx) + (y - cy) * (y - cy) <= r * r) Set(x, y, c);
        }

        public void Ellipse(float cx, float cy, float rx, float ry, Color c)
        {
            for (int y = (int)(cy - ry); y <= cy + ry; y++)
                for (int x = (int)(cx - rx); x <= cx + rx; x++)
                {
                    float dx = (x - cx) / rx, dy = (y - cy) / ry;
                    if (dx * dx + dy * dy <= 1f) Set(x, y, c);
                }
        }

        public void Line(float x0, float y0, float x1, float y1, float thick, Color c)
        {
            float len = Mathf.Max(Mathf.Abs(x1 - x0), Mathf.Abs(y1 - y0));
            int steps = Mathf.Max(1, (int)len);
            for (int s = 0; s <= steps; s++)
            {
                float t = (float)s / steps;
                Disc(Mathf.Lerp(x0, x1, t), Mathf.Lerp(y0, y1, t), thick * 0.5f, c);
            }
        }

        public void DrawSymbol(Symbol s, float cx, float cy, float r, float thick, Color c)
        {
            switch (s)
            {
                case Symbol.Circle:
                    for (int a = 0; a < 90; a++)
                    {
                        float t0 = a / 90f * Mathf.PI * 2f, t1 = (a + 1) / 90f * Mathf.PI * 2f;
                        Line(cx + Mathf.Cos(t0) * r, cy + Mathf.Sin(t0) * r, cx + Mathf.Cos(t1) * r, cy + Mathf.Sin(t1) * r, thick, c);
                    }
                    break;
                case Symbol.Triangle:
                    Line(cx, cy - r, cx + r * 0.95f, cy + r * 0.75f, thick, c);
                    Line(cx + r * 0.95f, cy + r * 0.75f, cx - r * 0.95f, cy + r * 0.75f, thick, c);
                    Line(cx - r * 0.95f, cy + r * 0.75f, cx, cy - r, thick, c);
                    break;
                case Symbol.Square:
                    Line(cx - r * 0.8f, cy - r * 0.8f, cx + r * 0.8f, cy - r * 0.8f, thick, c);
                    Line(cx + r * 0.8f, cy - r * 0.8f, cx + r * 0.8f, cy + r * 0.8f, thick, c);
                    Line(cx + r * 0.8f, cy + r * 0.8f, cx - r * 0.8f, cy + r * 0.8f, thick, c);
                    Line(cx - r * 0.8f, cy + r * 0.8f, cx - r * 0.8f, cy - r * 0.8f, thick, c);
                    break;
                case Symbol.Cross:
                    Line(cx - r * 0.8f, cy - r * 0.8f, cx + r * 0.8f, cy + r * 0.8f, thick, c);
                    Line(cx + r * 0.8f, cy - r * 0.8f, cx - r * 0.8f, cy + r * 0.8f, thick, c);
                    break;
            }
        }

        // 5x7 glyphs, one int per row, MSB = leftmost of 5 columns.
        static readonly Dictionary<char, int[]> Glyphs = new Dictionary<char, int[]>
        {
            {'A',new[]{14,17,17,31,17,17,17}}, {'B',new[]{30,17,17,30,17,17,30}}, {'C',new[]{14,17,16,16,16,17,14}},
            {'D',new[]{28,18,17,17,17,18,28}}, {'E',new[]{31,16,16,30,16,16,31}}, {'F',new[]{31,16,16,30,16,16,16}},
            {'G',new[]{14,17,16,23,17,17,15}}, {'H',new[]{17,17,17,31,17,17,17}}, {'I',new[]{14,4,4,4,4,4,14}},
            {'J',new[]{7,2,2,2,2,18,12}}, {'K',new[]{17,18,20,24,20,18,17}}, {'L',new[]{16,16,16,16,16,16,31}},
            {'M',new[]{17,27,21,21,17,17,17}}, {'N',new[]{17,17,25,21,19,17,17}}, {'O',new[]{14,17,17,17,17,17,14}},
            {'P',new[]{30,17,17,30,16,16,16}}, {'Q',new[]{14,17,17,17,21,18,13}}, {'R',new[]{30,17,17,30,20,18,17}},
            {'S',new[]{15,16,16,14,1,1,30}}, {'T',new[]{31,4,4,4,4,4,4}}, {'U',new[]{17,17,17,17,17,17,14}},
            {'V',new[]{17,17,17,17,17,10,4}}, {'W',new[]{17,17,17,21,21,21,10}}, {'X',new[]{17,17,10,4,10,17,17}},
            {'Y',new[]{17,17,17,10,4,4,4}}, {'Z',new[]{31,1,2,4,8,16,31}},
            {'0',new[]{14,17,19,21,25,17,14}}, {'1',new[]{4,12,4,4,4,4,14}}, {'2',new[]{14,17,1,2,4,8,31}},
            {'3',new[]{31,2,4,2,1,17,14}}, {'4',new[]{2,6,10,18,31,2,2}}, {'5',new[]{31,16,30,1,1,17,14}},
            {'6',new[]{6,8,16,30,17,17,14}}, {'7',new[]{31,1,2,4,8,8,8}}, {'8',new[]{14,17,17,14,17,17,14}},
            {'9',new[]{14,17,17,15,1,2,12}},
            {'.',new[]{0,0,0,0,0,12,12}}, {',',new[]{0,0,0,0,12,4,8}}, {'?',new[]{14,17,1,2,4,0,4}},
            {'!',new[]{4,4,4,4,4,0,4}}, {'\'',new[]{4,4,8,0,0,0,0}}, {'-',new[]{0,0,0,31,0,0,0}},
            {':',new[]{0,12,12,0,12,12,0}}, {'=',new[]{0,0,31,0,31,0,0}}, {'/',new[]{1,2,2,4,8,8,16}},
        };

        public static int TextWidth(string line, int scale) => line.Length * 6 * scale;

        /// <summary>Draws text; scrawl adds hand-made wobble and gaps (for writing on walls and mirrors).</summary>
        public void Text(int x, int y, string text, int scale, Color c, bool scrawl = false)
        {
            int cx = x, cy = y;
            foreach (char raw in text.ToUpperInvariant())
            {
                if (raw == '\n') { cx = x; cy += 9 * scale; continue; }
                if (Glyphs.TryGetValue(raw, out var rows))
                {
                    int jx = scrawl ? _rng.Next(-scale / 2, scale / 2 + 1) : 0;
                    int jy = scrawl ? _rng.Next(-scale / 2, scale / 2 + 1) : 0;
                    for (int r = 0; r < 7; r++)
                        for (int col = 0; col < 5; col++)
                        {
                            if ((rows[r] & (16 >> col)) == 0) continue;
                            for (int sy = 0; sy < scale; sy++)
                                for (int sx = 0; sx < scale; sx++)
                                {
                                    if (scrawl && _rng.NextDouble() < 0.12) continue;
                                    Set(cx + col * scale + sx + jx, cy + r * scale + sy + jy, c);
                                }
                        }
                }
                cx += 6 * scale;
            }
        }

        public void TextCentered(int y, string line, int scale, Color c, bool scrawl = false)
            => Text((W - TextWidth(line, scale)) / 2, y, line, scale, c, scrawl);

        public void Noise(float amount)
        {
            for (int i = 0; i < _px.Length; i++)
            {
                float n = ((float)_rng.NextDouble() - 0.5f) * amount;
                Color c = _px[i];
                _px[i] = new Color(c.r + n, c.g + n, c.b + n, c.a);
            }
        }

        public Texture2D ToTexture(bool mip = true, FilterMode filter = FilterMode.Bilinear)
        {
            var t = new Texture2D(W, H, TextureFormat.RGBA32, mip);
            t.SetPixels32(_px);
            t.wrapMode = TextureWrapMode.Clamp;
            t.filterMode = filter;
            t.Apply();
            return t;
        }

        /// <summary>A rectangular region as a new texture (used to tear the family photo into quarters).</summary>
        public Texture2D Crop(int x, int y, int w, int h)
        {
            var c = new PixelCanvas(w, h, Color.clear);
            for (int j = 0; j < h; j++) for (int i = 0; i < w; i++) c.Set(i, j, Get(x + i, y + j));
            return c.ToTexture(false);
        }
    }
}
