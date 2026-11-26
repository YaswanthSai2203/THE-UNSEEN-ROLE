using System.Collections;
using System.Collections.Generic;
using UnityEngine;

namespace Unseen
{
    /// <summary>
    /// The basement (chapter 4) and Mira's room (chapter 5). Layout: basement x[-5,5] z[0,12],
    /// stairs up to the south, Mira's room x[-2,2] z[12,15.5] behind a locked door.
    /// </summary>
    public class BasementBuilder : WorldBuilder
    {
        readonly List<RoomLight> _lights = new List<RoomLight>();
        readonly Renderer[] _lamps = new Renderer[3];
        static readonly string[] BreakerFlags = { F.Breaker1, F.Breaker2, F.Breaker3 };
        Television _tv;
        UnseenEntity _entity;
        RoomLight _miraLight;
        Light _chairSpot;
        GameObject _mira, _frontKey, _chair;
        AudioSource _toyRing;
        Transform _toyPhone;
        bool _powerSequence, _tapePlaying, _toyRinging, _inCall, _stayWarned;
        float _gaze;

        bool Power => Has(F.PowerOn);

        public override void Build()
        {
            CeilingHeight = 2.5f;
            SetupAtmosphere(new Color(0.03f, 0.032f, 0.036f), new Color(0.015f, 0.015f, 0.018f), 0.06f);
            Room("Basement", -5f, 0f, 5f, 12f, "concrete", "concrete");
            Room("Mira", -2f, 12f, 2f, 15.5f, "carpet", "ceiling");
            WallZ(-5f, 0f, 12f, "concrete", "concrete_wall");
            WallZ(5f, 0f, 12f, "concrete_wall", "concrete");
            WallX(0f, -5f, 5f, "concrete", "concrete_wall", new Gap(0f, 1.2f, 2.5f));
            WallX(12f, -5f, 5f, "concrete_wall", "wallpaper_child", new Gap(0f, 0.9f, 2.05f));
            WallZ(-2f, 12f, 15.5f, "concrete", "wallpaper_child");
            WallZ(2f, 12f, 15.5f, "wallpaper_child", "concrete");
            WallX(15.5f, -2f, 2f, "wallpaper_child", "concrete");

            Stairs();
            Props();
            Power_();
            MirasRoom();
            if (!Power) Presence();

            Spawn("default", new Vector3(0f, 0.05f, 1.0f), 0f);
            Spawn("safe", new Vector3(0f, 0.05f, 1.0f), 0f);
        }

        // ------------------------------------------------------------------ structure
        void Stairs()
        {
            for (int i = 0; i < 10; i++)
            {
                float top = 0.18f * (i + 1);
                Box("Step", new Vector3(0f, top / 2f, -0.14f - i * 0.28f), new Vector3(1.2f, top, 0.28f), "wood_dark");
            }
            Box("StairWall", new Vector3(-0.65f, 2.1f, -1.5f), new Vector3(0.1f, 4.2f, 3.1f), "concrete_wall");
            Box("StairWall", new Vector3(0.65f, 2.1f, -1.5f), new Vector3(0.1f, 4.2f, 3.1f), "concrete_wall");
            Box("StairEnd", new Vector3(0f, 2.1f, -3.05f), new Vector3(1.4f, 4.2f, 0.1f), "concrete_wall");
            Box("StairCeiling", new Vector3(0f, 4.25f, -1.5f), new Vector3(1.4f, 0.1f, 3.2f), "concrete");
            var door = Box("UpstairsDoor", new Vector3(0f, 2.8f, -2.97f), new Vector3(0.9f, 2.0f, 0.05f), "door");
            Interactable.Add(door, "Go upstairs", () => G.TransitionTo(SceneNames.Apartment, "from_basement")).MaxDistance = 2.6f;

            var bulb = CeilingLight("EmergencyBulb", new Vector3(0f, 2.3f, 0.5f), new Color(1f, 0.75f, 0.5f), 0.6f, 4f, true, null, true);
            var zone = new GameObject("SafeZone").AddComponent<PerceptionZone>();
            zone.transform.SetParent(transform, false);
            zone.transform.localPosition = new Vector3(0f, 0f, 0.8f);
            zone.Radius = 1.8f;
            zone.RatePerSecond = 2.5f;
            G.Audio.CreateLoop(Snd.Buzz, bulb.transform, Vector3.zero, 0.12f, AudioCat.Ambience, 4f);
            G.Audio.CreateLoop(Snd.RoomTone, transform, new Vector3(0, 1.5f, 6f), 0.5f, AudioCat.Ambience, 20f);
            G.Audio.CreateLoop(Snd.Drip, transform, new Vector3(4.5f, 2.3f, 1.5f), 0.0f, AudioCat.Ambience, 6f);
        }

