using System;
using System.Collections.Generic;
using UnityEngine;

namespace Unseen
{
    /// <summary>One authored state change: an optional new pose plus an optional effect.</summary>
    public class ObservableStep
    {
        public bool UsePose;
        public Vector3 Position;
        public Quaternion Rotation = Quaternion.identity;
        public Action Apply;

        public static ObservableStep Pose(Vector3 p, float yaw) => new ObservableStep { UsePose = true, Position = p, Rotation = Quaternion.Euler(0, yaw, 0) };
        public static ObservableStep Do(Action a) => new ObservableStep { Apply = a };
    }

    /// <summary>
    /// An object whose behaviour depends on being watched. It only changes while both its current and
    /// target placement are unobserved, after a delay, with a cooldown, never into occupied space and
    /// never farther than MaximumMovementDistance. Changes follow authored steps — never random teleports.
    /// </summary>
    public class ObservableObject : MonoBehaviour
    {
        [Header("Observation")]
        public bool IsObservable = true;
        public bool CanMoveWhenUnobserved = true;
        public float MovementDelay = 3f;
        public float MaximumMovementDistance = 3f;
        public bool CanAppearWhenUnobserved;
        public bool CanDisappearWhenObserved;
        public float DisappearAfterObserved = 0.6f;
        [Header("Gating")]
        public int RequiredStoryProgress = 1;
        public string RequiredFlag;
        public float EventCooldown = 10f;
        public float MinPlayerDistance = 2.5f;
        public bool CheckOccupancy = true;
        public Snd MovementAudio = Snd.None;
        public float MovementAudioVolume = 0.6f;

        public Func<bool> Condition;
        public readonly List<ObservableStep> Steps = new List<ObservableStep>();
        public bool LoopSteps;

        /// <summary>Called when the player first sees the object after it changed.</summary>
        public Action<ObservableObject> OnNoticed;
        public Action<ObservableObject> OnChanged;
        public Action<ObservableObject> OnDisappeared;
        /// <summary>Called every observation tick while visible and observed (dt).</summary>
        public Action<float> WhileObserved;

        public bool IsObserved { get; private set; }
        public float ObservedTime { get; private set; }
        public float UnobservedTime { get; private set; }
        public int StepIndex { get; private set; } = -1;
        public bool Visible { get; private set; } = true;
        bool _changedSinceSeen;
        float _lastEvent = float.NegativeInfinity;
        Renderer[] _renderers;
        Collider[] _colliders;

        Vector3 _boundsOffset;
        Vector3 _boundsSize = Vector3.one * 0.2f;

        /// <summary>
        /// World bounds of the object. Measured from renderers while visible; while hidden (renderers
        /// disabled report unreliable bounds) the last measurement is reused relative to the transform.
        /// </summary>
        public Bounds WorldBounds
        {
            get
            {
                if (_renderers == null) Cache();
                if (Visible) Measure();
                return new Bounds(transform.position + _boundsOffset, _boundsSize);
            }
        }

        void Measure()
        {
            bool any = false;
            var b = new Bounds(transform.position, Vector3.one * 0.2f);
            foreach (var r in _renderers)
            {
                if (r == null || !r.enabled) continue;
                if (!any) { b = r.bounds; any = true; } else b.Encapsulate(r.bounds);
            }
            if (!any) return;
            _boundsOffset = b.center - transform.position;
            _boundsSize = b.size;
        }

        void Cache()
        {
            _renderers = GetComponentsInChildren<Renderer>(true);
            _colliders = GetComponentsInChildren<Collider>(true);
            Measure();
        }

        void OnEnable() { Cache(); ObservationManager.Register(this); }
        void OnDisable() => ObservationManager.Unregister(this);

        public void SetVisible(bool v)
        {
            if (_renderers == null) Cache();
            if (!v && Visible) Measure();
            Visible = v;
            foreach (var r in _renderers) if (r != null) r.enabled = v;
            foreach (var c in _colliders) if (c != null) c.enabled = v;
        }

