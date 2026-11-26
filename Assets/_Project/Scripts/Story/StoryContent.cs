using System;
using System.Collections.Generic;

namespace Unseen
{
    public static class Items
    {
        public const string Flashlight = "flashlight";
        public const string Camera = "instant_camera";
        public const string Film = "film";
        public const string Fuse = "fuse";
        public const string BrassKey = "brass_key";
        public const string MusicBox = "music_box";
        public const string RoomKey = "room_key";
        public const string FrontKey = "front_key";
    }

    /// <summary>All written content: objectives, hints, items, documents, dialogue and endings.</summary>
    public static class StoryContent
    {
        // ------------------------------------------------------------------ names
        public const string Caller = "Voice on the phone";
        public const string Radio = "Radio";
        public const string Tv = "Television";
        public const string Child = "Child";
        public const string Woman = "Woman";
        public const string Man = "Man";

        // ------------------------------------------------------------------ objectives
        static readonly Dictionary<string, string[]> Objectives = new Dictionary<string, string[]>
        {
            // id: { text, hint 1, hint 2 }
            { "light", new[] { "Find a light.", "Something is on the bedside table.", "The flashlight is on the bedside table. Take it with E and switch it on with F." } },
            { "exit", new[] { "Find a way out.", "The front door is at the south end of the hallway.", "Walk down the hallway to the front door and try to open it." } },
            { "phone", new[] { "Answer the telephone.", "The ringing comes from the living room.", "The telephone is on the side table next to the sofa in the living room." } },
            { "fuse", new[] { "Restore the power in the hallway.", "The fuse box is on the hallway wall. One fuse is missing.", "A note on the refrigerator mentions the fuses. Check the kitchen drawer to the left of the sink." } },
            { "look_around", new[] { "Look around the apartment.", "Leave the living room for a while, then come back.", "Look at the chair by the small dining table in the living room." } },
            { "search", new[] { "Something moved. Search the apartment.", "The bedroom desk has a drawer.", "The instant camera is in the bedroom desk drawer." } },
            { "television", new[] { "Something is wrong with the television.", "Go back to the living room.", "Stand in the living room near the television and wait." } },
            { "photo_bathroom", new[] { "Photograph the bathroom.", "The television showed something under the bathroom sink that your eyes can't see.", "Stand in the bathroom, face the sink and press G to take a photograph." } },
            { "take_key", new[] { "Take what the photograph revealed.", "Look under the bathroom sink.", "The brass key is on the floor under the bathroom sink." } },
            { "wardrobe", new[] { "Open the locked wardrobe.", "The small brass key fits something in the bedroom.", "Use the brass key on the bedroom wardrobe and read what is inside." } },
            { "radio", new[] { "Find the voice in the kitchen.", "The radio is on the kitchen counter.", "Walk to the kitchen counter and switch the radio off." } },
            { "cabinet", new[] { "The radio told you not to look. Look.", "One of the kitchen cabinets is open.", "Open the wall cabinet above the kitchen counter." } },
            { "mirror", new[] { "Find out what she drew on the mirror.", "She drew on the bathroom mirror in the dark, and you had to close your eyes to see it.", "Switch off the bathroom light, stand at the mirror and hold Q to close your eyes for a few seconds." } },
            { "tv_channels", new[] { "Tune the television.", "The mirror showed three numbers.", "Use the television and tune channels 11, 4 and 7, in that order." } },
            { "footsteps", new[] { "Follow the footsteps. Don't look at them.", "They only move when you aren't looking at where they are. Listen, look away, follow.", "Turn your back to the sound and walk after it slowly. Closing your eyes helps." } },
            { "listen", new[] { "Something is playing. Find it.", "You can only hear it with your eyes closed (hold Q).", "The music comes from the bedroom. Close your eyes right next to the bed." } },
            { "padlock", new[] { "Open the basement padlock.", "Each symbol was given a number: the bathroom photograph, the kitchen cabinet, the television and the closet.", "Circle 0, triangle 2, square 1, cross 9: February 19th, her birthday. The journal (Tab) keeps everything you've read." } },
            { "enter_basement", new[] { "Go down to the basement.", "The basement door is at the north end of the hallway.", "Walk through the basement door at the end of the hallway." } },
            { "power", new[] { "Restore the power.", "Three breakers are spread around the basement. Don't keep your back to it for long.", "Breakers: north-west corner, middle of the west wall, north end of the east wall." } },
            { "fragments", new[] { "Find the missing pieces of the photograph ({n}/4).", "She hid things: in the hallway closet, in her music box, in the old television, in the storage boxes.", "Missing pieces: hallway closet shelf, music box under the bed (listen with eyes closed), basement TV cabinet, basement storage boxes." } },
            { "restore_photo", new[] { "Restore the family photograph in the living room.", "There is an empty frame in the living room.", "The torn frame hangs on the wall next to the bookshelf in the living room. Use it." } },
            { "open_room", new[] { "Open the locked room in the basement.", "The ribbon key opens a door downstairs.", "The locked door is at the far end of the basement." } },
            { "memories", new[] { "Remember her ({n}/4).", "Things appear in this room when you are not looking at them.", "Stand in the middle of the room facing one wall for a few seconds, then turn around and look." } },
            { "toy_phone", new[] { "Answer the toy telephone.", "It is on the floor by the small bed.", "Use the toy telephone by the bed." } },
            { "choice", new[] { "Leave. Look at her. Or keep your eyes closed.", "There are three ways this ends.", "Leave through the front door upstairs with the key; or look at the empty chair and don't look away; or close your eyes in this room and keep them closed." } },
        };

