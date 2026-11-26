namespace Unseen
{
    /// <summary>All story flags. The world, objectives and chapters are derived from these.</summary>
    public static class F
    {
        // Chapter 1 — Awakening
        public const string Woke = "woke";
        public const string GotFlashlight = "got_flashlight";
        public const string FrontDoorTried = "front_door_tried";
        public const string Phone1 = "phone1_answered";
        public const string GotFuse = "got_fuse";
        public const string FuseInstalled = "fuse_installed";
        public const string ChairMoved = "chair_moved";
        public const string ChairNoticed = "chair_noticed";
        // Chapter 2 — Something is wrong
        public const string GotCamera = "got_camera";
        public const string TvLiveSeen = "tv_live_seen";
        public const string KeyRevealed = "photo_key_revealed";
        public const string CircleSeen = "symbol_circle_seen";
        public const string GotBrassKey = "got_brass_key";
        public const string WardrobeOpen = "wardrobe_open";
        public const string DiaryRead = "diary_read";
        public const string RadioOn = "radio_on";
        public const string RadioOff = "radio_off";
        public const string KitchenMsg = "kitchen_msg";
        // Chapter 3 — Don't look away
        public const string Call2 = "call2_done";
        public const string MirrorAnomaly = "mirror_anomaly_seen";
        public const string MirrorMsg = "mirror_msg";
        public const string TvSolved = "tv_solved";
        public const string Call3 = "call3_done";
        public const string ClosetFound = "closet_found";
        public const string FragA = "frag_a";
        public const string MusicBoxFound = "musicbox_found";
        public const string FragB = "frag_b";
        public const string PadlockSeen = "padlock_seen";
        public const string BasementUnlocked = "basement_unlocked";
        // Chapter 4 — The empty space
        public const string EnteredBasement = "entered_basement";
        public const string Breaker1 = "breaker_1";
        public const string Breaker2 = "breaker_2";
        public const string Breaker3 = "breaker_3";
        public const string PowerOn = "power_on";
        public const string TapeSeen = "tape_seen";
        public const string FragC = "frag_c";
        public const string FragD = "frag_d";
        public const string Call4 = "call4_done";
        public const string PhotoRestored = "photo_restored";
        public const string GotRoomKey = "got_room_key";
        // Chapter 5 — Remember
        public const string EnteredMirasRoom = "entered_miras_room";
        public const string Mem1 = "mem_1";
        public const string Mem2 = "mem_2";
        public const string Mem3 = "mem_3";
        public const string Mem4 = "mem_4";
        public const string MemoriesDone = "memories_done";
        public const string FinalCall = "final_call_done";
        public const string GotFrontKey = "got_front_key";

        public static readonly string[] Fragments = { FragA, FragB, FragC, FragD };
        public static readonly string[] Memories = { Mem1, Mem2, Mem3, Mem4 };
    }

    public enum Ending { None = 0, Forget = 1, Remember = 2, Stay = 3 }
}
