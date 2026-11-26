using System;
using System.Collections.Generic;

namespace Unseen
{
    /// <summary>Serializable story progress. Everything in the world is derived from these flags.</summary>
    [Serializable]
    public class StoryState
    {
        public int chapter = 1;
        public string objective = "";
        public List<string> flags = new List<string>();
        public List<string> journal = new List<string>();

        [NonSerialized] HashSet<string> _set;

        HashSet<string> Set
        {
            get
            {
                if (_set == null) _set = new HashSet<string>(flags ?? new List<string>());
                return _set;
            }
        }

        public bool Has(string flag) => !string.IsNullOrEmpty(flag) && Set.Contains(flag);

        /// <summary>Returns true if the flag was newly added.</summary>
        public bool Add(string flag)
        {
            if (string.IsNullOrEmpty(flag) || !Set.Add(flag)) return false;
            flags.Add(flag);
            return true;
        }

        public void Remove(string flag)
        {
            if (Set.Remove(flag)) flags.Remove(flag);
        }

        public void Sanitize()
        {
            if (flags == null) flags = new List<string>();
            if (journal == null) journal = new List<string>();
            if (objective == null) objective = "";
            if (chapter < 1 || chapter > 5) chapter = 1;
            _set = null;
        }
    }
}
