using System.Collections.Generic;
using UnityEngine;

namespace Unseen
{
    /// <summary>
    /// Procedurally generated textures and materials in a grounded, desaturated palette.
    /// Uses URP/Lit when available and falls back to the built-in Standard shader.
    /// Textures are generated once and cached; one texture tile = one metre (box meshes use metre UVs).
    /// </summary>
    public static class Materials
    {
        static readonly Dictionary<string, Material> Cache = new Dictionary<string, Material>();
        static Shader _lit, _unlit;

        public static Shader Lit => _lit != null ? _lit : (_lit = Shader.Find("Universal Render Pipeline/Lit") ?? Shader.Find("Standard"));
        public static Shader Unlit => _unlit != null ? _unlit : (_unlit = Shader.Find("Universal Render Pipeline/Unlit") ?? Shader.Find("Unlit/Texture"));

        public static Material Get(string name)
        {
            if (Cache.TryGetValue(name, out var m) && m != null) return m;
            m = Create(name);
            m.name = name;
            Cache[name] = m;
            return m;
        }

        public static Material NewLit(Color c, Texture2D tex = null, float smooth = 0.15f, float metal = 0f)
        {
            var m = new Material(Lit) { color = c };
            if (tex != null) m.mainTexture = tex;
            m.SetFloat("_Smoothness", smooth);
            m.SetFloat("_Glossiness", smooth);
            m.SetFloat("_Metallic", metal);
            return m;
        }

        public static Material NewUnlit(Color c, Texture tex = null)
        {
            var m = new Material(Unlit) { color = c };
            if (tex != null) m.mainTexture = tex;
            return m;
        }

        public static Material Emissive(Color baseColor, Color emission)
        {
            var m = NewLit(baseColor, null, 0.3f);
            m.EnableKeyword("_EMISSION");
            m.SetColor("_EmissionColor", emission);
            m.globalIlluminationFlags = MaterialGlobalIlluminationFlags.RealtimeEmissive;
            return m;
        }

        /// <summary>Alpha-tested material for decals: writing, symbols, drawings.</summary>
        public static Material Cutout(Texture2D tex, Color tint, bool unlit = false)
        {
            var m = unlit ? NewUnlit(tint, tex) : NewLit(tint, tex, 0.1f);
            m.SetFloat("_AlphaClip", 1f);
            m.SetFloat("_Cutoff", 0.5f);
            m.EnableKeyword("_ALPHATEST_ON");
            m.SetFloat("_Mode", 1f); // built-in Standard: Cutout
            m.renderQueue = 2450;
            return m;
        }

