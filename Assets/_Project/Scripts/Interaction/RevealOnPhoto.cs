using System;
using System.Collections.Generic;
using UnityEngine;

namespace Unseen
{
    /// <summary>
    /// Marks something on the Unseen layer that a photograph can capture. When it is clearly in frame and
    /// unoccluded, the photo caption mentions it and OnRevealed runs (e.g. the object becomes real).
    /// </summary>
    public class RevealOnPhoto : MonoBehaviour
    {
        public static readonly List<RevealOnPhoto> All = new List<RevealOnPhoto>();

        public float MaxDistance = 5f;
        public string Caption;
        public Func<bool> Active;
        public Action OnRevealed;

        void OnEnable() => All.Add(this);
        void OnDisable() => All.Remove(this);

        public bool Check(Camera cam)
        {
            if (Active != null && !Active()) return false;
            var t = cam.transform;
            Vector3 p = transform.position;
            if (Vector3.Distance(t.position, p) > MaxDistance) return false;
            // Negative margin: it must be well inside the frame, not on the edge.
            if (!ObservationMath.InViewCone(t.position, t.forward, t.up, cam.fieldOfView, cam.aspect, p, -0.1f)) return false;
            if (!ObservationManager.HasLineOfSight(t.position, p, transform)) return false;
            OnRevealed?.Invoke();
            return true;
        }
    }
}
