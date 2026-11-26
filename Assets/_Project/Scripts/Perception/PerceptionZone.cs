using System;
using UnityEngine;

namespace Unseen
{
    /// <summary>A spherical area that steadies (safe area) or erodes (distorted area) perception.</summary>
    public class PerceptionZone : MonoBehaviour
    {
        public float Radius = 1.5f;
        public float RatePerSecond = 3f;  // positive = recover, negative = drain
        public Func<bool> Active;

        void Update()
        {
            var gm = GameManager.I;
            if (gm == null || gm.Player == null || gm.State != GameState.Playing) return;
            if (Active != null && !Active()) return;
            if ((gm.Player.transform.position - transform.position).sqrMagnitude > Radius * Radius) return;
            if (RatePerSecond > 0) gm.Perception.Recover(RatePerSecond);
            else gm.Perception.Drain(-RatePerSecond);
        }
    }
}