        static Material Create(string name)
        {
            switch (name)
            {
                case "wallpaper_living": return NewLit(Color.white, Wallpaper(new Color(0.55f, 0.5f, 0.4f), new Color(0.46f, 0.42f, 0.33f), 0), 0.05f);
                case "wallpaper_bed": return NewLit(Color.white, Wallpaper(new Color(0.42f, 0.47f, 0.42f), new Color(0.36f, 0.4f, 0.35f), 1), 0.05f);
                case "wallpaper_hall": return NewLit(Color.white, Wallpaper(new Color(0.5f, 0.46f, 0.39f), new Color(0.4f, 0.37f, 0.31f), 2), 0.05f);
                case "wallpaper_child": return NewLit(Color.white, Wallpaper(new Color(0.55f, 0.48f, 0.5f), new Color(0.6f, 0.56f, 0.5f), 3), 0.05f);
                case "wallpaper_stained": return NewLit(Color.white, Stained(Wallpaper(new Color(0.48f, 0.44f, 0.36f), new Color(0.38f, 0.34f, 0.28f), 2)), 0.05f);
                case "plaster": return NewLit(new Color(0.62f, 0.6f, 0.56f), Grain(new Color(0.9f, 0.9f, 0.88f), 0.08f, 6f), 0.05f);
                case "ceiling": return NewLit(new Color(0.55f, 0.54f, 0.5f), Stained(Grain(new Color(0.9f, 0.9f, 0.87f), 0.06f, 3f)), 0.02f);
                case "tile_bath": return NewLit(Color.white, Tiles(new Color(0.62f, 0.68f, 0.66f), new Color(0.35f, 0.37f, 0.35f), 6), 0.6f);
                case "tile_kitchen": return NewLit(Color.white, Tiles(new Color(0.6f, 0.58f, 0.5f), new Color(0.3f, 0.28f, 0.25f), 4, true), 0.35f);
                case "floor_wood": return NewLit(Color.white, Planks(new Color(0.36f, 0.25f, 0.17f)), 0.3f);
                case "floor_tile": return NewLit(Color.white, Tiles(new Color(0.45f, 0.45f, 0.43f), new Color(0.22f, 0.22f, 0.21f), 3), 0.25f);
                case "carpet": return NewLit(new Color(0.36f, 0.3f, 0.28f), Grain(Color.white, 0.18f, 40f), 0f);
                case "rug": return NewLit(Color.white, Rug(), 0f);
                case "concrete": return NewLit(new Color(0.42f, 0.42f, 0.4f), Stained(Grain(Color.white, 0.16f, 5f)), 0.1f);
                case "concrete_wall": return NewLit(new Color(0.45f, 0.44f, 0.41f), Stained(Grain(Color.white, 0.12f, 3f)), 0.05f);
                case "wood_dark": return NewLit(Color.white, WoodGrain(new Color(0.24f, 0.16f, 0.11f)), 0.35f);
                case "wood_light": return NewLit(Color.white, WoodGrain(new Color(0.5f, 0.38f, 0.26f)), 0.3f);
                case "wood_painted": return NewLit(new Color(0.72f, 0.7f, 0.63f), Grain(Color.white, 0.06f, 8f), 0.25f);
                case "door": return NewLit(new Color(0.62f, 0.58f, 0.5f), Grain(Color.white, 0.07f, 10f), 0.3f);
                case "door_front": return NewLit(Color.white, WoodGrain(new Color(0.3f, 0.2f, 0.14f)), 0.4f);
                case "fabric_sofa": return NewLit(new Color(0.33f, 0.36f, 0.3f), Grain(Color.white, 0.15f, 30f), 0f);
                case "fabric_bed": return NewLit(new Color(0.62f, 0.6f, 0.55f), Grain(Color.white, 0.1f, 25f), 0f);
                case "fabric_child": return NewLit(new Color(0.75f, 0.6f, 0.62f), Grain(Color.white, 0.1f, 25f), 0f);
                case "curtain": return NewLit(new Color(0.35f, 0.28f, 0.22f), Folds(), 0f);
                case "sheet": return NewLit(new Color(0.7f, 0.7f, 0.66f), Folds(), 0f);
                case "metal": return NewLit(new Color(0.45f, 0.45f, 0.43f), Grain(Color.white, 0.1f, 20f), 0.45f, 0.7f);
                case "chrome": return NewLit(new Color(0.75f, 0.75f, 0.75f), null, 0.85f, 1f);
                case "brass": return NewLit(new Color(0.7f, 0.55f, 0.25f), null, 0.75f, 1f);
                case "porcelain": return NewLit(new Color(0.85f, 0.85f, 0.82f), null, 0.75f);
                case "appliance": return NewLit(new Color(0.78f, 0.76f, 0.7f), Grain(Color.white, 0.04f, 4f), 0.5f);
                case "plastic_dark": return NewLit(new Color(0.12f, 0.11f, 0.1f), null, 0.4f);
                case "plastic_beige": return NewLit(new Color(0.68f, 0.63f, 0.52f), null, 0.35f);
                case "plastic_red": return NewLit(new Color(0.55f, 0.08f, 0.07f), null, 0.4f);
                case "screen_off": return NewLit(new Color(0.03f, 0.04f, 0.04f), null, 0.9f);
                case "glass_dark": return NewLit(new Color(0.05f, 0.06f, 0.08f), null, 0.95f);
                case "window_night": return NewUnlit(new Color(0.05f, 0.07f, 0.11f), NightSky());
                case "cardboard": return NewLit(new Color(0.5f, 0.4f, 0.27f), Grain(Color.white, 0.12f, 12f), 0.05f);
                case "paper": return NewLit(new Color(0.85f, 0.83f, 0.76f), null, 0.1f);
                case "black": return NewLit(new Color(0.02f, 0.02f, 0.02f), null, 0.1f);
                case "figure": return NewLit(new Color(0.015f, 0.015f, 0.018f), null, 0.02f);
                case "clothes": return NewLit(new Color(0.24f, 0.26f, 0.3f), Grain(Color.white, 0.1f, 30f), 0f);
                case "trousers": return NewLit(new Color(0.16f, 0.15f, 0.14f), null, 0f);
                case "skin": return NewLit(new Color(0.62f, 0.5f, 0.42f), null, 0.25f);
                case "hair": return NewLit(new Color(0.12f, 0.09f, 0.07f), null, 0.2f);
                case "child_clothes": return NewLit(new Color(0.75f, 0.65f, 0.3f), null, 0f);
                case "red_shoe": return NewLit(new Color(0.6f, 0.07f, 0.06f), null, 0.6f);
                case "rabbit": return NewLit(new Color(0.75f, 0.72f, 0.66f), Grain(Color.white, 0.15f, 30f), 0f);
                case "bulb": return Emissive(new Color(1f, 0.92f, 0.75f), new Color(2.2f, 1.8f, 1.2f));
                case "bulb_cold": return Emissive(new Color(0.85f, 0.92f, 1f), new Color(1.2f, 1.6f, 2f));
                case "lampshade": return NewLit(new Color(0.75f, 0.62f, 0.42f), Grain(Color.white, 0.08f, 20f), 0f);
                case "water": return NewLit(new Color(0.15f, 0.2f, 0.22f), null, 0.95f);
                case "dust": return NewUnlit(new Color(0.7f, 0.68f, 0.6f));
                case "tv_screen": return NewUnlit(Color.white);
            }
            Debug.LogWarning("Unknown material " + name + ", using fallback.");
            return NewLit(Color.magenta * 0.5f);
        }