        /// <summary>Restore a step instantly (used when rebuilding the world from saved flags).</summary>
        public void JumpToStep(int index)
        {
            for (int i = 0; i <= index && i < Steps.Count; i++) ApplyStep(Steps[i]);
            StepIndex = Mathf.Min(index, Steps.Count - 1);
        }

        bool Ready()
        {
            var gm = GameManager.I;
            if (gm.Story.Chapter < RequiredStoryProgress) return false;
            if (!string.IsNullOrEmpty(RequiredFlag) && !gm.Story.Has(RequiredFlag)) return false;
            if (Time.time - _lastEvent < EventCooldown) return false;
            return Condition == null || Condition();
        }

        public void Tick(float dt, bool observed)
        {
            IsObserved = observed;
            if (observed)
            {
                ObservedTime += dt;
                UnobservedTime = 0f;
                if (!Visible) return;
                if (_changedSinceSeen) { _changedSinceSeen = false; OnNoticed?.Invoke(this); }
                WhileObserved?.Invoke(dt);
                if (CanDisappearWhenObserved && ObservedTime >= DisappearAfterObserved && Ready())
                {
                    SetVisible(false);
                    _lastEvent = Time.time;
                    OnDisappeared?.Invoke(this);
                }
                return;
            }

            ObservedTime = 0f;
            UnobservedTime += dt;
            if (UnobservedTime < MovementDelay || !Ready()) return;
            var player = GameManager.I.Player;
            if (player != null && Vector3.Distance(player.transform.position, WorldBounds.center) < MinPlayerDistance) return;

            if (CanAppearWhenUnobserved && !Visible)
            {
                if (CheckOccupancy && Occupied(WorldBounds)) return;
                SetVisible(true);
                Changed();
                return;
            }

            if (!CanMoveWhenUnobserved || Steps.Count == 0) return;
            int next = StepIndex + 1;
            if (next >= Steps.Count)
            {
                if (!LoopSteps) return;
                next = 0;
            }
            if (TryStep(Steps[next])) { StepIndex = next; Changed(); }
        }

        void Changed()
        {
            _lastEvent = Time.time;
            UnobservedTime = 0f;
            _changedSinceSeen = true;
            if (MovementAudio != Snd.None)
                GameManager.I.Audio.PlayAt(MovementAudio, transform.position, MovementAudioVolume, UnityEngine.Random.Range(0.9f, 1.1f));
            OnChanged?.Invoke(this);
        }

        bool TryStep(ObservableStep s)
        {
            if (s.UsePose)
            {
                if (Vector3.Distance(transform.position, s.Position) > MaximumMovementDistance) return false;
                var b = WorldBounds;
                b.center += s.Position - transform.position;
                var obs = GameManager.I.Observation;
                if (obs.IsBoundsObserved(b, transform)) return false;
                if (CheckOccupancy && Occupied(b)) return false;
            }
            ApplyStep(s);
            return true;
        }

        void ApplyStep(ObservableStep s)
        {
            if (s.UsePose)
            {
                transform.SetPositionAndRotation(s.Position, s.Rotation);
                Physics.SyncTransforms();
            }
            s.Apply?.Invoke();
        }

        /// <summary>Would these bounds overlap the player or other solid things (ignoring itself; the box is shrunk and lifted so resting on the floor is fine)?</summary>
        bool Occupied(Bounds b)
        {
            Vector3 half = Vector3.Max(b.extents * 0.8f, Vector3.one * 0.02f);
            var hits = Physics.OverlapBox(b.center + Vector3.up * 0.06f, half, transform.rotation, Layers.OccupancyMask, QueryTriggerInteraction.Ignore);
            foreach (var h in hits)
            {
                if (h.transform.IsChildOf(transform)) continue;
                return true;
            }
            return false;
        }
    }
}