        public static string ObjectiveText(string id, Func<string, bool> has)
        {
            if (string.IsNullOrEmpty(id) || !Objectives.TryGetValue(id, out var o)) return "";
            int n = id == "fragments" ? StoryRules.FragmentCount(has) : id == "memories" ? StoryRules.MemoryCount(has) : 0;
            return o[0].Replace("{n}", n.ToString());
        }

        public static string Hint(string id, int level)
        {
            if (string.IsNullOrEmpty(id) || !Objectives.TryGetValue(id, out var o)) return null;
            return o[Math.Min(1 + level, o.Length - 1)];
        }

        public static IEnumerable<string> ObjectiveIds => Objectives.Keys;

        static readonly HashSet<string> CheckpointFlags = new HashSet<string>
        {
            F.Phone1, F.FuseInstalled, F.GotCamera, F.GotBrassKey, F.DiaryRead, F.MirrorMsg, F.TvSolved,
            F.ClosetFound, F.MusicBoxFound, F.BasementUnlocked, F.PowerOn, F.FragC, F.FragD, F.PhotoRestored,
            F.MemoriesDone, F.FinalCall, F.GotFrontKey
        };

        public static bool IsCheckpointFlag(string flag) => CheckpointFlags.Contains(flag);

        // ------------------------------------------------------------------ chapters
        public static readonly string[] ChapterTitles = { "", "AWAKENING", "SOMETHING IS WRONG", "DON'T LOOK AWAY", "THE EMPTY SPACE", "REMEMBER" };
        static readonly string[] Roman = { "", "I", "II", "III", "IV", "V" };
        public static string ChapterLabel(int ch) => ch >= 1 && ch <= 5 ? "CHAPTER " + Roman[ch] : "";

        // ------------------------------------------------------------------ items
        static readonly Dictionary<string, string[]> ItemInfo = new Dictionary<string, string[]>
        {
            { Items.Flashlight, new[] { "Flashlight", "A heavy metal flashlight. The batteries rattle when you shake it. (F)" } },
            { Items.Camera, new[] { "Instant camera", "An old instant camera with a cracked strap. It sees more than you do. (G)" } },
            { Items.Film, new[] { "Instant film", "One exposure each. The living room drawer always seems to have more." } },
            { Items.Fuse, new[] { "Fuse", "A ceramic fuse. Someone wrote HALL on it in pencil." } },
            { Items.BrassKey, new[] { "Small brass key", "It was not there until you photographed it." } },
            { F.FragA, new[] { "Photo fragment (top-left)", "A torn corner of a photograph. The white border runs along its top and left edges. A man's shoulder." } },
            { F.FragB, new[] { "Photo fragment (top-right)", "A torn corner. Border along the top and right. A woman's face, half turned away." } },
            { F.FragC, new[] { "Photo fragment (bottom-left)", "A torn corner. Border along the bottom and left. A man's hand, reaching down." } },
            { F.FragD, new[] { "Photo fragment (bottom-right)", "A torn corner. Border along the bottom and right. A small yellow sleeve." } },
            { Items.MusicBox, new[] { "Music box", "A child's music box. The dancer inside has been snapped off." } },
            { Items.RoomKey, new[] { "Key with a ribbon", "A small key tied with a faded pink ribbon." } },
            { Items.FrontKey, new[] { "Front door key", "A paper tag in a child's handwriting: FOR WHEN YOU ARE READY TO GO." } },
        };