        void Props()
        {
            foreach (var p in new[] { new Vector3(-2f, 0, 4f), new Vector3(2f, 0, 4f), new Vector3(-2f, 0, 8f), new Vector3(2f, 0, 8f) })
                Box("Pillar", p + Vector3.up * 1.25f, new Vector3(0.4f, 2.5f, 0.4f), "concrete_wall");

            // shelving with boxes
            for (int s = 0; s < 4; s++) Box("Shelf", new Vector3(-4.6f, 0.3f + s * 0.55f, 3.5f), new Vector3(0.5f, 0.03f, 3f), "metal");
            Box("ShelfPost", new Vector3(-4.6f, 1.0f, 2.0f), new Vector3(0.5f, 2.0f, 0.04f), "metal");
            Box("ShelfPost", new Vector3(-4.6f, 1.0f, 5.0f), new Vector3(0.5f, 2.0f, 0.04f), "metal");
            var rng = new System.Random(9);
            for (int s = 0; s < 4; s++)
                for (int b = 0; b < 4; b++)
                {
                    if (rng.NextDouble() < 0.25) continue;
                    float h = 0.25f + (float)rng.NextDouble() * 0.2f;
                    Box("Carton", new Vector3(-4.6f, 0.32f + s * 0.55f + h / 2f, 2.3f + b * 0.72f), new Vector3(0.42f, h, 0.55f), "cardboard", null, true, (float)rng.NextDouble() * 10f);
                }
            Note("Clipping", new Vector3(-4.45f, 0.885f, 4.6f), new Vector3(0.2f, 0.01f, 0.28f), "clipping", "paper", 0f, () => Memory("read_clipping"));

            // the box that says do not open
            Box("MiraBox", new Vector3(-4.0f, 0.2f, 7.0f), new Vector3(0.6f, 0.4f, 0.5f), "cardboard");
            Box("Flap", new Vector3(-4.0f, 0.42f, 6.72f), new Vector3(0.6f, 0.02f, 0.25f), "cardboard", null, false, 0f).transform.localRotation = Quaternion.Euler(-60f, 0, 0);
            var label = Box("BoxLabel", new Vector3(-4.0f, 0.25f, 6.745f), new Vector3(0.35f, 0.12f, 0.01f), "paper");
            Interactable.Add(label, "Read the label", () => G.Inventory.Read("basement_note"));
            if (!Has(F.FragD))
            {
                var frag = Box("Fragment", new Vector3(-4.0f, 0.41f, 7.05f), new Vector3(0.14f, 0.01f, 0.11f), "paper");
                Interactable.Add(frag, "Take the torn photograph", () =>
                {
                    G.Inventory.Add(F.FragD);
                    Story.Set(F.FragD);
                    G.Perception.Restore(10f);
                    Thought("A corner of a photograph. A small yellow sleeve.");
                    Destroy(frag);
                });
            }

            // old desk with records
            var desk = new GameObject("OldDesk").transform;
            desk.SetParent(transform, false);
            desk.localPosition = new Vector3(-3.8f, 0f, 10.0f);
            Box("Top", new Vector3(0, 0.74f, 0), new Vector3(1.2f, 0.04f, 0.6f), "wood_dark", desk);
            Box("Body", new Vector3(-0.4f, 0.36f, 0), new Vector3(0.4f, 0.72f, 0.58f), "wood_dark", desk);
            Box("Leg", new Vector3(0.55f, 0.36f, 0), new Vector3(0.05f, 0.72f, 0.55f), "wood_dark", desk);
            Note("Coroner", new Vector3(-4.0f, 0.765f, 10.0f), new Vector3(0.22f, 0.01f, 0.3f), "coroner", "paper", 8f, () => Memory("read_coroner"));
            Note("Psych", new Vector3(-3.5f, 0.765f, 10.05f), new Vector3(0.22f, 0.01f, 0.3f), "psych", "paper", -12f, () => Memory("read_psych"));
            Note("Letter", new Vector3(-3.2f, 0.005f, 11.2f), new Vector3(0.18f, 0.01f, 0.24f), "letter", "paper", 30f, () => Memory("read_letter"));
            Box("FramedPhoto", new Vector3(-4.94f, 1.5f, 10.0f), new Vector3(0.03f, 0.4f, 0.5f), "wood_dark", null, false);
            Panel("Photo", new Vector3(-4.92f, 1.5f, 10.0f), new Vector2(0.42f, 0.32f), Vector3.right, Materials.NewLit(Color.white, Materials.FamilyPhoto(false).ToTexture(), 0.3f));

            // old furniture under sheets
            Box("SheetSofa", new Vector3(3.8f, 0.5f, 2.5f), new Vector3(1.4f, 1.0f, 0.8f), "sheet");
            Box("SheetChair", new Vector3(3.9f, 0.45f, 5.5f), new Vector3(0.9f, 0.9f, 1.6f), "sheet");
            Box("SheetTall", new Vector3(4.3f, 0.9f, 7.0f), new Vector3(0.6f, 1.8f, 0.6f), "sheet");
            Box("BikeSmall", new Vector3(1.0f, 0.3f, 11.3f), new Vector3(0.9f, 0.6f, 0.2f), "plastic_red");

            // broken television
            Box("TVCabinet", new Vector3(3.7f, 0.3f, 10.8f), new Vector3(0.5f, 0.6f, 0.9f), "wood_dark");
            var tvBody = Box("OldTV", new Vector3(3.75f, 0.83f, 10.8f), new Vector3(0.45f, 0.45f, 0.6f), "plastic_dark");
            var screen = Panel("Screen", new Vector3(3.52f, 0.85f, 10.8f), new Vector2(0.48f, 0.36f), Vector3.left, Materials.Get("screen_off"));
            var glow = new GameObject("TVGlow").AddComponent<Light>();
            glow.transform.SetParent(transform, false);
            glow.transform.localPosition = new Vector3(3.0f, 0.9f, 10.8f);
            glow.type = LightType.Point;
            glow.color = new Color(0.6f, 0.7f, 0.9f);
            glow.range = 4f;
            _tv = tvBody.AddComponent<Television>();
            _tv.Init(screen.GetComponent<Renderer>(), glow, G.Audio.CreateLoop(Snd.Static, tvBody.transform, Vector3.zero, 0.25f, AudioCat.Sfx, 8f, false));
            Interactable.Add(tvBody, "Examine the television", () =>
            {
                if (!Power) Thought("The screen is cracked. The plug is in, but there's no power down here.");
                else if (!Has(F.TapeSeen) && !_tapePlaying) StartCoroutine(Tape());
                else Thought("A home video, worn thin from being watched.");
            });
            if (Has(F.TapeSeen)) SpawnFragmentC();
        }

