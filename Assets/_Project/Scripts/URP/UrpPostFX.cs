using UnityEngine;
using UnityEngine.Rendering;
using UnityEngine.Rendering.Universal;

namespace Unseen
{
    /// <summary>
    /// URP implementation of the post-processing hook: restrained film grain, vignette, desaturation and
    /// tonemapping always; chromatic aberration and lens distortion only at low perception (and never with
    /// reduced motion); optional motion blur; brightness via post exposure.
    /// </summary>
    public class UrpPostFX : IPostFX
    {
        Volume _volume;
        Vignette _vignette;
        FilmGrain _grain;
        ColorAdjustments _color;
        ChromaticAberration _aberration;
        MotionBlur _blur;
        LensDistortion _lens;

        [RuntimeInitializeOnLoadMethod(RuntimeInitializeLoadType.BeforeSceneLoad)]
        static void Register() => PostFX.Impl = new UrpPostFX();

        void Ensure()
        {
            if (_volume != null) return;
            var go = new GameObject("[PostFX]");
            Object.DontDestroyOnLoad(go);
            _volume = go.AddComponent<Volume>();
            _volume.isGlobal = true;
            _volume.priority = 10f;
            var profile = ScriptableObject.CreateInstance<VolumeProfile>();
            _volume.profile = profile;
            _vignette = profile.Add<Vignette>(true);
            _grain = profile.Add<FilmGrain>(true);
            _color = profile.Add<ColorAdjustments>(true);
            _aberration = profile.Add<ChromaticAberration>(true);
            _blur = profile.Add<MotionBlur>(true);
            _lens = profile.Add<LensDistortion>(true);
            var tone = profile.Add<Tonemapping>(true);
            tone.mode.Override(TonemappingMode.ACES);
            var bloom = profile.Add<Bloom>(true);
            bloom.intensity.Override(0.35f);
            bloom.threshold.Override(1.0f);
            _grain.type.Override(FilmGrainLookup.Medium1);
            _vignette.smoothness.Override(0.45f);
            _color.contrast.Override(8f);
            _color.colorFilter.Override(new Color(1f, 0.97f, 0.92f));
        }

        public void SetupCamera(Camera cam)
        {
            Ensure();
            if (cam == null) return;
            var data = cam.GetUniversalAdditionalCameraData();
            data.renderPostProcessing = true;
            data.antialiasing = AntialiasingMode.FastApproximateAntialiasing;
        }

        public void Apply(float distortion, float brightness, bool motionBlur, bool reducedMotion, float flash)
        {
            Ensure();
            _vignette.intensity.Override(0.3f + distortion * 0.22f);
            _grain.intensity.Override(0.15f + distortion * 0.35f);
            _color.saturation.Override(-22f - distortion * 35f);
            _color.postExposure.Override(Mathf.Lerp(-0.45f, 0.45f, brightness) + flash * 0.5f);
            float strong = Mathf.Clamp01((distortion - 0.5f) * 2f);
            _aberration.intensity.Override(reducedMotion ? 0f : strong * 0.55f);
            _lens.intensity.Override(reducedMotion ? 0f : -Mathf.Clamp01((distortion - 0.7f) * 3f) * 0.22f);
            _blur.active = motionBlur && !reducedMotion;
            _blur.intensity.Override(0.25f);
        }
    }
}
