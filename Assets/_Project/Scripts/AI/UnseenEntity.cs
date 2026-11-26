using System.Collections.Generic;
using UnityEngine;

namespace Unseen
{
    /// <summary>
    /// The presence. It can only move while the player is not observing it (or has their eyes closed),
    /// navigates a small line-of-sight waypoint graph so it never passes through walls, drains perception
    /// while watched, and causes a blackout (lost time, never lost progress) if it reaches the player.
    /// </summary>
    public class UnseenEntity : MonoBehaviour
    {
        public float Speed = 1.5f;
        public float ClosedEyesSpeed = 2.6f;
        public float WatchDrain = 4f;
        public float StartDelay = 5f;
        public System.Func<bool> Active;

        readonly List<Vector3> _nodes = new List<Vector3>();
        List<int>[] _links;
        Vector3 _home;
        Vector3 _target;
        float _repath, _stepDist, _activeSince;
        AudioSource _heartbeat;
        ObservableObject _obs;

        public void Init(IList<Vector3> nodes, Vector3 home)
        {
            _nodes.AddRange(nodes);
            _home = home;
            _links = new List<int>[_nodes.Count];
            for (int i = 0; i < _nodes.Count; i++)
            {
                _links[i] = new List<int>();
                for (int j = 0; j < _nodes.Count; j++)
                    if (i != j && Clear(_nodes[i], _nodes[j])) _links[i].Add(j);
            }
            _obs = gameObject.AddComponent<ObservableObject>();
            _obs.CanMoveWhenUnobserved = false; // movement is continuous and handled here
            _obs.WhileObserved = dt => GameManager.I.Perception.Drain(WatchDrain * (1f + Mathf.Clamp01(1f - DistanceToPlayer / 8f)));
            _heartbeat = GameManager.I.Audio.CreateLoop(Snd.Heartbeat, transform, Vector3.up, 0f, AudioCat.Sfx, 6f);
            _activeSince = Time.time;
        }

        float DistanceToPlayer
        {
            get
            {
                var p = GameManager.I.Player;
                return p == null ? 99f : Vector3.Distance(Flat(p.transform.position), Flat(transform.position));
            }
        }

        static Vector3 Flat(Vector3 v) => new Vector3(v.x, 0, v.z);

        static bool Clear(Vector3 a, Vector3 b)
        {
            Vector3 up = Vector3.up * 1.0f;
            return !Physics.Linecast(a + up, b + up, Layers.OccluderMask, QueryTriggerInteraction.Ignore);
        }

        public void ResetHome()
        {
            transform.position = _home;
            _activeSince = Time.time;
        }

        void Update()
        {
            var gm = GameManager.I;
            var player = gm.Player;
            bool active = Active == null || Active();
            if (_heartbeat != null) gm.Audio.SetLoopVolume(_heartbeat, active ? Mathf.Clamp01(1f - DistanceToPlayer / 6f) * 0.7f : 0f);
            if (!active || player == null || gm.State != GameState.Playing) return;
            if (Time.time - _activeSince < StartDelay) return;

            // Face the player always; this never reads as movement.
            Vector3 toPlayer = Flat(player.transform.position) - Flat(transform.position);
            if (toPlayer.sqrMagnitude > 0.01f) transform.rotation = Quaternion.LookRotation(toPlayer);

            if (DistanceToPlayer < 0.85f)
            {
                gm.Audio.Play2D(Snd.Stinger, 0.7f);
                player.Shake(0.05f, 0.6f);
                gm.Perception.Hit(30f);
                gm.Blackout("It touched me. It was so cold.");
                return;
            }

            // Frozen while watched (checked live as well as at the observation tick rate).
            if (_obs.IsObserved || gm.Observation.IsBoundsObserved(_obs.WorldBounds, transform)) return;

            _repath -= Time.deltaTime;
            if (_repath <= 0f) { _repath = 0.4f; _target = NextPoint(player.transform.position); }
            float speed = player.Eyes.IsClosed ? ClosedEyesSpeed : Speed;
            Vector3 before = transform.position;
            Vector3 next = Vector3.MoveTowards(transform.position, new Vector3(_target.x, transform.position.y, _target.z), speed * Time.deltaTime);
            // Never step into view: check the destination before committing.
            var b = _obs.WorldBounds;
            b.center += next - before;
            if (gm.Observation.IsBoundsObserved(b, transform)) return;
            transform.position = next;
            _stepDist += Vector3.Distance(before, next);
            if (_stepDist > 0.7f)
            {
                _stepDist = 0f;
                gm.Audio.PlayAt(Snd.StepHeavy, transform.position, 0.45f, Random.Range(0.7f, 0.85f), AudioCat.Sfx, 12f);
            }
        }

        Vector3 NextPoint(Vector3 playerPos)
        {
            if (Clear(transform.position, playerPos)) return playerPos;
            // BFS from nodes that see the player back to a node this entity can see.
            int n = _nodes.Count;
            var dist = new int[n];
            for (int i = 0; i < n; i++) dist[i] = -1;
            var q = new Queue<int>();
            for (int i = 0; i < n; i++)
                if (Clear(_nodes[i], playerPos)) { dist[i] = 0; q.Enqueue(i); }
            while (q.Count > 0)
            {
                int c = q.Dequeue();
                foreach (int k in _links[c]) if (dist[k] < 0) { dist[k] = dist[c] + 1; q.Enqueue(k); }
            }
            int best = -1;
            float bestScore = float.MaxValue;
            for (int i = 0; i < n; i++)
            {
                if (dist[i] < 0 || !Clear(transform.position, _nodes[i])) continue;
                float score = dist[i] * 10f + Vector3.Distance(transform.position, _nodes[i]);
                if (score < bestScore) { bestScore = score; best = i; }
            }
            return best >= 0 ? _nodes[best] : transform.position;
        }
    }
}