        void Memory(string flag)
        {
            if (Has(flag)) return;
            Story.Set(flag);
            G.Perception.Restore(8f, "You remember a little more.");
        }

        // ------------------------------------------------------------------ power (P8)
        void Power_()
        {
            var bulbs = new[] { new Vector3(-2.5f, 2.3f, 3f), new Vector3(2.5f, 2.3f, 3f), new Vector3(-2.5f, 2.3f, 9.5f), new Vector3(2.5f, 2.3f, 9.5f) };
            for (int i = 0; i < bulbs.Length; i++)
                _lights.Add(CeilingLight("BasementBulb", bulbs[i], new Color(1f, 0.82f, 0.6f), 0.95f, 6.5f, i % 2 == 0, () => Power, true));

            var panel = Box("ElectricalPanel", new Vector3(-1.5f, 1.4f, 0.1f), new Vector3(0.5f, 0.6f, 0.1f), "metal");
            for (int i = 0; i < 3; i++)
                _lamps[i] = Prim(PrimitiveType.Sphere, "Lamp", new Vector3(-1.65f + i * 0.15f, 1.55f, 0.16f), Vector3.one * 0.045f, "plastic_red", null, false).GetComponent<Renderer>();
            Interactable.Add(panel, "Examine the panel", () =>
            {
                int on = 0;
                foreach (var f in BreakerFlags) if (Has(f)) on++;
                Thought(Power ? "Main power is on." : $"Three breaker lamps: {on} of 3 lit. Labels: NORTH-WEST CORNER, WEST WALL, EAST WALL.");
            });
            Breaker(0, new Vector3(-4.9f, 1.3f, 11.4f), Vector3.right);
            Breaker(1, new Vector3(-4.9f, 1.3f, 6.0f), Vector3.right);
            Breaker(2, new Vector3(4.9f, 1.3f, 9.0f), Vector3.left);
            UpdateLamps();
        }

