using System.Collections.Generic;
using UnityEngine;

namespace Unseen
{
    public enum AudioCat { Sfx, Ambience, Music, Voice, UnseenOnly }

    /// <summary>
    /// Pooled 3D one-shots and managed loops. Category volumes react to settings, eye closure
    /// (UnseenOnly sounds are audible only with eyes closed) and perception (listener distortion).
    /// </summary>
    public class AudioManager : MonoBehaviour
    {
        const int PoolSize = 24;
        readonly List<AudioSource> _pool = new List<AudioSource>();
        readonly Dictionary<AudioSource, Loop> _loops = new Dictionary<AudioSource, Loop>();
        readonly List<AudioSource> _dead = new List<AudioSource>();
        int _next;
        AudioListener _listener;
        AudioLowPassFilter _lowPass;
        AudioDistortionFilter _distortion;
        float _eyesBlend;

        class Loop { public float baseVolume; public AudioCat cat; }

        void Awake()
        {
            for (int i = 0; i < PoolSize; i++)
            {
                var go = new GameObject("OneShot" + i);
                go.transform.SetParent(transform);
                var src = go.AddComponent<AudioSource>();
                src.playOnAwake = false;
                _pool.Add(src);
            }
        }

        public float CategoryVolume(AudioCat cat)
        {
            var s = GameManager.I != null ? GameManager.I.Settings : null;
            float sfx = s != null ? s.sfxVolume : 1f, music = s != null ? s.musicVolume : 1f;
            // During an ending only its music and voices remain; the apartment goes silent.
            if (GameManager.I != null && GameManager.I.State == GameState.Ending && cat != AudioCat.Music && cat != AudioCat.Voice) return 0f;
            switch (cat)
            {
                case AudioCat.Music: return music;
                case AudioCat.Ambience: return sfx * Mathf.Lerp(1f, 0.55f, _eyesBlend);
                case AudioCat.UnseenOnly: return sfx * _eyesBlend;
                case AudioCat.Voice: return Mathf.Max(sfx, 0.6f);
                default: return sfx * Mathf.Lerp(1f, 1.2f, _eyesBlend);
            }
        }

        static void Configure(AudioSource src, float spatial, float maxDistance)
        {
            src.spatialBlend = spatial;
            src.rolloffMode = AudioRolloffMode.Logarithmic;
            src.minDistance = 0.8f;
            src.maxDistance = maxDistance;
            src.dopplerLevel = 0f;
            src.spread = 30f;
        }

        public AudioSource PlayAt(Snd snd, Vector3 position, float volume = 1f, float pitch = 1f, AudioCat cat = AudioCat.Sfx, float maxDistance = 14f)
            => PlayClipAt(ProceduralAudio.Get(snd), position, volume, pitch, cat, maxDistance, 1f);

        public AudioSource Play2D(Snd snd, float volume = 1f, AudioCat cat = AudioCat.Sfx, float pitch = 1f)
            => PlayClipAt(ProceduralAudio.Get(snd), Vector3.zero, volume, pitch, cat, 10f, 0f);

        public AudioSource PlayClipAt(AudioClip clip, Vector3 position, float volume, float pitch, AudioCat cat, float maxDistance, float spatial)
        {
            if (clip == null) return null;
            // Prefer an idle source; otherwise steal the oldest so sounds never stack without bound.
            AudioSource src = null;
            for (int i = 0; i < PoolSize; i++)
            {
                var c = _pool[(_next + i) % PoolSize];
                if (!c.isPlaying) { src = c; _next = (_next + i + 1) % PoolSize; break; }
            }
            if (src == null) { src = _pool[_next]; _next = (_next + 1) % PoolSize; }
            src.transform.position = position;
            Configure(src, spatial, maxDistance);
            src.clip = clip;
            src.loop = false;
            src.pitch = pitch;
            src.volume = volume * CategoryVolume(cat);
            src.Play();
            return src;
        }

        /// <summary>Creates a looping source attached to a parent (owned by the world, destroyed with it).</summary>
        public AudioSource CreateLoop(Snd snd, Transform parent, Vector3 localPos, float volume, AudioCat cat, float maxDistance = 10f, bool play = true)
        {
            var go = new GameObject("Loop_" + snd);
            go.transform.SetParent(parent, false);
            go.transform.localPosition = localPos;
            var src = go.AddComponent<AudioSource>();
            src.clip = ProceduralAudio.Get(snd);
            src.loop = true;
            Configure(src, 1f, maxDistance);
            src.playOnAwake = false;
            _loops[src] = new Loop { baseVolume = volume, cat = cat };
            src.volume = volume * CategoryVolume(cat);
            if (play) { src.time = Random.Range(0f, src.clip.length * 0.9f); src.Play(); }
            return src;
        }

        public void SetLoopVolume(AudioSource src, float volume)
        {
            if (src != null && _loops.TryGetValue(src, out var l)) l.baseVolume = volume;
        }

        public void StopAll()
        {
            foreach (var s in _pool) s.Stop();
        }

        void Update()
        {
            var gm = GameManager.I;
            bool eyesClosed = gm != null && gm.Player != null && gm.Player.Eyes.IsClosed;
            _eyesBlend = Mathf.MoveTowards(_eyesBlend, eyesClosed ? 1f : 0f, Time.unscaledDeltaTime * 2.5f);
            if (gm != null) AudioListener.volume = gm.Settings.masterVolume;

            _dead.Clear();
            foreach (var kv in _loops)
            {
                if (kv.Key == null) { _dead.Add(kv.Key); continue; }
                kv.Key.volume = kv.Value.baseVolume * CategoryVolume(kv.Value.cat);
            }
            foreach (var d in _dead) _loops.Remove(d);

            UpdateListenerFilters(gm);
        }

        void UpdateListenerFilters(GameManager gm)
        {
            if (_listener == null || !_listener.isActiveAndEnabled)
            {
                _listener = FindFirstObjectByType<AudioListener>();
                if (_listener == null) return;
                // Explicit TryGetComponent: '??' does not respect Unity's overloaded null.
                if (!_listener.TryGetComponent(out _lowPass)) _lowPass = _listener.gameObject.AddComponent<AudioLowPassFilter>();
                if (!_listener.TryGetComponent(out _distortion)) _distortion = _listener.gameObject.AddComponent<AudioDistortionFilter>();
            }
            float distortion = gm != null && gm.State == GameState.Playing ? gm.Perception.Model.Distortion : 0f;
            // Restrained: only below ~35% perception does audio start to break.
            float k = Mathf.Clamp01((distortion - 0.65f) / 0.35f);
            _distortion.distortionLevel = k * 0.35f;
            float paused = gm != null && gm.State == GameState.Paused ? 1f : 0f;
            _lowPass.cutoffFrequency = Mathf.Lerp(22000f, 2200f, Mathf.Max(k * 0.6f, paused * 0.9f));
        }
    }
}
