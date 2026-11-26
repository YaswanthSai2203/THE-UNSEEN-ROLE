using System;

namespace Unseen
{
    public enum PerceptionLevel { Stable, Uneasy, Unstable, Breaking }

    /// <summary>Pure perception meter logic: 100 = lucid, 0 = the player can no longer tell what is real.</summary>
    [Serializable]
    public class PerceptionModel
    {
        public const float Max = 100f;
        /// <summary>Passive recovery only reaches this far; above it requires safe areas, grounding or discoveries.</summary>
        public const float PassiveCap = 55f;
        public const float PassiveRate = 0.6f;

        public float Value = Max;

        public PerceptionLevel Level =>
            Value >= 60f ? PerceptionLevel.Stable :
            Value >= 35f ? PerceptionLevel.Uneasy :
            Value >= 15f ? PerceptionLevel.Unstable : PerceptionLevel.Breaking;

        /// <summary>0 when lucid, 1 when fully broken. Drives effect strength.</summary>
        public float Distortion => 1f - Clamp01(Value / Max);

        public bool Depleted => Value <= 0f;

        /// <summary>Advance by dt. Any drain suppresses recovery for that frame.</summary>
        public float Tick(float dt, float drainPerSecond, float recoverPerSecond)
        {
            if (dt <= 0f) return Value;
            if (drainPerSecond > 0f) Value -= drainPerSecond * dt;
            else
            {
                float rate = recoverPerSecond;
                if (Value < PassiveCap) rate += PassiveRate;
                float limit = recoverPerSecond > 0f ? Max : PassiveCap;
                if (Value < limit) Value = Math.Min(limit, Value + rate * dt);
            }
            Value = Clamp(Value);
            return Value;
        }

        public void Hit(float amount) { if (amount > 0f) Value = Clamp(Value - amount); }
        public void Restore(float amount) { if (amount > 0f) Value = Clamp(Value + amount); }
        public void Set(float value) => Value = Clamp(value);

        static float Clamp(float v) => v < 0f ? 0f : v > Max ? Max : v;
        static float Clamp01(float v) => v < 0f ? 0f : v > 1f ? 1f : v;
    }
}