        // ---------------------------------------------------------------- texture generators
        const int S = 256;

        static Texture2D Make(System.Func<int, int, Color> f, int size = S)
        {
            var t = new Texture2D(size, size, TextureFormat.RGBA32, true);
            var px = new Color32[size * size];
            for (int y = 0; y < size; y++) for (int x = 0; x < size; x++) px[y * size + x] = f(x, y);
            t.SetPixels32(px);
            t.wrapMode = TextureWrapMode.Repeat;
            t.filterMode = FilterMode.Trilinear;
            t.anisoLevel = 4;
            t.Apply(true);
            return t;
        }

        static float Fbm(float x, float y, int oct = 4)
        {
            float v = 0, a = 0.5f, f = 1f;
            for (int i = 0; i < oct; i++) { v += Mathf.PerlinNoise(x * f + 17.3f * i, y * f + 9.1f * i) * a; a *= 0.5f; f *= 2f; }
            return v;
        }

        /// <summary>Tileable-ish noise: samples on a torus so 1 m tiles repeat without obvious seams.</summary>
        static float TileNoise(int x, int y, float scale, int size = S)
        {
            float u = (float)x / size * Mathf.PI * 2f, v = (float)y / size * Mathf.PI * 2f;
            return Fbm(Mathf.Cos(u) * scale + 50f, Mathf.Sin(u) * scale + Mathf.Cos(v) * scale + 50f + Mathf.Sin(v) * scale * 0.7f);
        }

        static Texture2D Grain(Color baseC, float amount, float scale) =>
            Make((x, y) => baseC * (1f - amount + TileNoise(x, y, scale * 0.15f) * amount * 2f));

