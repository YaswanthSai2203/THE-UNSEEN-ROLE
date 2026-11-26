using System;
using UnityEngine;

namespace Unseen
{
    /// <summary>Hinged door that swings open/closed; can be locked behind any condition.</summary>
    public class Door : MonoBehaviour
    {
        public float OpenAngle = 95f;
        public Func<bool> IsLocked;
        public Action OnLockedAttempt;
        public Action OnOpened;
        public float Angle { get; private set; }
        public bool IsOpen => _target != 0f;
        float _target;

        /// <summary>The leaf must be a child of this (hinge) transform.</summary>
        public void Init(GameObject leaf, string name)
        {
            var i = Interactable.Add(leaf, "Open", Toggle);
            i.PromptFunc = () => IsOpen ? "Close " + name : "Open " + name;
        }

        public void Toggle()
        {
            var gm = GameManager.I;
            if (!IsOpen && IsLocked != null && IsLocked())
            {
                gm.Audio.PlayAt(Snd.Locked, transform.position, 0.8f);
                OnLockedAttempt?.Invoke();
                return;
            }
            SetOpen(!IsOpen);
        }

        public void SetOpen(bool open, bool sound = true)
        {
            _target = open ? OpenAngle : 0f;
            if (sound) GameManager.I.Audio.PlayAt(open ? Snd.DoorOpen : Snd.DoorClose, transform.position, 0.7f, UnityEngine.Random.Range(0.9f, 1.1f));
            if (open) OnOpened?.Invoke();
            enabled = true;
        }

        /// <summary>Instantly set the hinge angle (used by unobserved anomalies and world restore).</summary>
        public void SetAngleInstant(float angle)
        {
            Angle = _target = angle;
            transform.localRotation = Quaternion.Euler(0, Angle, 0);
        }

        void Update()
        {
            Angle = Mathf.MoveTowards(Angle, _target, 150f * Time.deltaTime);
            transform.localRotation = Quaternion.Euler(0, Angle, 0);
            if (Mathf.Approximately(Angle, _target)) enabled = false;
        }
    }
}
