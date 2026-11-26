using UnityEngine;

namespace Unseen
{
    /// <summary>
    /// Post-processing is render-pipeline specific, so the runtime only talks to this interface.
    /// The URP implementation (Scripts/URP/UrpPostFX.cs) registers itself at startup.
    /// </summary>
    public interface IPostFX
    {
        void SetupCamera(Camera cam);
        void Apply(float distortion, float brightness, bool motionBlur, bool reducedMotion, float flash);
    }

    public static class PostFX
    {
        public static IPostFX Impl;
    }
}
