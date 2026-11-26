using UnityEngine;

namespace Unseen
{
    /// <summary>
    /// Hold the Close Eyes key. The screen fades to black, hearing sharpens (UnseenOnly sounds become audible),
    /// nothing is observed — so the apartment is free to change — and after a few seconds perception erodes.
    /// </summary>
    public class EyeClosureController : MonoBehaviour
    {
        public bool IsClosed { get; private set; }
        public float ClosedTime { get; private set; }
        /// <summary>0 = open, 1 = fully closed (drives the fade).</summary>
        public float Amount { get; private set; }

        void Update()
        {
            var gm = GameManager.I;
            bool want = !gm.InputLocked && gm.Settings.Held(InputAction.CloseEyes);
            if (want && !IsClosed) gm.Audio.Play2D(Snd.Breath, 0.15f, AudioCat.Sfx, 1.15f);
            IsClosed = want;
            ClosedTime = IsClosed ? ClosedTime + Time.deltaTime : 0f;
            Amount = Mathf.MoveTowards(Amount, IsClosed ? 1f : 0f, Time.deltaTime * (IsClosed ? 3.5f : 2.5f));
        }
    }
}
