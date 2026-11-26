using System;

namespace Unseen
{
    /// <summary>Owns story flags, derives chapter/objective via StoryRules and announces changes.</summary>
    public class StoryManager
    {
        readonly GameManager _gm;
        public StoryManager(GameManager gm) { _gm = gm; }

        StoryState S => _gm.Data.story;
        public int Chapter => _gm.Data != null ? S.chapter : 0;
        public string ObjectiveId => _gm.Data != null ? S.objective : "";
        public bool Has(string flag) => _gm.Data != null && S.Has(flag);

        public void Set(string flag)
        {
            if (_gm.Data == null || !S.Add(flag)) return;
            _gm.Puzzles?.OnProgress();
            GameEvents.RaiseFlagSet(flag);
            bool chapterChanged = Evaluate(true);
            if (!chapterChanged && StoryContent.IsCheckpointFlag(flag)) _gm.Checkpoints.Save(flag);
        }

        /// <summary>Recomputes chapter and objective. Returns true when a new chapter started.</summary>
        public bool Evaluate(bool announce)
        {
            if (_gm.Data == null) return false;
            Func<string, bool> has = Has;
            int ch = StoryRules.Chapter(has);
            bool newChapter = false;
            if (ch > S.chapter)
            {
                S.chapter = ch;
                newChapter = true;
                _gm.UI.ShowChapterCard(ch);
                GameEvents.RaiseChapterStarted(ch);
                _gm.Checkpoints.Save("chapter" + ch);
            }
            string obj = StoryRules.Objective(has);
            if (obj != S.objective)
            {
                S.objective = obj;
                _gm.Puzzles?.OnProgress();
                if (announce) _gm.UI.ShowObjective();
            }
            return newChapter;
        }

        public string ObjectiveText => StoryContent.ObjectiveText(ObjectiveId, Has);

        public void AddJournal(string line)
        {
            if (_gm.Data == null) return;
            S.journal.Add(line);
            if (S.journal.Count > 200) S.journal.RemoveAt(0);
        }
    }
}