        void Breaker(int index, Vector3 pos, Vector3 normal)
        {
            var b = Box("Breaker", pos, new Vector3(0.12f, 0.35f, 0.25f), "metal");
            var lever = Box("Lever", pos + normal * 0.08f + Vector3.up * (Has(BreakerFlags[index]) ? 0.08f : -0.08f), new Vector3(0.04f, 0.1f, 0.04f), "plastic_red", null, false);
            Interactable.Add(b, "Throw the breaker", () =>
            {
                if (Has(BreakerFlags[index])) { Thought("It's already on."); return; }
                G.Audio.PlayAt(Snd.Breaker, pos, 0.9f);
                lever.transform.localPosition = pos + normal * 0.08f + Vector3.up * 0.08f;
                Story.Set(BreakerFlags[index]);
                UpdateLamps();
                if (Has(F.Breaker1) && Has(F.Breaker2) && Has(F.Breaker3)) StartCoroutine(PowerOn());
            }).PromptFunc = () => Has(BreakerFlags[index]) ? "Breaker (on)" : "Throw the breaker";
        }

        void UpdateLamps()
        {
            for (int i = 0; i < 3; i++)
                _lamps[i].sharedMaterial = Materials.Get(Has(BreakerFlags[i]) || Power ? "bulb" : "plastic_red");
        }

        IEnumerator PowerOn()
        {
            if (_powerSequence) yield break;
            _powerSequence = true;
            G.Audio.Play2D(Snd.Hum, 0.4f);
            foreach (var l in _lights) l.Flicker(1.2f);
            Story.Set(F.PowerOn);
            yield return new WaitForSeconds(0.3f);
            if (_entity != null) Destroy(_entity.gameObject); // gone in the flicker
            UpdateLamps();
            yield return new WaitForSeconds(1.5f);
            Thought("Light. It's gone. It's only gone because I can see now.");
            yield return new WaitForSeconds(4f);
            if (!Has(F.TapeSeen)) StartCoroutine(Tape());
        }

        IEnumerator Tape()
        {
            if (_tapePlaying) yield break;
            _tapePlaying = true;
            _tv.SetStatic();
            yield return new WaitForSeconds(1.5f);
            var c = new PixelCanvas(320, 240, new Color(0.35f, 0.3f, 0.22f));
            c.Rect(0, 150, 320, 90, new Color(0.25f, 0.2f, 0.15f));
            c.Ellipse(150, 120, 30, 45, new Color(0.75f, 0.65f, 0.35f));
            c.Disc(150, 62, 22, new Color(0.7f, 0.55f, 0.45f));
            c.Text(8, 8, "PLAY", 2, Color.white);
            c.Text(200, 220, "OCT 03", 2, Color.white);
            c.Noise(0.25f);
            _tv.SetCard(c.ToTexture());
            bool done = false;
            G.Dialogue.Play(StoryContent.Tape, VoiceKind.Tape, _tv.transform, () => done = true);
            while (!done) yield return null;
            _tv.SetStatic();
            yield return new WaitForSeconds(1f);
            _tv.SetOff();
            G.Perception.Restore(15f, "Her voice. You remember her voice.");
            Story.Set(F.TapeSeen);
            G.Audio.PlayAt(Snd.DoorOpen, new Vector3(3.7f, 0.4f, 10.8f), 0.5f, 1.4f);
            SpawnFragmentC();
            Thought("The cabinet under the television has swung open.");
            _tapePlaying = false;
        }

