using UnityEngine;

namespace Unseen
{
    /// <summary>
    /// Runs authored horror events through the HorrorScheduler: story beats when their conditions hold,
    /// ambient anomalies rationed so they feel unpredictable but never pile up.
    /// </summary>
    public class HorrorDirector : MonoBehaviour, IHorrorContext
    {
        public const float TickInterval = 0.5f;
        readonly HorrorScheduler _scheduler = new HorrorScheduler();
        float _accum;

        public HorrorScheduler Scheduler => _scheduler;

        public void Register(HorrorEvent e) => _scheduler.Register(e);
        public void ClearEvents() => _scheduler.Clear();

        // IHorrorContext
        public float Time => UnityEngine.Time.time;
        public int Chapter => GameManager.I.Story.Chapter;
        public bool HasFlag(string flag) => GameManager.I.Story.Has(flag);
        public Vector3 PlayerPosition => GameManager.I.Player != null ? GameManager.I.Player.transform.position : Vector3.zero;
        public bool IsObserved(Vector3 point) => GameManager.I.Observation.IsPointObserved(point);
        public float Random01() => Random.value;

        void Update()
        {
            var gm = GameManager.I;
            if (gm.State != GameState.Playing || gm.Player == null) return;
            _accum += UnityEngine.Time.deltaTime;
            if (_accum < TickInterval) return;
            _accum = 0f;
            var started = _scheduler.Tick(this);
            if (started != null && started.AudioCue != Snd.None)
            {
                if (started.Anchor.HasValue) gm.Audio.PlayAt(started.AudioCue, started.Anchor.Value, 0.8f);
                else gm.Audio.Play2D(started.AudioCue, 0.6f);
            }
        }
    }
}
