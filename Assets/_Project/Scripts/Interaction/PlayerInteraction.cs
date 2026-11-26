using UnityEngine;

namespace Unseen
{
    /// <summary>Raycasts from the view to find the interactable under the crosshair.</summary>
    public class PlayerInteraction : MonoBehaviour
    {
        const int Mask = ~((1 << Layers.Player) | (1 << Layers.Unseen) | (1 << Layers.ReflectionOnly) | (1 << Layers.IgnoreRaycast));
        public Interactable Current { get; private set; }
        PlayerController _player;

        void Start() => _player = GetComponent<PlayerController>();

        void Update()
        {
            var gm = GameManager.I;
            Current = null;
            if (gm.InputLocked || _player.Eyes.IsClosed) return;
            var t = _player.Cam.transform;
            if (Physics.Raycast(t.position, t.forward, out var hit, 2.6f, Mask, QueryTriggerInteraction.Collide))
            {
                var it = hit.collider.GetComponentInParent<Interactable>();
                if (it != null && it.CanInteract && hit.distance <= it.MaxDistance) Current = it;
            }
            if (Current != null && gm.Settings.Down(InputAction.Interact) && Time.unscaledTime - gm.UI.LastModalClosed > 0.25f) Current.Interact();
        }
    }
}
