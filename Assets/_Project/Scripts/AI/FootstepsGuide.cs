using System;
using UnityEngine;

namespace Unseen
{
    /// <summary>
    /// Invisible small footsteps that lead the player along a path. They only advance while the spot
    /// they occupy is not being looked at and the player is close enough to follow; looking at them
    /// makes them stop (and unsettles the player).
    /// </summary>
    public class FootstepsGuide : MonoBehaviour
    {
        public Vector3[] Path;
        public float Speed = 0.8f;
        public float LeadDistance = 4.5f;
        public Action OnArrived;
        int _index;
        float _stepDist, _idle;
        bool _arrived;

        void Update()
        {
            var gm = GameManager.I;
            var player = gm.Player;
            if (_arrived || player == null || gm.State != GameState.Playing || Path == null || _index >= Path.Length) return;
            Vector3 head = transform.position + Vector3.up * 0.3f;
            if (gm.Observation.IsPointObserved(head))
            {
                gm.Perception.Drain(1.5f);
                _idle += Time.deltaTime;
                if (_idle > 3f) { _idle = 0f; gm.Audio.PlayAt(Snd.Step, transform.position, 0.12f, 1.5f); }
                return;
            }
            _idle = 0f;
            if (Vector3.Distance(player.transform.position, transform.position) > LeadDistance) return;

            Vector3 before = transform.position;
            transform.position = Vector3.MoveTowards(transform.position, Path[_index], Speed * Time.deltaTime);
            _stepDist += Vector3.Distance(before, transform.position);
            if (_stepDist > 0.45f)
            {
                _stepDist = 0f;
                gm.Audio.PlayAt(Snd.Step, transform.position, 0.3f, UnityEngine.Random.Range(1.35f, 1.55f), AudioCat.Sfx, 10f);
            }
            if ((transform.position - Path[_index]).sqrMagnitude < 0.0004f)
            {
                _index++;
                if (_index >= Path.Length) { _arrived = true; OnArrived?.Invoke(); }
            }
        }
    }
}
