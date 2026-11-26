using UnityEngine;

namespace Unseen
{
    /// <summary>
    /// Runs the perception meter. Any system can call Drain/Recover each frame; one-off changes use Hit/Restore.
    /// Effects of low perception are applied by RoomLight (flicker), AudioManager (distortion),
    /// PostFX (grain, vignette, chromatic aberration) and ObservableObjects gated on perception.
    /// </summary>
    public class PerceptionManager : MonoBehaviour
    {
        public readonly PerceptionModel Model = new PerceptionModel();
        float _drain, _recover;
        float _lastNotice;

        public float Value => Model.Value;
        public float Distortion => Model.Distortion;
        public bool MeterVisible => GameManager.I.Story.Chapter >= 2;

        public void Drain(float perSecond) { if (perSecond > 0f) _drain += perSecond; }
        public void Recover(float perSecond) { if (perSecond > 0f) _recover += perSecond; }

        public void Hit(float amount)
        {
            Model.Hit(amount);
        }

        public void Restore(float amount, string reason = null)
        {
            Model.Restore(amount);
            if (!string.IsNullOrEmpty(reason) && Time.time - _lastNotice > 3f)
            {
                _lastNotice = Time.time;
                GameEvents.Notify(reason);
            }
        }

        void Update()
        {
            var gm = GameManager.I;
            if (gm.State != GameState.Playing || gm.Player == null) { _drain = _recover = 0f; return; }

            // Closing your eyes is not a free escape: after a few seconds the dark starts to press in.
            var eyes = gm.Player.Eyes;
            if (eyes.IsClosed && eyes.ClosedTime > 6f) _drain += 1.2f;

            Model.Tick(Time.deltaTime, _drain, _recover);
            _drain = _recover = 0f;

            if (Model.Depleted)
                gm.Blackout(StoryContent.BlackoutThought());
        }
    }
}
