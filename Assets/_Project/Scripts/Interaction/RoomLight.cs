using System;
using UnityEngine;

namespace Unseen
{
    /// <summary>
    /// A ceiling or lamp light with an emissive bulb. Supports power, switching, scripted flicker and
    /// perception-driven instability (only when perception is low, and sparingly).
    /// </summary>
    public class RoomLight : MonoBehaviour
    {
        public Light Light;
        public Renderer Bulb;
        public float BaseIntensity = 1f;
        public bool On = true;
        public Func<bool> HasPower;
        public bool AlwaysUnstable;
        float _flickerUntil, _seed;
        Color _bulbColor;
        MaterialPropertyBlock _mpb;

        void Start()
        {
            _seed = UnityEngine.Random.value * 100f;
            _mpb = new MaterialPropertyBlock();
            if (Bulb != null) _bulbColor = Bulb.sharedMaterial.GetColor("_EmissionColor");
        }

        public bool Powered => HasPower == null || HasPower();
        public bool Lit => On && Powered;

        public void Flicker(float seconds) => _flickerUntil = Mathf.Max(_flickerUntil, Time.time + seconds);

        void Update()
        {
            float k = Lit ? 1f : 0f;
            if (k > 0f)
            {
                float distortion = GameManager.I.Perception.Distortion;
                bool unstable = AlwaysUnstable || distortion > 0.65f;
                if (Time.time < _flickerUntil)
                    k = Mathf.PerlinNoise(Time.time * 18f, _seed) > 0.45f ? 1f : 0.05f;
                else if (unstable)
                {
                    float n = Mathf.PerlinNoise(Time.time * 2.5f, _seed);
                    if (n > 0.78f) k = Mathf.PerlinNoise(Time.time * 25f, _seed + 3f) > 0.5f ? 0.9f : 0.15f;
                }
            }
            if (Light != null)
            {
                Light.intensity = BaseIntensity * k;
                Light.enabled = k > 0.01f;
            }
            if (Bulb != null)
            {
                Bulb.GetPropertyBlock(_mpb);
                _mpb.SetColor("_EmissionColor", _bulbColor * k);
                _mpb.SetColor("_BaseColor", Color.Lerp(new Color(0.2f, 0.2f, 0.18f), new Color(1f, 0.9f, 0.7f), k));
                Bulb.SetPropertyBlock(_mpb);
            }
        }
    }
}
