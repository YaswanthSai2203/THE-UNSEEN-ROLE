using System;
using System.Collections.Generic;

namespace Unseen
{
    [Serializable]
    public class ItemStack
    {
        public string id;
        public int count;
    }

    [Serializable]
    public class PhotoRecord
    {
        public string file;
        public string caption;
        public string takenAt;
    }

    /// <summary>Serializable inventory. Pure data + logic so it can be unit tested outside Unity.</summary>
    [Serializable]
    public class InventoryState
    {
        public List<ItemStack> items = new List<ItemStack>();
        public List<string> documents = new List<string>();
        public List<PhotoRecord> photos = new List<PhotoRecord>();

        public int Count(string id)
        {
            foreach (var s in items) if (s.id == id) return s.count;
            return 0;
        }

        public bool Has(string id) => Count(id) > 0;

        public void Add(string id, int amount = 1)
        {
            if (string.IsNullOrEmpty(id) || amount <= 0) return;
            foreach (var s in items)
                if (s.id == id) { s.count += amount; return; }
            items.Add(new ItemStack { id = id, count = amount });
        }

        /// <summary>Removes up to amount; returns false if there were not enough.</summary>
        public bool Remove(string id, int amount = 1)
        {
            for (int i = 0; i < items.Count; i++)
            {
                if (items[i].id != id) continue;
                if (items[i].count < amount) return false;
                items[i].count -= amount;
                if (items[i].count == 0) items.RemoveAt(i);
                return true;
            }
            return false;
        }

        public bool AddDocument(string id)
        {
            if (string.IsNullOrEmpty(id) || documents.Contains(id)) return false;
            documents.Add(id);
            return true;
        }

        public void Sanitize()
        {
            if (items == null) items = new List<ItemStack>();
            if (documents == null) documents = new List<string>();
            if (photos == null) photos = new List<PhotoRecord>();
            items.RemoveAll(s => s == null || string.IsNullOrEmpty(s.id) || s.count <= 0);
            photos.RemoveAll(p => p == null || string.IsNullOrEmpty(p.file));
        }
    }
}
