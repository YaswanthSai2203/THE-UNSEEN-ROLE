using UnityEngine;

namespace Unseen
{
    /// <summary>Puzzle progress and the inactivity hint system.</summary>
    public class PuzzleManager : MonoBehaviour
    {
        public const float FirstHintAfter = 150f;
        public const float SecondHintAfter = 330f;

        float _lastProgress;
        int _hintsShown;

        public void OnProgress()
        {
            _lastProgress = Time.time;
            _hintsShown = 0;
        }

        public int SolvedCount
        {
            get
            {
                int n = 0;
                foreach (var p in PuzzleRegistry.All) if (GameManager.I.Story.Has(p.SolvedFlag)) n++;
                return n;
            }
        }

        void Update()
        {
            var gm = GameManager.I;
            // Time spent reading, in menus or in cutscenes does not count as being stuck.
            if (gm.State != GameState.Playing || gm.UI.ModalOpen) { _lastProgress += Time.deltaTime; return; }
            float idle = Time.time - _lastProgress;
            if (_hintsShown == 0 && idle > FirstHintAfter) ShowHint(0);
            else if (_hintsShown == 1 && idle > SecondHintAfter) ShowHint(1);
        }

        void ShowHint(int level)
        {
            _hintsShown = level + 1;
            string hint = StoryContent.Hint(GameManager.I.Story.ObjectiveId, level);
            if (!string.IsNullOrEmpty(hint)) GameManager.I.UI.ShowHint(hint);
        }
    }
}