        public static string ItemName(string id) => ItemInfo.TryGetValue(id, out var i) ? i[0] : id;
        public static string ItemDescription(string id) => ItemInfo.TryGetValue(id, out var i) ? i[1] : "";

        // ------------------------------------------------------------------ documents
        static readonly Dictionary<string, string[]> Docs = new Dictionary<string, string[]>
        {
            { "fridge_note", new[] { "Note on the refrigerator",
                "Fuses - kitchen drawer, left of the sink.\nThe hallway one keeps going. Don't let her touch the box.\n\n- H." } },
            { "photo_back", new[] { "Back of the family photograph",
                "The photograph is gone from the frame. Only its torn edges remain.\n\nWritten on the backing board in pencil:\n\"Lindell St. - summer. A., H. & M.\"" } },
            { "diary", new[] { "Diary",
                "I keep writing her name and crossing it out. The doctor says writing helps. It doesn't.\n\n" +
                "Hanna has taken the photographs down. She says she can't look at them. I can't look at the spaces where they used to hang.\n\n" +
                "February 19th. She would have been seven. I bought a cake and didn't light it.\n\n" +
                "When the lights went out she used to draw on the bathroom mirror with her finger. She said the mirror kept her secrets, and you could only see them if you closed your eyes and counted.\n\n" +
                "I don't remember the phone call. Everyone keeps telling me about the phone call." } },
            { "drawing", new[] { "Child's drawing",
                "Crayon on paper. Four rooms. A tall grey figure with no face standing in every one of them.\nA small figure drawn in blue, lying down, in the room with the bath.\n\nUnderneath, in uneven letters:\n\nDADDY DONT LOOK AWAY" } },
            { "cabinet", new[] { "Writing inside the cabinet",
                "Scratched into the wood, over and over:\n\nSHE WAS RIGHT THERE\n\nAnd below, smaller:\n\nCROSS = 9\nSHE DREW ON THE MIRROR IN THE DARK. CLOSE YOUR EYES." } },
            { "closet_note", new[] { "Note on the closet shelf",
                "SQUARE = 1\n\nYou heard them, didn't you? Small feet. They always went to the closet when she was hiding.\nYou never looked there first. You never looked anywhere first." } },
            { "clipping", new[] { "Newspaper clipping",
                "CHILD, 6, DIES IN APARTMENT ACCIDENT\n\nLINDELL STREET - A six-year-old girl died late on Tuesday evening after being found unresponsive in the bathtub of her family's fourth-floor apartment.\n\n" +
                "Paramedics were called by the girl's father, 34, at 9:41 p.m. Police said there were no suspicious circumstances.\n\n" +
                "Neighbours described the family as \"quiet, kind, always together.\" The girl's name has not been released at the family's request." } },
            { "coroner", new[] { "Medical examiner's summary",
                "Name: Mira Vale.  Age: 6.\nCause of death: drowning.  Manner: accident.\n\n" +
                "Notes: Father states he left the bathroom to answer a telephone call (work) at approximately 9:20 p.m. and became \"distracted\". " +
                "Television was on in the living room. Child found at approximately 9:40 p.m. Father attempted resuscitation." } },
            { "psych", new[] { "Psychiatric intake form",
                "St. Agnes Hospital - Psychiatric Intake\nPatient: Adrian Vale, 35.\n\n" +
                "Admitted after an overdose eleven months following the death of his daughter. Presents with dissociative amnesia; unable to state his own name on admission.\n\n" +
                "Repeatedly describes \"empty spaces\" in his home that he \"must not look at\". Reports a recurring dream of an apartment that rearranges itself whenever he looks away.\n\n" +
                "Patient asked staff to disconnect the telephone in his room. Prognosis: guarded." } },
            { "letter", new[] { "Letter",
                "Adrian,\n\nI'm leaving the key with your mother. I can't be in that apartment anymore. Every room has a space in it where she should be, and you walk around them like they're holes in the floor.\n\n" +
                "I don't blame you for the phone call. I blame you for never looking at her again. Not even in the photographs.\n\n" +
                "One day you'll have to look. I hope I'm there when you do.\n\n- H." } },
            { "basement_note", new[] { "Label on the storage boxes",
                "MIRA - CLOTHES\nMIRA - DRAWINGS\nMIRA - DO NOT OPEN\n\nThe last one has been opened." } },
        };

