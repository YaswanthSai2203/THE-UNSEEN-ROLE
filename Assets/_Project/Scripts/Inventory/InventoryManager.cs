namespace Unseen
{
    /// <summary>Thin game-facing wrapper over InventoryState that adds notifications.</summary>
    public class InventoryManager
    {
        readonly GameManager _gm;
        public InventoryManager(GameManager gm) { _gm = gm; }

        public InventoryState State => _gm.Data?.inventory;

        public bool Has(string id) => State != null && State.Has(id);
        public int Count(string id) => State?.Count(id) ?? 0;

        public void Add(string id, int amount = 1, bool notify = true)
        {
            if (State == null) return;
            State.Add(id, amount);
            _gm.Audio.Play2D(Snd.Pickup, 0.6f);
            if (notify) GameEvents.Notify(amount > 1 ? $"{StoryContent.ItemName(id)} ×{amount}" : StoryContent.ItemName(id));
        }

        public bool Remove(string id, int amount = 1) => State != null && State.Remove(id, amount);

        /// <summary>Adds a document to the inventory and opens it for reading.</summary>
        public void Read(string docId)
        {
            if (State == null) return;
            _gm.Audio.Play2D(Snd.Paper, 0.7f);
            if (State.AddDocument(docId)) GameEvents.Notify("Document: " + StoryContent.DocTitle(docId));
            _gm.UI.ShowDocument(docId);
        }

        public void AddPhoto(PhotoRecord p) => State?.photos.Add(p);
    }
}
