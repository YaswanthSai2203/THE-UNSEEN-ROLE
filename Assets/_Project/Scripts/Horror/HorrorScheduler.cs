using System.Collections.Generic;
using UnityEngine;

namespace Unseen
{
    /// <summary>Pure scheduling logic for HorrorDirector: eligibility, pacing, no overlap, no immediate repeats.</summary>
    public class HorrorScheduler
    {
        public float AmbientGap = 18f;
        readonly List<HorrorEvent> _events = new List<HorrorEvent>();
        readonly List<HorrorEvent> _candidates = new List<HorrorEvent>();
        HorrorEvent _active;
        float _activeStart;
        float _lastAmbientEnd = float.NegativeInfinity;
        string _lastAmbientId;

        public HorrorEvent Active => _active;
        public IReadOnlyList<HorrorEvent> Events => _events;

        public void Register(HorrorEvent e) { if (e != null && !_events.Contains(e)) _events.Add(e); }
        public void Clear() { _events.Clear(); _active = null; }

        public bool IsEligible(HorrorEvent e, IHorrorContext ctx)
        {
            if (e.Done) return false;
            if (ctx.Chapter < e.MinChapter || ctx.Chapter > e.MaxChapter) return false;
            if (!string.IsNullOrEmpty(e.RequiredFlag) && !ctx.HasFlag(e.RequiredFlag)) return false;
            if (!string.IsNullOrEmpty(e.BlockedByFlag) && ctx.HasFlag(e.BlockedByFlag)) return false;
            if (ctx.Time - e.LastRun < e.Cooldown) return false;
            if (e.Anchor.HasValue)
            {
                float d = Vector3.Distance(ctx.PlayerPosition, e.Anchor.Value);
                if (d < e.MinPlayerDistance || d > e.MaxPlayerDistance) return false;
                if (e.AnchorVisibility == HorrorEvent.Visibility.MustBeUnobserved && ctx.IsObserved(e.Anchor.Value)) return false;
                if (e.AnchorVisibility == HorrorEvent.Visibility.MustBeObserved && !ctx.IsObserved(e.Anchor.Value)) return false;
            }
            return e.Condition == null || e.Condition();
        }

        /// <summary>Advances the scheduler. Returns the event started this tick, if any.</summary>
        public HorrorEvent Tick(IHorrorContext ctx)
        {
            if (_active != null)
            {
                bool finished = _active.Completion == null || _active.Completion() || ctx.Time - _activeStart > _active.Timeout;
                if (!finished) return null;
                if (!_active.Story) _lastAmbientEnd = ctx.Time;
                _active = null;
            }

            // Story beats first, in registration order.
            foreach (var e in _events)
                if (e.Story && IsEligible(e, ctx)) return Begin(e, ctx);

            if (ctx.Time - _lastAmbientEnd < AmbientGap) return null;

            _candidates.Clear();
            foreach (var e in _events)
                if (!e.Story && IsEligible(e, ctx)) _candidates.Add(e);
            if (_candidates.Count > 1) _candidates.RemoveAll(e => e.Id == _lastAmbientId);
            if (_candidates.Count == 0) return null;

            int start = (int)(ctx.Random01() * _candidates.Count) % _candidates.Count;
            for (int i = 0; i < _candidates.Count; i++)
            {
                var e = _candidates[(start + i) % _candidates.Count];
                if (ctx.Random01() < e.Probability) return Begin(e, ctx);
            }
            return null;
        }

        HorrorEvent Begin(HorrorEvent e, IHorrorContext ctx)
        {
            e.LastRun = ctx.Time;
            e.Runs++;
            if (e.OneShot) e.Done = true;
            if (!e.Story) _lastAmbientId = e.Id;
            e.Start?.Invoke();
            if (e.Completion != null) { _active = e; _activeStart = ctx.Time; }
            else if (!e.Story) _lastAmbientEnd = ctx.Time;
            return e;
        }
    }
}