        public static string DocTitle(string id) => Docs.TryGetValue(id, out var d) ? d[0] : id;
        public static string DocBody(string id) => Docs.TryGetValue(id, out var d) ? d[1] : "";

        // ------------------------------------------------------------------ dialogue
        public static readonly Line[] Opening =
        {
            new Line("", "I don't know this room."),
            new Line("", "I don't know my name."),
        };

        public static readonly Line[] Call1 =
        {
            new Line(Caller, "...hello? Don't hang up. Listen to me."),
            new Line(Caller, "Whatever happens, don't look at the empty spaces."),
        };
        public static readonly Line[] AfterCall1 =
        {
            new Line("", "The line is dead. The cord isn't plugged into anything."),
        };

        public static readonly Line[] Call2 =
        {
            new Line(Caller, "You're looking in the wrong direction."),
        };
        public static readonly Line[] AfterCall2 =
        {
            new Line("", "Something is breathing. Right behind me."),
            new Line("", "...There's nothing there. There's nothing there."),
        };

        public static readonly Line[] Call3 =
        {
            new Line(Caller, "She called you. Twice. 'Daddy, look.'"),
            new Line(Caller, "And you said: one minute."),
            new Line(Caller, "It was always one minute."),
        };

        public static readonly Line[] Call4 =
        {
            new Line(Caller, "It isn't a monster, you know."),
            new Line(Caller, "It's the shape of where she should be. Everything you won't look at gets to move."),
        };

        public static readonly Line[] RadioLines =
        {
            new Line(Radio, "...police have confirmed that the death of a six-year-old girl on Lindell Street was a tragic accident..."),
            new Line(Radio, "...the girl's father, who made the emergency call, has asked for privacy..."),
            new Line(Radio, "...and if you're still in the apartment, don't look in the cabinet. Don't open it. Don't-"),
        };

        public static readonly Line[] TvLive =
        {
            new Line("", "It was standing right behind me. On the screen."),
            new Line("", "Then the picture changed. The bathroom. Something under the sink."),
            new Line("", "My eyes can't see it. Maybe the camera can."),
        };

        public static readonly Line[] TvBroadcast =
        {
            new Line(Tv, "Good evening, and welcome to a very special birthday show."),
            new Line(Child, "Look, Daddy! A triangle! It's got three corners!"),
            new Line(Man, "Three corners. But on this one, the triangle is number two."),
            new Line(Child, "Why?"),
            new Line(Man, "Because you're the second most important thing in the world. After the cake."),
        };

        public static readonly Line[] Tape =
        {
            new Line(Woman, "Say hi to Daddy!"),
            new Line(Child, "Hi Daddy! Look! Look what I made!"),
            new Line(Man, "One minute, sweetheart. I'm on the phone."),
            new Line(Child, "You always say one minute."),
            new Line("", "I remember her voice. Why can't I remember her face?"),
        };

        public static readonly Line[] EnterBasement =
        {
            new Line("", "It smells of damp cardboard and old dust."),
            new Line("", "There's something down here with me. It's very quiet when I look at it."),
        };

        public static readonly string[] MemoryThoughts =
        {
            "Pip. Her rabbit. She chewed its ear when she was scared of the dark.",
            "One red shoe. We never found the other one. She said it was hiding.",
            "Her crayons. She drew on everything. The walls. The mirror. My hands.",
            "Three people. She always drew me looking at her.",
        };