        void SpawnFragmentC()
        {
            if (Has(F.FragC)) return;
            var frag = Box("Fragment", new Vector3(3.3f, 0.61f, 10.8f), new Vector3(0.14f, 0.01f, 0.11f), "paper");
            Interactable.Add(frag, "Take the torn photograph", () =>
            {
                G.Inventory.Add(F.FragC);
                Story.Set(F.FragC);
                G.Perception.Restore(10f);
                Thought("Another corner. A man's hand, reaching down.");
                Destroy(frag);
            });
        }

        // ------------------------------------------------------------------ the presence
        void Presence()
        {
            var fig = Figure("ThePresence", new Vector3(0f, 0f, 10.8f), 180f, Layers.Default, 2.05f);
            _entity = fig.AddComponent<UnseenEntity>();
            _entity.Active = () => Has(F.EnteredBasement) && !Power && !G.Dialogue.Busy;
            var nodes = new List<Vector3>
            {
                new Vector3(0, 0, 2.5f), new Vector3(0, 0, 6f), new Vector3(0, 0, 10.5f),
                new Vector3(-3.4f, 0, 1.5f), new Vector3(-3.3f, 0, 6f), new Vector3(-2.8f, 0, 10.9f),
                new Vector3(2.7f, 0, 1.5f), new Vector3(2.7f, 0, 6f), new Vector3(2.7f, 0, 10f),
                new Vector3(-3.3f, 0, 8.4f), new Vector3(3.3f, 0, 8.5f)
            };
            _entity.Init(nodes, new Vector3(0f, 0f, 10.8f));
        }

        public override void OnBlackout()
        {
            if (_entity != null) _entity.ResetHome();
        }

        public override void OnEntered()
        {
            if (!Has(F.EnteredBasement))
            {
                Story.Set(F.EnteredBasement);
                G.Dialogue.Play(StoryContent.EnterBasement, VoiceKind.Thought);
            }
            else if (Power && !Has(F.TapeSeen)) StartCoroutine(Tape());
        }

