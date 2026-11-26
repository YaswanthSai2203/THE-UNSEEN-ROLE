using System.Collections.Generic;

namespace Unseen
{
    /// <summary>Basement padlock: four symbol dials (circle, triangle, square, cross).</summary>
    public class CombinationLock
    {
        public readonly int[] Digits;
        readonly string _code;

        public CombinationLock(string code)
        {
            _code = code;
            Digits = new int[code.Length];
        }

        public void Step(int dial, int delta) => Digits[dial] = ((Digits[dial] + delta) % 10 + 10) % 10;

        public string Current
        {
            get
            {
                var c = new char[Digits.Length];
                for (int i = 0; i < c.Length; i++) c[i] = (char)('0' + Digits[i]);
                return new string(c);
            }
        }

        public bool IsOpen => Current == _code;
    }

    /// <summary>Television: tuning the right channels in order plays the hidden broadcast.</summary>
    public class ChannelSequence
    {
        readonly int[] _expected;
        readonly List<int> _history = new List<int>();

        public ChannelSequence(params int[] expected) { _expected = expected; }

        /// <summary>Tune a channel; returns true when the last tuned channels match the sequence.</summary>
        public bool Push(int channel)
        {
            _history.Add(channel);
            if (_history.Count > _expected.Length) _history.RemoveAt(0);
            if (_history.Count != _expected.Length) return false;
            for (int i = 0; i < _expected.Length; i++) if (_history[i] != _expected[i]) return false;
            return true;
        }
    }

    /// <summary>Family photograph: four torn quarters must be put back in their corners.</summary>
    public class FragmentPuzzle
    {
        public const int Empty = -1;
        public readonly int[] Slots = { Empty, Empty, Empty, Empty }; // slot index -> fragment index

        public void Place(int fragment, int slot)
        {
            for (int i = 0; i < Slots.Length; i++) if (Slots[i] == fragment) Slots[i] = Empty;
            Slots[slot] = fragment;
        }

        public void Clear(int slot) => Slots[slot] = Empty;

        public bool IsPlaced(int fragment)
        {
            foreach (var s in Slots) if (s == fragment) return true;
            return false;
        }

        /// <summary>Fragment i belongs in slot i.</summary>
        public bool IsSolved
        {
            get
            {
                for (int i = 0; i < Slots.Length; i++) if (Slots[i] != i) return false;
                return true;
            }
        }
    }

    public struct PuzzleInfo
    {
        public string Id, Name, SolvedFlag;
        public PuzzleInfo(string id, string name, string flag) { Id = id; Name = name; SolvedFlag = flag; }
    }

    /// <summary>The game's puzzles and the flag that marks each solved (kept out of the MonoBehaviour so it is testable).</summary>
    public static class PuzzleRegistry
    {
        public static readonly PuzzleInfo[] All =
        {
            new PuzzleInfo("fuse", "Restore the hallway fuse", F.FuseInstalled),
            new PuzzleInfo("camera_key", "Photograph what cannot be seen", F.GotBrassKey),
            new PuzzleInfo("mirror", "Writing in the dark mirror", F.MirrorMsg),
            new PuzzleInfo("tv", "Television channel sequence", F.TvSolved),
            new PuzzleInfo("footsteps", "Follow the footsteps without looking", F.ClosetFound),
            new PuzzleInfo("music_box", "Find the music box by sound alone", F.MusicBoxFound),
            new PuzzleInfo("padlock", "Symbol padlock (clues from four rooms)", F.BasementUnlocked),
            new PuzzleInfo("breakers", "Restore basement power while watched", F.PowerOn),
            new PuzzleInfo("photo", "Reconstruct the family photograph", F.PhotoRestored),
            new PuzzleInfo("memories", "Final memory and observation puzzle", F.MemoriesDone),
        };
    }
}
