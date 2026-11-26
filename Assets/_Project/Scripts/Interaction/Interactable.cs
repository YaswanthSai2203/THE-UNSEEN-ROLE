using System;
using UnityEngine;

namespace Unseen
{
    /// <summary>
    /// Anything the player can use with the interact key. Behaviour is supplied as delegates by the world
    /// builders, so a single component covers doors, notes, switches, puzzles, telephones, etc.
    /// </summary>
    public class Interactable : MonoBehaviour
    {
        public string Prompt = "Examine";
        public Func<string> PromptFunc;
        public Func<bool> Enabled;
        public Action OnInteract;
        public float MaxDistance = 2.3f;

        public string PromptText => PromptFunc != null ? PromptFunc() : Prompt;
        public bool CanInteract => isActiveAndEnabled && (Enabled == null || Enabled());

        public void Interact() => OnInteract?.Invoke();

        public static Interactable Add(GameObject go, string prompt, Action onInteract, Func<bool> enabled = null)
        {
            if (!go.TryGetComponent(out Interactable i)) i = go.AddComponent<Interactable>();
            i.Prompt = prompt;
            i.OnInteract = onInteract;
            i.Enabled = enabled;
            return i;
        }
    }
}