        // ------------------------------------------------------------------ Mira's room (chapter 5)
        void MirasRoom()
        {
            var door = MakeDoor("door", new Vector3(-0.45f, 0f, 12f), 0f, 0.9f, "wood_painted", -95f);
            door.IsLocked = () => !Has(F.GotRoomKey);
            door.OnLockedAttempt = () => Thought("Locked. A child's drawing is taped to it: a door, and a little key with a ribbon.");
            if (Has(F.EnteredMirasRoom)) door.SetAngleInstant(-95f);

            _miraLight = CeilingLight("MiraLight", new Vector3(0f, 2.3f, 13.8f), new Color(1f, 0.72f, 0.7f), 0.7f, 5f, true, () => Power);
            Box("Bed", new Vector3(-1.3f, 0.2f, 14.6f), new Vector3(0.8f, 0.4f, 1.5f), "fabric_child");
            Box("Pillow", new Vector3(-1.3f, 0.45f, 15.15f), new Vector3(0.55f, 0.1f, 0.3f), "sheet", null, false);
            var desk = new GameObject("SmallDesk").transform;
            desk.SetParent(transform, false);
            desk.localPosition = new Vector3(1.3f, 0f, 15.1f);
            Box("Top", new Vector3(0, 0.58f, 0), new Vector3(0.8f, 0.04f, 0.5f), "wood_painted", desk);
            Box("Body", new Vector3(0, 0.28f, 0.1f), new Vector3(0.75f, 0.56f, 0.3f), "wood_painted", desk);
            Box("Rug", new Vector3(0f, 0.005f, 13.9f), new Vector3(1.6f, 0.01f, 1.2f), "rug", null, false);

            // the empty chair
            _chair = new GameObject("EmptyChair");
            _chair.transform.SetParent(transform, false);
            _chair.transform.localPosition = new Vector3(0f, 0f, 13.9f);
            _chair.transform.localRotation = Quaternion.Euler(0, 180f, 0);
            Box("Seat", new Vector3(0, 0.32f, 0), new Vector3(0.32f, 0.04f, 0.32f), "wood_painted", _chair.transform);
            Box("Back", new Vector3(0, 0.52f, -0.14f), new Vector3(0.32f, 0.38f, 0.03f), "wood_painted", _chair.transform);
            for (int i = 0; i < 4; i++)
                Box("Leg", new Vector3(i % 2 == 0 ? -0.13f : 0.13f, 0.15f, i < 2 ? -0.13f : 0.13f), new Vector3(0.03f, 0.3f, 0.03f), "wood_painted", _chair.transform, false);
            _chairSpot = new GameObject("ChairSpot").AddComponent<Light>();
            _chairSpot.transform.SetParent(transform, false);
            _chairSpot.transform.localPosition = new Vector3(0f, 2.3f, 13.9f);
            _chairSpot.transform.localRotation = Quaternion.Euler(90, 0, 0);
            _chairSpot.type = LightType.Spot;
            _chairSpot.spotAngle = 40f;
            _chairSpot.color = new Color(1f, 0.9f, 0.75f);
            _chairSpot.intensity = 0f;
            _chairSpot.range = 4f;
            _chairSpot.shadows = LightShadows.Soft;

            // Mira, who was always sitting there
            _mira = new GameObject("Mira");
            _mira.transform.SetParent(_chair.transform, false);
            Prim(PrimitiveType.Capsule, "Body", new Vector3(0, 0.55f, -0.02f), new Vector3(0.24f, 0.2f, 0.16f), "child_clothes", _mira.transform, false);
            Prim(PrimitiveType.Sphere, "Head", new Vector3(0, 0.86f, -0.02f), new Vector3(0.17f, 0.19f, 0.17f), "skin", _mira.transform, false);
            Prim(PrimitiveType.Sphere, "Hair", new Vector3(0, 0.9f, -0.04f), new Vector3(0.19f, 0.18f, 0.19f), "hair", _mira.transform, false);
            Prim(PrimitiveType.Capsule, "Leg", new Vector3(-0.06f, 0.36f, 0.1f), new Vector3(0.07f, 0.13f, 0.07f), "skin", _mira.transform, false, new Vector3(90, 0, 0));
            Prim(PrimitiveType.Capsule, "Leg", new Vector3(0.06f, 0.36f, 0.1f), new Vector3(0.07f, 0.13f, 0.07f), "skin", _mira.transform, false, new Vector3(90, 0, 0));
            _mira.SetActive(false);

            // toy telephone
            var toy = Box("ToyPhone", new Vector3(-0.6f, 0.06f, 14.9f), new Vector3(0.2f, 0.12f, 0.16f), "plastic_red");
            _toyPhone = toy.transform;
            _toyRing = G.Audio.CreateLoop(Snd.Ring, _toyPhone, Vector3.zero, 0.6f, AudioCat.Sfx, 12f, false);
            _toyRing.pitch = 1.35f;
            Interactable.Add(toy, "Pick up the toy telephone", AnswerToyPhone).PromptFunc = () => _toyRinging ? "Answer the toy telephone" : "Toy telephone";

            if (Has(F.FinalCall) && !Has(F.GotFrontKey)) SpawnFrontKey();

            // P10: memories that only appear where you are not looking
            Memory(0, new Vector3(-1.65f, 0f, 12.45f), "rabbit");
            Memory(1, new Vector3(1.65f, 0f, 12.45f), "shoe");
            Memory(2, new Vector3(1.72f, 0f, 14.1f), "crayons");
            Memory(3, new Vector3(-1.93f, 1.25f, 13.3f), "drawing");
        }

