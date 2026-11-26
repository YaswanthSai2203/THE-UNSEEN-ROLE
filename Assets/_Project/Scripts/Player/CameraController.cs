using System;
using System.Collections;
using System.Collections.Generic;
using System.IO;
using UnityEngine;

namespace Unseen
{
    /// <summary>
    /// The old instant camera. A photograph is rendered by a second camera that also sees the Unseen layer,
    /// so photos can show things normal vision cannot. Photos are saved as PNG and kept in the inventory.
    /// </summary>
    public class CameraController : MonoBehaviour
    {
        public const int Width = 640, Height = 480;
        static readonly Dictionary<string, Texture2D> PhotoCache = new Dictionary<string, Texture2D>();

        Camera _photoCam;
        RenderTexture _rt;
        Light _flash;
        float _nextShot;
        public bool Busy { get; private set; }

        void Start()
        {
            var player = GetComponent<PlayerController>();
            var go = new GameObject("PhotoCamera");
            go.transform.SetParent(player.Cam.transform, false);
            _photoCam = go.AddComponent<Camera>();
            _photoCam.cullingMask = Layers.PhotoCameraMask;
            _photoCam.clearFlags = CameraClearFlags.SolidColor;
            _photoCam.backgroundColor = Color.black;
            _photoCam.fieldOfView = 55f;
            _photoCam.nearClipPlane = 0.05f;
            _photoCam.farClipPlane = 40f;
            _rt = new RenderTexture(Width, Height, 24);
            _photoCam.targetTexture = _rt;
            _photoCam.enabled = false;

            _flash = new GameObject("Flash").AddComponent<Light>();
            _flash.transform.SetParent(player.Cam.transform, false);
            _flash.type = LightType.Point;
            _flash.range = 9f;
            _flash.intensity = 4f;
            _flash.color = new Color(0.95f, 0.97f, 1f);
            _flash.enabled = false;
        }

        void OnDestroy()
        {
            if (_rt != null) _rt.Release();
        }

        void Update()
        {
            var gm = GameManager.I;
            if (gm.InputLocked || Busy) return;
            if (!gm.Settings.Down(InputAction.Camera)) return;
            if (!gm.Inventory.Has(Items.Camera)) { GameEvents.Notify("You don't have a camera."); return; }
            if (gm.Player.Eyes.IsClosed || Time.time < _nextShot) return;
            if (!gm.Inventory.Remove(Items.Film))
            {
                gm.Audio.Play2D(Snd.Locked, 0.5f);
                GameEvents.Notify("No film left. There was a box of film in the living room drawer.");
                return;
            }
            StartCoroutine(Capture());
        }

        IEnumerator Capture()
        {
            Busy = true;
            _nextShot = Time.time + 1.6f;
            var gm = GameManager.I;
            gm.Audio.Play2D(Snd.Shutter, 0.8f);
            _flash.enabled = true;
            _photoCam.enabled = true;
            gm.UI.TriggerFlash();
            yield return new WaitForEndOfFrame();

            var tex = new Texture2D(Width, Height, TextureFormat.RGB24, false);
            var prev = RenderTexture.active;
            RenderTexture.active = _rt;
            tex.ReadPixels(new Rect(0, 0, Width, Height), 0, 0);
            RenderTexture.active = prev;
            _photoCam.enabled = false;
            DevelopLook(tex);

            var captions = new List<string>();
            foreach (var r in RevealOnPhoto.All.ToArray())
                if (r.Check(_photoCam)) captions.Add(r.Caption);
            yield return new WaitForSeconds(0.08f);
            _flash.enabled = false;

            string caption = captions.Count > 0 ? string.Join(" ", captions) : StoryContent.PlainPhotoCaption();
            var record = new PhotoRecord
            {
                file = SavePng(tex, gm.Saves.PhotoFolder),
                caption = caption,
                takenAt = DateTime.Now.ToString("HH:mm")
            };
            if (record.file != null)
            {
                PhotoCache[record.file] = tex;
                gm.Inventory.AddPhoto(record);
            }
            GameEvents.Notify(captions.Count > 0 ? "The photograph shows something. (Tab to inspect)" : "Photograph taken.");
            gm.UI.ShowLatestPhoto(record);
            Busy = false;
        }

        /// <summary>Instant-film look: warm, faded, vignetted, grainy.</summary>
        static void DevelopLook(Texture2D tex)
        {
            var px = tex.GetPixels32();
            var rng = new System.Random(Environment.TickCount);
            float cx = Width / 2f, cy = Height / 2f;
            for (int y = 0; y < Height; y++)
                for (int x = 0; x < Width; x++)
                {
                    int i = y * Width + x;
                    Color c = px[i];
                    float lum = c.r * 0.3f + c.g * 0.59f + c.b * 0.11f;
                    c = Color.Lerp(c, new Color(lum, lum, lum), 0.35f);
                    c = new Color(c.r * 1.06f + 0.03f, c.g * 1.0f + 0.025f, c.b * 0.88f + 0.02f);
                    float dx = (x - cx) / cx, dy = (y - cy) / cy;
                    float v = 1f - 0.55f * Mathf.Clamp01((dx * dx + dy * dy) * 0.6f);
                    float grain = ((float)rng.NextDouble() - 0.5f) * 0.06f;
                    px[i] = new Color(c.r * v + grain, c.g * v + grain, c.b * v + grain);
                }
            tex.SetPixels32(px);
            tex.Apply();
        }

        static string SavePng(Texture2D tex, string folder)
        {
            try
            {
                Directory.CreateDirectory(folder);
                string file = Path.Combine(folder, "photo_" + DateTime.Now.Ticks + ".png");
                File.WriteAllBytes(file, tex.EncodeToPNG());
                return file;
            }
            catch (Exception e)
            {
                Debug.LogWarning("Could not save photo: " + e.Message);
                return "memory_" + DateTime.Now.Ticks;
            }
        }

        /// <summary>Loads a photo texture for the inspection UI (cached).</summary>
        public static Texture2D LoadPhoto(string file)
        {
            if (string.IsNullOrEmpty(file)) return null;
            if (PhotoCache.TryGetValue(file, out var t) && t != null) return t;
            try
            {
                if (!File.Exists(file)) return null;
                t = new Texture2D(2, 2);
                if (!t.LoadImage(File.ReadAllBytes(file))) return null;
                PhotoCache[file] = t;
                return t;
            }
            catch (Exception) { return null; }
        }
    }
}