        public static readonly Line[] MemoriesDone =
        {
            new Line("", "Her name is Mira."),
            new Line("", "Her name was Mira."),
        };

        public static readonly Line[] FinalCall =
        {
            new Line(Child, "Daddy? You found my room."),
            new Line(Child, "You can go now. The key is on my desk. You won't have to remember anything."),
            new Line(Child, "Or you can look at me. Really look. Even if it hurts."),
            new Line(Child, "Or you can close your eyes. Like before. Then nothing ever has to change."),
        };

        public static readonly string[] Blackouts =
        {
            "I lost time. How long was I gone?",
            "Breathe. The floor is real. The walls are real.",
            "Something was standing very close to me.",
        };

        public static string BlackoutThought() => Blackouts[UnityEngine.Random.Range(0, Blackouts.Length)];

        static readonly string[] PlainCaptions =
        {
            "An ordinary photograph. Probably.",
            "Nothing unusual. You keep looking anyway.",
            "The flash makes the room look smaller than it is.",
            "A photograph of a room no one lives in.",
        };

        public static string PlainPhotoCaption() => PlainCaptions[UnityEngine.Random.Range(0, PlainCaptions.Length)];

        // ------------------------------------------------------------------ endings
        public struct EndingText
        {
            public string Title;
            public Line[] Lines;
            public string Epigraph;
        }

        public static EndingText GetEnding(Ending e)
        {
            switch (e)
            {
                case Ending.Forget:
                    return new EndingText
                    {
                        Title = "ENDING I - FORGET",
                        Lines = new[]
                        {
                            new Line("", "The door opens onto a corridor you have never seen."),
                            new Line("", "The stairs go down further than they should."),
                            new Line("", "Outside, it is morning. The air is cold and smells of rain."),
                            new Line("", "You don't remember the apartment. You don't remember a name."),
                            new Line("", "Somewhere behind you, a telephone is ringing."),
                            new Line("", "You don't turn around."),
                        },
                        Epigraph = "You can only see what you are willing to forget."
                    };
                case Ending.Remember:
                    return new EndingText
                    {
                        Title = "ENDING II - REMEMBER",
                        Lines = new[]
                        {
                            new Line("", "She is sitting on the chair. She was always sitting on the chair."),
                            new Line("", "She is smaller than you remember. Exactly the size of the space you wouldn't look at."),
                            new Line(Child, "You looked."),
                            new Line("", "Her name is Mira Vale. She was six years old."),
                            new Line("", "My name is Adrian Vale. I was on the phone."),
                            new Line("", "I'm sorry. I'm looking now."),
                            new Line("", "..."),
                            new Line("", "A hospital room. A window. Hanna asleep in the chair beside the bed."),
                            new Line("", "When she wakes up, you tell her you remember."),
                        },
                        Epigraph = "Some things only stop moving when you finally look at them."
                    };
                default:
                    return new EndingText
                    {
                        Title = "ENDING III - STAY",
                        Lines = new[]
                        {
                            new Line("", "You keep your eyes closed."),
                            new Line("", "Small footsteps cross the room and stop beside you. They wait."),
                            new Line("", "After a long time, they go away."),
                            new Line("", "In the dark, nothing has to have happened."),
                            new Line("", "..."),
                            new Line("", "A man wakes up in an unfamiliar apartment. He doesn't remember his name."),
                            new Line("", "The telephone rings. The voice on the line is his own."),
                            new Line(Caller, "Whatever happens, don't look at the empty spaces."),
                        },
                        Epigraph = "Whatever you don't look at, waits."
                    };
            }
        }

        public const string Credits =
            "THE UNSEEN\n\n" +
            "A psychological horror game\n\n\n" +
            "Game design, programming, writing\n" +
            "level design, procedural art and sound\n\n" +
            "The Unseen development team\n\n\n" +
            "Every texture, model, voice and sound in this game\n" +
            "is generated procedurally at runtime.\n" +
            "No third-party assets were used.\n\n\n" +
            "Made with Unity\n\n\n" +
            "If you are struggling with grief or thoughts of self-harm,\n" +
            "please reach out to someone you trust or a local support line.\n\n\n" +
            "Thank you for looking.";
    }
}