        static Texture2D Wallpaper(Color a, Color b, int pattern) => Make((x, y) =>
        {
            float n = TileNoise(x, y, 1.2f);
            float stripe;
            switch (pattern)
            {
                case 0: stripe = Mathf.Sin(x / (float)S * Mathf.PI * 2f * 8f) > 0.6f ? 1f : 0f; break; // stripes
                case 1: { float dx = (x % 32) - 16, dy = (y % 40) - 20; stripe = dx * dx / 30f + dy * dy / 70f < 1f ? 1f : 0f; break; } // small medallions
                case 3: { float dx = (x % 64) - 32, dy = ((y + (x / 64) * 32) % 64) - 32; stripe = Mathf.Abs(dx) + Mathf.Abs(dy) < 7 ? 1f : 0f; break; } // child's room diamonds
                default: stripe = (x % 64 < 3 || x % 64 > 61) ? 1f : 0f; break; // thin pin lines
            }
            Color c = Color.Lerp(a, b, stripe * 0.6f);
            float aging = Mathf.Clamp01((float)y / S * 0.4f + n * 0.3f);
            c *= 0.85f + 0.2f * n;
            c = Color.Lerp(c, new Color(0.45f, 0.4f, 0.3f), aging * 0.25f);
            return c;
        });

        /// <summary>Adds water stains and grime.</summary>
        static Texture2D Stained(Texture2D src)
        {
            var px = src.GetPixels32();
            int size = src.width;
            for (int y = 0; y < size; y++)
                for (int x = 0; x < size; x++)
                {
                    float n = TileNoise(x, y, 0.6f, size);
                    float stain = Mathf.Clamp01((n - 0.55f) * 6f);
                    Color c = px[y * size + x];
                    px[y * size + x] = Color.Lerp(c, c * new Color(0.62f, 0.55f, 0.42f), stain * 0.7f);
                }
            var t = new Texture2D(size, size, TextureFormat.RGBA32, true) { wrapMode = TextureWrapMode.Repeat, filterMode = FilterMode.Trilinear };
            t.SetPixels32(px);
            t.Apply(true);
            return t;
        }

        static Texture2D Tiles(Color tile, Color grout, int perMetre, bool diagonal = false) => Make((x, y) =>
        {
            int cell = S / perMetre;
            int gx = x % cell, gy = y % cell;
            bool g = gx < 2 || gy < 2;
            float n = TileNoise(x, y, 2f);
            int idx = (x / cell) + (y / cell) * 7;
            float variation = ((idx * 37) % 11) / 11f * 0.08f;
            Color c = g ? grout : tile * (0.92f + variation + n * 0.1f);
            if (diagonal && ((x / cell + y / cell) % 2 == 0) && !g) c *= 0.9f;
            return c;
        });

        static Texture2D Planks(Color baseC) => Make((x, y) =>
        {
            int plank = x / 32;
            int offset = (plank * 97) % S;
            int yy = (y + offset) % S;
            bool seam = x % 32 < 1 || yy % 128 < 1;
            float grain = Mathf.PerlinNoise(x * 0.05f + plank * 13f, yy * 0.006f) * 0.5f + Mathf.Sin((x + Mathf.PerlinNoise(yy * 0.02f, plank) * 20f) * 0.6f) * 0.08f;
            Color c = baseC * (0.8f + grain * 0.5f + ((plank * 29) % 7) * 0.025f);
            return seam ? c * 0.45f : c;
        });

        static Texture2D WoodGrain(Color baseC) => Make((x, y) =>
        {
            float g = Mathf.Sin((y * 0.08f + TileNoise(x, y, 1.5f) * 8f)) * 0.5f + 0.5f;
            return baseC * (0.85f + g * 0.3f);
        });

        static Texture2D Rug() => Make((x, y) =>
        {
            float cx = Mathf.Abs(x - S / 2f) / (S / 2f), cy = Mathf.Abs(y - S / 2f) / (S / 2f);
            float border = Mathf.Max(cx, cy);
            Color c = new Color(0.42f, 0.16f, 0.13f);
            if (border > 0.85f) c = new Color(0.25f, 0.22f, 0.2f);
            else if (border > 0.78f) c = new Color(0.6f, 0.5f, 0.35f);
            else if (Mathf.Abs(cx - cy) < 0.05f) c = new Color(0.55f, 0.45f, 0.3f);
            return c * (0.8f + Mathf.PerlinNoise(x * 0.3f, y * 0.3f) * 0.3f);
        });