        void Memory(int index, Vector3 pos, string kind)
        {
            var root = new GameObject("Memory_" + kind);
            root.transform.SetParent(transform, false);
            root.transform.localPosition = pos;
            switch (kind)
            {
                case "rabbit":
                    Prim(PrimitiveType.Sphere, "Body", new Vector3(0, 0.12f, 0), new Vector3(0.18f, 0.22f, 0.15f), "rabbit", root.transform);
                    Prim(PrimitiveType.Sphere, "Head", new Vector3(0, 0.28f, 0), new Vector3(0.13f, 0.13f, 0.12f), "rabbit", root.transform, false);
                    Prim(PrimitiveType.Capsule, "Ear", new Vector3(-0.03f, 0.38f, 0), new Vector3(0.04f, 0.08f, 0.02f), "rabbit", root.transform, false);
                    Prim(PrimitiveType.Capsule, "Ear", new Vector3(0.03f, 0.36f, 0), new Vector3(0.04f, 0.07f, 0.02f), "rabbit", root.transform, false, new Vector3(0, 0, -40));
                    break;
                case "shoe":
                    Box("Shoe", new Vector3(0, 0.04f, 0), new Vector3(0.08f, 0.07f, 0.16f), "red_shoe", root.transform, true, 30f);
                    break;
                case "crayons":
                    Prim(PrimitiveType.Cylinder, "Cup", new Vector3(0, 0.07f, 0), new Vector3(0.1f, 0.07f, 0.1f), "porcelain", root.transform);
                    for (int i = 0; i < 5; i++)
                        Prim(PrimitiveType.Cylinder, "Crayon", new Vector3(-0.03f + i * 0.015f, 0.16f, 0), new Vector3(0.012f, 0.05f, 0.012f), i % 2 == 0 ? "plastic_red" : "child_clothes", root.transform, false, new Vector3(0, 0, -8 + i * 4));
                    break;
                default:
                    var c = new PixelCanvas(128, 96, new Color(0.92f, 0.9f, 0.84f));
                    Color blue = new Color(0.2f, 0.3f, 0.7f), grey = new Color(0.3f, 0.3f, 0.35f), yellow = new Color(0.85f, 0.7f, 0.2f);
                    c.Line(30, 30, 30, 80, 4, grey); c.Disc(30, 22, 8, grey);
                    c.Line(98, 34, 98, 80, 4, blue); c.Disc(98, 26, 7, blue);
                    c.Line(64, 55, 64, 82, 4, yellow); c.Disc(64, 48, 6, yellow);
                    c.Line(36, 40, 58, 52, 2, grey);
                    var pic = Panel("Drawing", Vector3.zero, new Vector2(0.36f, 0.27f), Vector3.right, Materials.NewLit(Color.white, c.ToTexture(), 0.05f), root.transform);
                    pic.AddComponent<BoxCollider>().size = new Vector3(1f, 1f, 0.05f);
                    break;
            }
            string flag = F.Memories[index];
            var ob = root.AddComponent<ObservableObject>();
            ob.CanMoveWhenUnobserved = false;
            ob.CanAppearWhenUnobserved = true;
            ob.MovementDelay = 2.5f;
            ob.MinPlayerDistance = 1.0f;
            ob.CheckOccupancy = false;
            ob.RequiredStoryProgress = 5;
            ob.EventCooldown = 0f;
            ob.Condition = () => G.Player != null && G.Player.transform.position.z > 12.3f;
            ob.OnChanged = o => G.Audio.PlayAt(Snd.MusicBox, pos, 0.08f, 1.5f);
            ob.SetVisible(Has(flag));
            Interactable.Add(root, "Remember", () =>
            {
                if (Has(flag)) { Thought(StoryContent.MemoryThoughts[index]); return; }
                Story.Set(flag);
                G.Perception.Restore(12f);
                Thought(StoryContent.MemoryThoughts[index]);
                if (StoryRules.MemoryCount(Has) == 4) StartCoroutine(AllRemembered());
            }).PromptFunc = () => "Remember";
        }

