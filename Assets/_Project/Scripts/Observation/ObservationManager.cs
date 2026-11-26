using System.Collections.Generic;
using UnityEngine;

namespace Unseen
{
    /// <summary>
    /// Decides what the player is currently observing: frustum test (with a safety margin) plus
    /// line-of-sight raycasts against occluding geometry. Closed eyes observe nothing.
    /// Registered ObservableObjects are evaluated at 10 Hz rather than every frame.
    /// </summary>
    public class ObservationManager : MonoBehaviour
    {
        public const float Interval = 0.1f;
        public const float Margin = 0.15f;

        readonly List<ObservableObject> _objects = new List<ObservableObject>();
        readonly Vector3[] _samples = new Vector3[9];
        float _accum;

        public static void Register(ObservableObject o)
        {
            var m = GameManager.I != null ? GameManager.I.Observation : null;
            if (m != null && !m._objects.Contains(o)) m._objects.Add(o);
        }

        public static void Unregister(ObservableObject o)
        {
            var m = GameManager.I != null ? GameManager.I.Observation : null;
            if (m != null) m._objects.Remove(o);
        }

        Camera Cam
        {
            get
            {
                var p = GameManager.I.Player;
                return p != null ? p.Cam : null;
            }
        }

        bool EyesClosed => GameManager.I.Player != null && GameManager.I.Player.Eyes.IsClosed;

        /// <summary>Is this point visible to the player right now?</summary>
        public bool IsPointObserved(Vector3 p, Transform self = null)
        {
            var cam = Cam;
            if (cam == null || EyesClosed) return false;
            return SeesPoint(cam, p, self);
        }

        /// <summary>Is any meaningful part of these bounds visible to the player right now?</summary>
        public bool IsBoundsObserved(Bounds b, Transform self = null)
        {
            var cam = Cam;
            if (cam == null || EyesClosed) return false;
            Vector3 c = b.center, e = b.extents * 0.9f;
            _samples[0] = c;
            _samples[1] = c + new Vector3(e.x, e.y, e.z);
            _samples[2] = c + new Vector3(-e.x, e.y, e.z);
            _samples[3] = c + new Vector3(e.x, e.y, -e.z);
            _samples[4] = c + new Vector3(-e.x, e.y, -e.z);
            _samples[5] = c + new Vector3(e.x, -e.y, e.z);
            _samples[6] = c + new Vector3(-e.x, -e.y, e.z);
            _samples[7] = c + new Vector3(e.x, -e.y, -e.z);
            _samples[8] = c + new Vector3(-e.x, -e.y, -e.z);
            for (int i = 0; i < _samples.Length; i++)
                if (SeesPoint(cam, _samples[i], self)) return true;
            return false;
        }

        static bool SeesPoint(Camera cam, Vector3 p, Transform self)
        {
            var t = cam.transform;
            if (!ObservationMath.InViewCone(t.position, t.forward, t.up, cam.fieldOfView, cam.aspect, p, Margin)) return false;
            return HasLineOfSight(t.position, p, self);
        }

        public static bool HasLineOfSight(Vector3 from, Vector3 to, Transform self)
        {
            Vector3 dir = to - from;
            float dist = dir.magnitude;
            if (dist < 0.01f) return true;
            // Stop a little short so the target's own surface does not count as an occluder.
            if (!Physics.Raycast(from, dir / dist, out var hit, dist - 0.05f, Layers.OccluderMask, QueryTriggerInteraction.Ignore))
                return true;
            return self != null && hit.transform.IsChildOf(self);
        }

        void Update()
        {
            var gm = GameManager.I;
            if (gm.State != GameState.Playing || gm.Player == null) return;
            _accum += Time.deltaTime;
            if (_accum < Interval) return;
            float dt = _accum;
            _accum = 0f;
            for (int i = _objects.Count - 1; i >= 0; i--)
            {
                var o = _objects[i];
                if (o == null) { _objects.RemoveAt(i); continue; }
                bool seen = o.IsObservable && IsBoundsObserved(o.WorldBounds, o.transform);
                o.Tick(dt, seen);
            }
        }
    }
}
