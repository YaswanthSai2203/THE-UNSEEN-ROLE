using System;
using UnityEngine;

namespace Unseen
{
    /// <summary>
    /// One authored horror event. Story events bypass pacing gaps and probability; ambient events are
    /// rationed by the scheduler so they never stack.
    /// </summary>
    public class HorrorEvent
    {
        public string Id;
        public bool Story;                 // scripted beat: runs as soon as conditions hold
        public bool OneShot = true;
        public int MinChapter = 1, MaxChapter = 5;
        public string RequiredFlag, BlockedByFlag;
        public Func<bool> Condition;       // extra trigger condition
        public float Cooldown = 60f;
        public float Probability = 1f;     // per scheduler tick, ambient only
        public Vector3? Anchor;            // where it happens (for distance / visibility rules)
        public float MinPlayerDistance, MaxPlayerDistance = float.MaxValue;
        public Visibility AnchorVisibility = Visibility.Any;
        public Snd AudioCue = Snd.None;    // played at the anchor (or 2D) on start
        public Action Start;               // the visual / gameplay effect
        public Func<bool> Completion;      // null = completes immediately
        public float Timeout = 40f;

        // runtime
        public float LastRun = float.NegativeInfinity;
        public int Runs;
        public bool Done;

        public enum Visibility { Any, MustBeUnobserved, MustBeObserved }
    }

    public interface IHorrorContext
    {
        float Time { get; }
        int Chapter { get; }
        bool HasFlag(string flag);
        Vector3 PlayerPosition { get; }
        bool IsObserved(Vector3 point);
        float Random01();
    }
}