        static Texture2D Folds() => Make((x, y) =>
        {
            float f = Mathf.Sin(x / (float)S * Mathf.PI * 2f * 6f + Mathf.PerlinNoise(x * 0.01f, y * 0.01f) * 3f) * 0.5f + 0.5f;
            return Color.white * (0.75f + f * 0.3f);
        });

        static Texture2D NightSky() => Make((x, y) =>
        {
            float h = (float)y / S;
            Color c = Color.Lerp(new Color(0.02f, 0.025f, 0.04f), new Color(0.09f, 0.1f, 0.14f), h);
            // a few distant lit windows of the building opposite
            if (h < 0.55f && (x / 18 * 31 + y / 22 * 17) % 23 == 0 && x % 18 > 6 && y % 22 > 9) c = new Color(0.35f, 0.28f, 0.15f);
            return c;
        });

        // ---------------------------------------------------------------- special textures
        static Texture2D _static;
        public static Texture2D StaticNoise
        {
            get
            {
                if (_static != null) return _static;
                var rng = new System.Random(3);
                _static = Make((x, y) => { float v = (float)rng.NextDouble(); v = v * v; return new Color(v, v, v * 1.05f); }, 128);
                _static.filterMode = FilterMode.Point;
                return _static;
            }
        }

        /// <summary>The family photograph. withChild = false draws the version with the empty space.</summary>
        public static PixelCanvas FamilyPhoto(bool withChild)
        {
            var c = new PixelCanvas(256, 192, new Color(0.92f, 0.9f, 0.84f));
            // interior: faded summer park
            for (int y = 10; y < 182; y++)
                for (int x = 10; x < 246; x++)
                {
                    float h = (y - 10) / 172f;
                    Color bg = Color.Lerp(new Color(0.62f, 0.66f, 0.62f), new Color(0.45f, 0.5f, 0.32f), Mathf.Clamp01((h - 0.55f) * 3f));
                    c.Set(x, y, bg * (0.9f + Mathf.PerlinNoise(x * 0.05f, y * 0.05f) * 0.15f));
                }
            // man (left), woman (right), child (middle, in front)
            Color coat = new Color(0.28f, 0.3f, 0.35f), skin = new Color(0.72f, 0.58f, 0.48f), dress = new Color(0.55f, 0.32f, 0.3f);
            c.Rect(52, 70, 46, 112, coat); c.Ellipse(75, 52, 15, 19, skin); c.Ellipse(75, 38, 15, 8, new Color(0.2f, 0.14f, 0.1f));
            c.Rect(158, 78, 42, 104, dress); c.Ellipse(179, 60, 14, 18, skin); c.Ellipse(179, 50, 17, 13, new Color(0.35f, 0.22f, 0.12f));
            c.Line(98, 100, 118, 128, 9, coat); // man's arm reaching down towards the child
            if (withChild)
            {
                c.Rect(110, 122, 34, 60, new Color(0.8f, 0.7f, 0.3f));
                c.Ellipse(127, 108, 12, 14, skin);
                c.Ellipse(127, 99, 13, 8, new Color(0.25f, 0.16f, 0.1f));
            }
            c.Noise(0.05f);
            return c;
        }

        /// <summary>A note or scrawl rendered to a texture.</summary>
        public static Texture2D Writing(string text, int w, int h, int scale, Color ink, Color bg, bool scrawl)
        {
            var c = new PixelCanvas(w, h, bg);
            var lines = text.Split('\n');
            int total = lines.Length * 9 * scale;
            int y = (h - total) / 2;
            foreach (var l in lines) { c.TextCentered(y, l, scale, ink, scrawl); y += 9 * scale; }
            return c.ToTexture();
        }

        public static Texture2D SymbolCard(Symbol s, string text, Color ink, Color bg, bool scrawl, int w = 256, int h = 128)
        {
            var c = new PixelCanvas(w, h, bg);
            c.DrawSymbol(s, h * 0.5f, h * 0.5f, h * 0.3f, h * 0.06f, ink);
            if (!string.IsNullOrEmpty(text)) c.Text((int)(h * 1.0f), h / 2 - 14, text, 4, ink, scrawl);
            return c.ToTexture();
        }
    }
}