        IEnumerator AllRemembered()
        {
            yield return new WaitForSeconds(4f);
            Story.Set(F.MemoriesDone);
            G.Dialogue.Play(StoryContent.MemoriesDone, VoiceKind.Thought);
            yield return new WaitForSeconds(5f);
            _toyRinging = true;
            _toyRing.Play();
        }

        void AnswerToyPhone()
        {
            if (!_toyRinging)
            {
                if (Has(F.MemoriesDone) && !Has(F.FinalCall) && !_inCall) { _toyRinging = true; _toyRing.Play(); return; }
                Thought("It's just a toy. It was always just a toy.");
                return;
            }
            _toyRinging = false;
            _toyRing.Stop();
            _inCall = true;
            G.Dialogue.Play(StoryContent.FinalCall, VoiceKind.Child, _toyPhone, () =>
            {
                _inCall = false;
                Story.Set(F.FinalCall);
                _miraLight.BaseIntensity = 0.12f;
                SpawnFrontKey();
            });
        }

        void SpawnFrontKey()
        {
            _frontKey = Box("FrontKey", new Vector3(1.2f, 0.61f, 15.05f), new Vector3(0.08f, 0.015f, 0.035f), "brass");
            Interactable.Add(_frontKey, "Take the front door key", () =>
            {
                G.Inventory.Add(Items.FrontKey);
                Story.Set(F.GotFrontKey);
                Thought("FOR WHEN YOU ARE READY TO GO.");
                Destroy(_frontKey);
            });
        }

        // ------------------------------------------------------------------ continuous: entering, gazing, staying
        void Update()
        {
            var p = G.Player;
            if (p == null || G.State != GameState.Playing) return;
            Vector3 pos = p.transform.position;
            bool inRoom = pos.z > 12.3f && Mathf.Abs(pos.x) < 2f;

            if (inRoom && !Has(F.EnteredMirasRoom))
            {
                Story.Set(F.EnteredMirasRoom);
                Thought("Her room. It was always down here, under everything.");
            }

            if (!Has(F.FinalCall) || !inRoom)
            {
                _gaze = Mathf.MoveTowards(_gaze, 0f, Time.deltaTime * 2f);
                _chairSpot.intensity = _gaze / 12f * 2.2f;
                return;
            }

            if (!_mira.activeSelf && !G.Observation.IsBoundsObserved(new Bounds(_chair.transform.position + Vector3.up * 0.5f, Vector3.one * 0.6f), _chair.transform))
                _mira.SetActive(true);

            // REMEMBER: look at the empty chair, and keep looking.
            var cam = p.Cam.transform;
            Vector3 target = _chair.transform.position + Vector3.up * 0.6f;
            bool looking = !p.Eyes.IsClosed && ObservationMath.AngleTo(cam.position, cam.forward, target) < 14f &&
                           ObservationManager.HasLineOfSight(cam.position, target, _chair.transform);
            if (looking)
            {
                _gaze += Time.deltaTime;
                G.Perception.Drain(3.5f);
                if (_gaze > 4f && Random.value < Time.deltaTime * 0.8f) p.Shake(0.006f, 0.4f);
            }
            else _gaze = Mathf.MoveTowards(_gaze, 0f, Time.deltaTime * 1.5f);
            _chairSpot.intensity = _gaze / 12f * 2.2f;
            if (_gaze >= 12f) { G.TriggerEnding(Ending.Remember); return; }

            // STAY: close your eyes here, and keep them closed.
            if (p.Eyes.IsClosed)
            {
                if (p.Eyes.ClosedTime > 5f && !_stayWarned) { _stayWarned = true; Thought("It's easier like this. Isn't it?"); }
                if (p.Eyes.ClosedTime > 12f) G.TriggerEnding(Ending.Stay);
            }
            else _stayWarned = false;
        }
    }
}
