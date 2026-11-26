using System;

namespace Unseen
{
    /// <summary>
    /// Pure, deterministic progression: chapter and current objective are a function of the flag set.
    /// Keeping this a pure function makes save/load trivial and progression unit-testable.
    /// </summary>
    public static class StoryRules
    {
        public static int Chapter(Func<string, bool> has)
        {
            if (has(F.EnteredMirasRoom)) return 5;
            if (has(F.EnteredBasement)) return 4;
            if (has(F.KitchenMsg)) return 3;
            if (has(F.ChairNoticed)) return 2;
            return 1;
        }

        public static int FragmentCount(Func<string, bool> has)
        {
            int n = 0;
            foreach (var f in F.Fragments) if (has(f)) n++;
            return n;
        }

        public static int MemoryCount(Func<string, bool> has)
        {
            int n = 0;
            foreach (var f in F.Memories) if (has(f)) n++;
            return n;
        }

        public static string Objective(Func<string, bool> has)
        {
            switch (Chapter(has))
            {
                case 5:
                    if (!has(F.MemoriesDone)) return "memories";
                    if (!has(F.FinalCall)) return "toy_phone";
                    return "choice";
                case 4:
                    if (has(F.PhotoRestored)) return "open_room";
                    if (!has(F.PowerOn)) return "power";
                    if (FragmentCount(has) < 4) return "fragments";
                    return "restore_photo";
                case 3:
                    if (has(F.BasementUnlocked)) return "enter_basement";
                    if (!has(F.MirrorMsg)) return "mirror";
                    if (!has(F.TvSolved)) return "tv_channels";
                    if (!has(F.ClosetFound)) return "footsteps";
                    if (!has(F.MusicBoxFound)) return "listen";
                    return "padlock";
                case 2:
                    if (!has(F.GotCamera)) return "search";
                    if (!has(F.TvLiveSeen)) return "television";
                    if (!has(F.GotBrassKey)) return has(F.KeyRevealed) ? "take_key" : "photo_bathroom";
                    if (!has(F.DiaryRead)) return "wardrobe";
                    if (!has(F.RadioOff)) return "radio";
                    return "cabinet";
                default:
                    if (!has(F.GotFlashlight)) return "light";
                    if (!has(F.FrontDoorTried)) return "exit";
                    if (!has(F.Phone1)) return "phone";
                    if (!has(F.FuseInstalled)) return "fuse";
                    return "look_around";
            }
        }
    }
}
