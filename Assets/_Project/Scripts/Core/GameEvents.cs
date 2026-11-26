using System;

namespace Unseen
{
    /// <summary>Static event hub so systems can react to each other without direct references.</summary>
    public static class GameEvents
    {
        public static event Action<string> FlagSet;
        public static event Action<string> Notification;
        public static event Action<int> ChapterStarted;

        public static void RaiseFlagSet(string flag) => FlagSet?.Invoke(flag);
        public static void Notify(string message) => Notification?.Invoke(message);
        public static void RaiseChapterStarted(int chapter) => ChapterStarted?.Invoke(chapter);

        /// <summary>Used by tests and when returning to the main menu.</summary>
        public static void ClearAll() { FlagSet = null; Notification = null; ChapterStarted = null; }
    }
}
