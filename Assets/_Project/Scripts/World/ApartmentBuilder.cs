using System;
using System.Collections.Generic;
using UnityEngine;

namespace Unseen
{
    /// <summary>
    /// Builds apartment 4B: living room, kitchen, hallway (with its impossible extension), bedroom,
    /// bathroom, the closet that isn't there, and the basement door. Layout (metres, +z = north):
    ///   living x[-6,-0.75] z[0,5.5] · kitchen x[-6,-0.75] z[5.5,10] · hallway x[-0.75,0.75] z[0,10(14)]
    ///   bedroom x[0.75,6] z[5,10] · bathroom x[0.75,4] z[2,5] · closet x[0.75,2.4] z[0,2]
    /// Story logic lives in ApartmentEvents.cs.
    /// </summary>
    public partial class ApartmentBuilder : WorldBuilder
    {
        RoomLight _livingLight, _lamp, _kitchenLight, _bedLight, _bathLight, _hall1, _hall2, _extLight, _closetLight;
        Television _tv;
        Camera _tvLiveCam, _tvBathCam, _remoteCam;
        Mirror _bathMirror, _bedMirror;
        Door _bedDoor, _bathDoor, _closetDoor, _cabinetDoor, _frontDoor;
        GameObject _closetFiller, _closetRoot, _mirrorMsg, _bathKey, _falseWall, _sofa, _padlock;
        Transform _phone, _radio;
        AudioSource _ringLoop, _radioLoop, _fridgeLoop, _clockLoop, _waterLoop;
        ObservableObject _chair;
        Renderer _framePicture;

        bool Power => Has(F.FuseInstalled);
        bool Changed => Chapter >= 4;
        string HallMat => Changed ? "wallpaper_stained" : "wallpaper_hall";
        string LivingMat => Changed ? "wallpaper_stained" : "wallpaper_living";
        const string BedMat = "wallpaper_bed";

        public override void Build()
        {
            CeilingHeight = 2.7f;
            SetupAtmosphere(Changed ? new Color(0.04f, 0.045f, 0.055f) : new Color(0.05f, 0.05f, 0.058f), new Color(0.02f, 0.02f, 0.025f), 0.03f);
            Shell();
            Living();
            Kitchen();
            Bedroom();
            Bathroom();
            Hallway();
            Closet();
            RemoteSet();
            if (Changed) ChangedApartment();
            SetupEvents();

            Spawn("default", new Vector3(3.6f, 0.05f, 6.9f), 300f);
            Spawn("from_basement", new Vector3(0f, 0.05f, 8.9f), 180f);
            Spawn("safe", new Vector3(-5.0f, 0.05f, 4.4f), 150f);
        }

        // ------------------------------------------------------------------ structure
        static Gap Win(float c) => new Gap(c, 1.2f, 2.1f, 0.9f);

        void Shell()
        {
            Room("Living", -6f, 0f, -0.75f, 5.5f, "floor_wood");
            Room("Kitchen", -6f, 5.5f, -0.75f, 10f, "floor_tile");
            Room("Hall", -0.75f, 0f, 0.75f, 14f, "floor_wood");
            Room("Bedroom", 0.75f, 5f, 6f, 10f, "carpet");
            Room("Bath", 0.75f, 2f, 4f, 5f, "tile_bath");
            Room("Closet", 0.75f, 0f, 2.4f, 2f, "floor_wood");

            // exterior / living / kitchen
            WallZ(-6f, 0f, 5.5f, "plaster", LivingMat, Win(1.5f), Win(4.0f));
            WallZ(-6f, 5.5f, 10f, "plaster", "plaster", Win(8.3f));
            WallX(0f, -6f, -0.75f, "plaster", LivingMat);
            WallX(10f, -6f, -0.75f, "plaster", "plaster");
            WallX(5.5f, -6f, -0.75f, LivingMat, "plaster", new Gap(-4.5f, 1.0f, 2.1f));
            // hallway sides
            WallZ(-0.75f, 0f, 5.5f, LivingMat, HallMat, new Gap(2.6f, 1.4f, 2.2f));
            WallZ(-0.75f, 5.5f, 10f, "plaster", HallMat, new Gap(7.6f, 1.2f, 2.2f));
            WallZ(0.75f, 0f, 2f, HallMat, "plaster", new Gap(1.0f, 0.8f, 2.05f));
            WallZ(0.75f, 2f, 5f, HallMat, "tile_bath", new Gap(3.0f, 0.85f, 2.05f));
            WallZ(0.75f, 5f, 10f, HallMat, BedMat, new Gap(6.0f, 0.9f, 2.05f));
            WallX(0f, -0.75f, 0.75f, "plaster", HallMat, new Gap(0f, 0.9f, 2.1f));
            // the extension that should not exist
            WallZ(-0.75f, 10f, 14f, "plaster", HallMat);
            WallZ(0.75f, 10f, 14f, HallMat, "plaster");
            WallX(14f, -0.75f, 0.75f, HallMat, "plaster");
            // east side rooms
            WallX(0f, 0.75f, 2.4f, "plaster", "plaster");
            WallZ(2.4f, 0f, 2f, "plaster", "plaster");
            WallX(2f, 0.75f, 4f, "plaster", "tile_bath");
            WallZ(4f, 2f, 5f, "tile_bath", "plaster");
            WallX(5f, 0.75f, 4f, "tile_bath", BedMat);
            WallX(5f, 4f, 6f, "plaster", BedMat);
            WallZ(6f, 5f, 10f, BedMat, "plaster", Win(6.4f));
            WallX(10f, 0.75f, 6f, BedMat, "plaster");

            WindowAt(new Vector3(-6f, 0, 1.5f), Vector3.right);
            WindowAt(new Vector3(-6f, 0, 4.0f), Vector3.right);
            WindowAt(new Vector3(-6f, 0, 8.3f), Vector3.right);
            WindowAt(new Vector3(6f, 0, 6.4f), Vector3.left);
        }

        /// <summary>Night window: glass with the building opposite, frame, sill, curtains, moonlight and wind.</summary>
        void WindowAt(Vector3 wallPoint, Vector3 inward)
        {
            bool alongZ = Mathf.Abs(inward.x) > 0.5f;
            Vector3 along = alongZ ? Vector3.forward : Vector3.right;
            Vector3 c = wallPoint + Vector3.up * 1.5f;
            Panel("WindowView", c - inward * 0.07f, new Vector2(1.2f, 1.2f), inward, Materials.Get("window_night"));
            Box("Sill", wallPoint + Vector3.up * 0.88f + inward * 0.05f, alongZ ? new Vector3(0.22f, 0.04f, 1.35f) : new Vector3(1.35f, 0.04f, 0.22f), "wood_painted");
            Box("FrameMid", c - inward * 0.03f, alongZ ? new Vector3(0.05f, 1.2f, 0.04f) : new Vector3(0.04f, 1.2f, 0.05f), "wood_painted", null, false);
            Box("FrameBar", c - inward * 0.03f, alongZ ? new Vector3(0.05f, 0.04f, 1.2f) : new Vector3(1.2f, 0.04f, 0.05f), "wood_painted", null, false);
            for (int s = -1; s <= 1; s += 2)
                Box("Curtain", wallPoint + Vector3.up * 1.35f + inward * 0.12f + along * (s * 0.78f), alongZ ? new Vector3(0.06f, 2.3f, 0.45f) : new Vector3(0.45f, 2.3f, 0.06f), "curtain", null, false);
            Box("Radiator", wallPoint + Vector3.up * 0.45f + inward * 0.12f, alongZ ? new Vector3(0.1f, 0.55f, 0.95f) : new Vector3(0.95f, 0.55f, 0.1f), "metal");
            var moon = new GameObject("Moonlight").AddComponent<Light>();
            moon.transform.SetParent(transform, false);
            moon.transform.localPosition = c + inward * 0.6f;
            moon.type = LightType.Point;
            moon.color = new Color(0.45f, 0.55f, 0.8f);
            moon.intensity = 0.35f;
            moon.range = 3.2f;
            G.Audio.CreateLoop(Snd.Wind, transform, c, 0.18f, AudioCat.Ambience, 6f);
        }

        // ------------------------------------------------------------------ furniture kit
        GameObject Chair(string name, Vector3 pos, float yaw, string mat = "wood_dark", bool child = false)
        {
            float k = child ? 0.7f : 1f;
            var root = new GameObject(name);
            root.transform.SetParent(transform, false);
            root.transform.localPosition = pos;
            root.transform.localRotation = Quaternion.Euler(0, yaw, 0);
            Box("Seat", new Vector3(0, 0.45f * k, 0), new Vector3(0.44f, 0.05f, 0.44f) * k, mat, root.transform);
            Box("Back", new Vector3(0, 0.74f * k, -0.2f * k), new Vector3(0.44f * k, 0.55f * k, 0.04f), mat, root.transform);
            for (int i = 0; i < 4; i++)
            {
                float x = (i % 2 == 0 ? -0.19f : 0.19f) * k, z = (i < 2 ? -0.19f : 0.19f) * k;
                Box("Leg", new Vector3(x, 0.215f * k, z), new Vector3(0.04f, 0.43f * k, 0.04f), mat, root.transform, false);
            }
            return root;
        }

        GameObject Table(string name, Vector3 center, Vector3 size, string mat)
        {
            var root = new GameObject(name);
            root.transform.SetParent(transform, false);
            root.transform.localPosition = center;
            Box("Top", new Vector3(0, size.y - 0.025f, 0), new Vector3(size.x, 0.05f, size.z), mat, root.transform);
            for (int i = 0; i < 4; i++)
            {
                float x = (i % 2 == 0 ? -1 : 1) * (size.x / 2f - 0.06f), z = (i < 2 ? -1 : 1) * (size.z / 2f - 0.06f);
                Box("Leg", new Vector3(x, (size.y - 0.05f) / 2f, z), new Vector3(0.05f, size.y - 0.05f, 0.05f), mat, root.transform);
            }
            return root;
        }

        void Picture(Vector3 pos, Vector3 normal, Vector2 size, Texture2D tex)
        {
            bool alongX = Mathf.Abs(normal.z) > 0.5f;
            Box("PictureFrame", pos - normal * 0.01f, alongX ? new Vector3(size.x + 0.08f, size.y + 0.08f, 0.025f) : new Vector3(0.025f, size.y + 0.08f, size.x + 0.08f), "wood_dark", null, false);
            var m = Changed ? Materials.Get("black") : Materials.NewLit(Color.white, tex, 0.4f);
            Panel("Picture", pos + normal * 0.005f, size, normal, m);
        }

        void Clock(Vector3 pos, Vector3 normal, bool ticking, float hour, float minute)
        {
            var root = new GameObject("Clock").transform;
            root.SetParent(transform, false);
            root.localPosition = pos;
            root.localRotation = Quaternion.LookRotation(normal);
            Prim(PrimitiveType.Cylinder, "Face", Vector3.zero, new Vector3(0.34f, 0.015f, 0.34f), "paper", root, false, new Vector3(90, 0, 0));
            Prim(PrimitiveType.Cylinder, "Rim", new Vector3(0, 0, -0.01f), new Vector3(0.37f, 0.012f, 0.37f), "wood_dark", root, false, new Vector3(90, 0, 0));
            var h = new GameObject("Hour").transform; h.SetParent(root, false); h.localPosition = new Vector3(0, 0, 0.02f);
            var mi = new GameObject("Minute").transform; mi.SetParent(root, false); mi.localPosition = new Vector3(0, 0, 0.025f);
            Box("Hand", new Vector3(0, 0.05f, 0), new Vector3(0.015f, 0.1f, 0.005f), "black", h, false);
            Box("Hand", new Vector3(0, 0.07f, 0), new Vector3(0.01f, 0.14f, 0.005f), "black", mi, false);
            h.localRotation = Quaternion.Euler(0, 0, -(hour % 12f + minute / 60f) * 30f);
            mi.localRotation = Quaternion.Euler(0, 0, -minute * 6f);
            if (ticking) _clockLoop = G.Audio.CreateLoop(Snd.Tick, root, Vector3.zero, 0.35f, AudioCat.Ambience, 7f);
        }

        GameObject Pickup(GameObject go, string prompt, Action take)
        {
            Interactable.Add(go, prompt, () => { take(); Destroy(go); });
            return go;
        }

        static readonly Color[] BookColors =
        {
            new Color(0.35f, 0.12f, 0.1f), new Color(0.15f, 0.2f, 0.25f), new Color(0.3f, 0.28f, 0.2f),
            new Color(0.18f, 0.25f, 0.17f), new Color(0.45f, 0.4f, 0.3f), new Color(0.2f, 0.15f, 0.12f)
        };
        static Material[] _bookMats;

        void Bookshelf(Vector3 baseCenter, float width, float height, float depth)
        {
            if (_bookMats == null)
            {
                _bookMats = new Material[BookColors.Length];
                for (int i = 0; i < BookColors.Length; i++) _bookMats[i] = Materials.NewLit(BookColors[i], null, 0.2f);
            }
            var root = new GameObject("Bookshelf").transform;
            root.SetParent(transform, false);
            root.localPosition = baseCenter;
            Box("Back", new Vector3(0, height / 2f, depth / 2f - 0.01f), new Vector3(width, height, 0.02f), "wood_dark", root);
            Box("Side", new Vector3(-width / 2f, height / 2f, 0), new Vector3(0.03f, height, depth), "wood_dark", root);
            Box("Side", new Vector3(width / 2f, height / 2f, 0), new Vector3(0.03f, height, depth), "wood_dark", root);
            var rng = new System.Random(5);
            for (int s = 0; s < 5; s++)
            {
                float y = 0.05f + s * (height - 0.1f) / 4f;
                Box("Shelf", new Vector3(0, y, 0), new Vector3(width, 0.03f, depth), "wood_dark", root);
                if (s == 4) continue;
                float x = -width / 2f + 0.05f;
                while (x < width / 2f - 0.1f)
                {
                    float w = 0.03f + (float)rng.NextDouble() * 0.04f, h = 0.2f + (float)rng.NextDouble() * 0.12f;
                    if (rng.NextDouble() < 0.12) { x += 0.12f; continue; } // gaps where books were taken
                    var b = Box("Book", new Vector3(x + w / 2f, y + 0.015f + h / 2f, -0.02f), new Vector3(w, h, depth * 0.75f), "wood_dark", root, false);
                    b.GetComponent<Renderer>().sharedMaterial = _bookMats[rng.Next(_bookMats.Length)];
                    x += w + 0.004f;
                }
            }
        }

        // ------------------------------------------------------------------ living room
        void Living()
        {
            Box("Rug", new Vector3(-3.4f, 0.005f, 2.3f), new Vector3(2.6f, 0.01f, 1.9f), "rug", null, false);

            // television
            var stand = Box("TVStand", new Vector3(-3.4f, 0.25f, 0.35f), new Vector3(1.3f, 0.5f, 0.45f), "wood_dark");
            var drawer = Box("FilmDrawer", new Vector3(-3.0f, 0.32f, 0.585f), new Vector3(0.45f, 0.14f, 0.02f), "wood_light");
            var film = Interactable.Add(drawer, "Open drawer", TakeFilm);
            film.PromptFunc = () => Has(F.GotCamera) ? "Take instant film" : "Open drawer";
            var tvBody = Box("TV", new Vector3(-3.4f, 0.8f, 0.36f), new Vector3(0.78f, 0.58f, 0.5f), "plastic_dark");
            var screen = Panel("TVScreen", new Vector3(-3.4f, 0.82f, 0.615f), new Vector2(0.6f, 0.45f), Vector3.forward, Materials.Get("screen_off"));
            var glow = new GameObject("TVGlow").AddComponent<Light>();
            glow.transform.SetParent(transform, false);
            glow.transform.localPosition = new Vector3(-3.4f, 0.9f, 1.0f);
            glow.type = LightType.Point;
            glow.color = new Color(0.6f, 0.7f, 0.9f);
            glow.range = 4.5f;
            var staticLoop = G.Audio.CreateLoop(Snd.Static, tvBody.transform, Vector3.zero, 0.3f, AudioCat.Sfx, 9f, false);
            _tv = tvBody.AddComponent<Television>();
            _tv.Init(screen.GetComponent<Renderer>(), glow, staticLoop);
            _tvLiveCam = _tv.CreateFeedCamera("TVLiveCam", transform, new Vector3(-3.4f, 1.2f, 0.7f), new Vector3(-3.4f, 1.0f, 4.0f), Layers.TvCameraMask);
            var tvi = Interactable.Add(tvBody, "Use television", UseTelevision);
            tvi.PromptFunc = () => "Use television";

            // sofa (a root so the changed apartment can turn it around)
            _sofa = new GameObject("Sofa");
            _sofa.transform.SetParent(transform, false);
            _sofa.transform.localPosition = new Vector3(-3.4f, 0f, 3.27f);
            Box("Seat", new Vector3(0, 0.21f, 0), new Vector3(2.1f, 0.42f, 0.85f), "fabric_sofa", _sofa.transform);
            Box("Back", new Vector3(0, 0.66f, 0.33f), new Vector3(2.1f, 0.5f, 0.2f), "fabric_sofa", _sofa.transform);
            Box("Arm", new Vector3(-1.0f, 0.32f, 0), new Vector3(0.18f, 0.64f, 0.85f), "fabric_sofa", _sofa.transform);
            Box("Arm", new Vector3(1.0f, 0.32f, 0), new Vector3(0.18f, 0.64f, 0.85f), "fabric_sofa", _sofa.transform);
            Box("Cushion", new Vector3(-0.48f, 0.48f, -0.05f), new Vector3(0.9f, 0.12f, 0.62f), "fabric_sofa", _sofa.transform, false);
            Box("Cushion", new Vector3(0.48f, 0.48f, -0.05f), new Vector3(0.9f, 0.12f, 0.62f), "fabric_sofa", _sofa.transform, false);

            Table("CoffeeTable", new Vector3(-3.4f, 0f, 1.85f), new Vector3(1.1f, 0.42f, 0.55f), "wood_dark");
            Prim(PrimitiveType.Cylinder, "Mug", new Vector3(-3.1f, 0.47f, 1.8f), new Vector3(0.08f, 0.05f, 0.08f), "porcelain", null, false);
            Box("Magazine", new Vector3(-3.6f, 0.428f, 1.9f), new Vector3(0.3f, 0.01f, 0.22f), "paper", null, false, 12f);

            // telephone
            Box("SideTable", new Vector3(-1.95f, 0.25f, 3.3f), new Vector3(0.45f, 0.5f, 0.45f), "wood_dark");
            var phone = Box("Phone", new Vector3(-1.95f, 0.55f, 3.3f), new Vector3(0.22f, 0.09f, 0.18f), "plastic_beige");
            Prim(PrimitiveType.Capsule, "Handset", new Vector3(0, 0.07f, 0), new Vector3(0.05f, 0.11f, 0.05f), "plastic_beige", phone.transform, false, new Vector3(0, 0, 90));
            _phone = phone.transform;
            var pi = Interactable.Add(phone, "Pick up the phone", AnswerPhone);
            pi.PromptFunc = () => _ringing ? "Answer the telephone" : "Pick up the phone";
            _ringLoop = G.Audio.CreateLoop(Snd.Ring, _phone, Vector3.zero, 0.9f, AudioCat.Sfx, 16f, false);

            // floor lamp: the warm, safe corner
            Prim(PrimitiveType.Cylinder, "LampPole", new Vector3(-5.4f, 0.75f, 3.9f), new Vector3(0.03f, 0.75f, 0.03f), "metal");
            Prim(PrimitiveType.Cylinder, "LampBase", new Vector3(-5.4f, 0.02f, 3.9f), new Vector3(0.3f, 0.02f, 0.3f), "metal", null, false);
            var shade = Prim(PrimitiveType.Cylinder, "LampShade", new Vector3(-5.4f, 1.6f, 3.9f), new Vector3(0.42f, 0.16f, 0.42f), "lampshade");
            _lamp = CeilingLight("FloorLamp", new Vector3(-5.4f, 1.5f, 3.9f), Tungsten, 1.0f, 4.5f, true, null, true);
            Interactable.Add(shade, "Switch lamp", () => { _lamp.On = !_lamp.On; G.Audio.PlayAt(Snd.Switch, shade.transform.position, 0.5f); }).PromptFunc = () => _lamp.On ? "Switch lamp off" : "Switch lamp on";
            var zone = new GameObject("SafeZone").AddComponent<PerceptionZone>();
            zone.transform.SetParent(transform, false);
            zone.transform.localPosition = new Vector3(-5.0f, 0f, 3.9f);
            zone.Radius = 1.5f;
            zone.RatePerSecond = 3f;
            zone.Active = () => _lamp.Lit;

            Bookshelf(new Vector3(-1.7f, 0f, 5.27f), 1.0f, 1.9f, 0.32f);
            // the torn family photograph
            Box("FamilyFrame", new Vector3(-2.9f, 1.5f, 5.425f), new Vector3(0.66f, 0.52f, 0.03f), "wood_dark");
            var pic = Panel("FamilyPicture", new Vector3(-2.9f, 1.5f, 5.405f), new Vector2(0.56f, 0.42f), Vector3.back, Materials.Get("black"));
            _framePicture = pic.GetComponent<Renderer>();
            var frameCol = pic.AddComponent<BoxCollider>();
            frameCol.size = new Vector3(1f, 1f, 0.05f);
            Interactable.Add(pic, "Examine the frame", UseFamilyFrame).PromptFunc = () => Has(F.PhotoRestored) ? "Look at the photograph" : "Examine the empty frame";
            UpdateFramePicture();

            // small photo on the bookshelf that changes when unobserved
            var small = new GameObject("ShelfPhoto");
            small.transform.SetParent(transform, false);
            small.transform.localPosition = new Vector3(-1.7f, 1.95f, 5.2f); // standing on top of the bookshelf
            Box("Frame", Vector3.zero, new Vector3(0.22f, 0.17f, 0.02f), "wood_dark", small.transform, false);
            var withChild = Materials.NewLit(Color.white, Materials.FamilyPhoto(true).ToTexture(), 0.3f);
            var empty = Materials.NewLit(Color.white, Materials.FamilyPhoto(false).ToTexture(), 0.3f);
            var smallPic = Panel("Photo", new Vector3(0, 0, -0.012f), new Vector2(0.19f, 0.14f), Vector3.back, withChild, small.transform);
            var ob = small.AddComponent<ObservableObject>();
            ob.RequiredStoryProgress = 2;
            ob.MovementDelay = 5f;
            ob.MinPlayerDistance = 1.5f;
            ob.CheckOccupancy = false;
            ob.Steps.Add(ObservableStep.Do(() => smallPic.GetComponent<Renderer>().sharedMaterial = empty));
            ob.OnNoticed = o => Thought("The photo on the shelf. There were three people in it. Weren't there?");
            if (Chapter >= 3) ob.JumpToStep(0);

            Picture(new Vector3(-5.93f, 1.6f, 2.75f), Vector3.right, new Vector2(0.4f, 0.3f), Materials.FamilyPhoto(false).ToTexture());
            Picture(new Vector3(-5.93f, 1.75f, 0.45f), Vector3.right, new Vector2(0.3f, 0.4f), Materials.Writing("", 64, 64, 1, Color.black, new Color(0.4f, 0.45f, 0.4f), false));
            Clock(new Vector3(-0.83f, 2.0f, 4.4f), Vector3.left, !Changed, 9, 40);

            // dining corner by the window, with the chair that moves
            Table("DiningTable", new Vector3(-5.2f, 0f, 1.0f), new Vector3(0.7f, 0.74f, 0.7f), "wood_light");
            Chair("Chair", new Vector3(-5.2f, 0f, 1.62f), 180f);
            var chair = Chair("WatchedChair", new Vector3(-4.55f, 0f, 1.0f), 270f);
            _chair = chair.AddComponent<ObservableObject>();
            _chair.MovementDelay = 4f;
            _chair.MaximumMovementDistance = 3f;
            _chair.MinPlayerDistance = 3f;
            _chair.EventCooldown = 20f;
            _chair.MovementAudio = Snd.Scrape;
            _chair.MovementAudioVolume = 0.25f;
            _chair.Steps.Add(ObservableStep.Pose(new Vector3(-4.05f, 0f, 1.45f), 150f)); // turned towards the TV
            _chair.Steps.Add(ObservableStep.Pose(new Vector3(-2.15f, 0f, 2.45f), 90f));  // facing the hallway
            _chair.Condition = () => _chair.StepIndex < 0 ? Has(F.Phone1) && Has(F.FuseInstalled) : Has(F.TvLiveSeen);
            _chair.OnNoticed = o =>
            {
                if (o.StepIndex == 0 && !Has(F.ChairNoticed))
                {
                    G.Perception.Hit(6f);
                    G.Dialogue.Play(new[] { new Line("", "That chair was by the table. I'm sure it was by the table.") }, VoiceKind.Thought);
                    Story.Set(F.ChairNoticed);
                }
                else if (o.StepIndex == 1)
                {
                    G.Perception.Hit(6f);
                    Thought("It's facing the hallway now. Like it's waiting for someone to come home.");
                    Story.Set("chair_faces_hall");
                }
            };
            if (Has("chair_faces_hall")) _chair.JumpToStep(1);
            else if (Has(F.ChairNoticed)) _chair.JumpToStep(0);

            _livingLight = CeilingLight("LivingLight", new Vector3(-3.4f, 2.5f, 2.75f), Tungsten, 1.3f, 7f);
            _livingLight.On = false;
            LightSwitch(new Vector3(-0.83f, 1.2f, 3.55f), Vector3.left, null, _livingLight);
            Dust(new Vector3(-5.0f, 1.3f, 3.6f), new Vector3(1.5f, 1.5f, 1.5f));
        }

        // ------------------------------------------------------------------ kitchen
        void Kitchen()
        {
            Box("Counter", new Vector3(-4.0f, 0.44f, 9.68f), new Vector3(3.6f, 0.88f, 0.6f), "wood_painted");
            Box("Worktop", new Vector3(-4.0f, 0.9f, 9.67f), new Vector3(3.65f, 0.04f, 0.64f), "wood_light");
            Box("Backsplash", new Vector3(-4.0f, 1.22f, 9.93f), new Vector3(3.6f, 0.6f, 0.02f), "tile_kitchen", null, false);
            Box("Hob", new Vector3(-5.2f, 0.925f, 9.65f), new Vector3(0.6f, 0.012f, 0.5f), "black", null, false);
            var basin = Box("Sink", new Vector3(-3.5f, 0.925f, 9.65f), new Vector3(0.5f, 0.015f, 0.4f), "chrome");
            Box("Tap", new Vector3(-3.5f, 1.05f, 9.88f), new Vector3(0.03f, 0.25f, 0.03f), "chrome", null, false);
            Interactable.Add(basin, "Run cold water", GroundAtSink);
            var fuseDrawer = Box("Drawer", new Vector3(-4.3f, 0.78f, 9.37f), new Vector3(0.45f, 0.14f, 0.02f), "wood_light");
            Interactable.Add(fuseDrawer, "Open drawer", () =>
            {
                G.Audio.PlayAt(Snd.DoorOpen, fuseDrawer.transform.position, 0.3f, 1.6f);
                if (!Has(F.GotFuse)) { G.Inventory.Add(Items.Fuse); Story.Set(F.GotFuse); Thought("A fuse. HALL, in pencil."); }
                else Thought("Cutlery. Birthday candles, still in the packet.");
            });
            // wall cabinets; one opens
            Box("WallCabinets", new Vector3(-4.45f, 1.95f, 9.8f), new Vector3(2.7f, 0.7f, 0.35f), "wood_painted");
            Box("CabinetBack", new Vector3(-2.4f, 1.95f, 9.96f), new Vector3(0.6f, 0.7f, 0.03f), "wood_painted");
            Box("CabinetTop", new Vector3(-2.4f, 2.29f, 9.8f), new Vector3(0.6f, 0.02f, 0.35f), "wood_painted");
            Box("CabinetBottom", new Vector3(-2.4f, 1.61f, 9.8f), new Vector3(0.6f, 0.02f, 0.35f), "wood_painted");
            Box("CabinetSide", new Vector3(-2.1f, 1.95f, 9.8f), new Vector3(0.02f, 0.7f, 0.35f), "wood_painted");
            var scrawl = new PixelCanvas(256, 256, new Color(0.62f, 0.6f, 0.53f));
            scrawl.Text(18, 20, "SHE WAS\nRIGHT THERE", 3, new Color(0.15f, 0.1f, 0.08f), true);
            scrawl.Text(30, 100, "SHE WAS RIGHT\nTHERE", 2, new Color(0.15f, 0.1f, 0.08f), true);
            scrawl.DrawSymbol(Symbol.Cross, 70, 200, 30, 6, new Color(0.25f, 0.05f, 0.04f));
            scrawl.Text(115, 186, "= 9", 4, new Color(0.25f, 0.05f, 0.04f), true);
            var msg = Panel("CabinetMessage", new Vector3(-2.4f, 1.95f, 9.94f), new Vector2(0.55f, 0.66f), Vector3.back, Materials.NewLit(Color.white, scrawl.ToTexture(), 0.1f));
            msg.AddComponent<BoxCollider>().size = new Vector3(1f, 1f, 0.05f);
            Interactable.Add(msg, "Read the scratches", () => { G.Inventory.Read("cabinet"); Story.Set(F.KitchenMsg); });
            _cabinetDoor = MakeDoor("cabinet", new Vector3(-2.7f, 1.6f, 9.62f), 0f, 0.6f, "wood_painted", 105f, 0.7f);
            _cabinetDoor.IsLocked = () => !Has(F.RadioOff);
            _cabinetDoor.OnLockedAttempt = () => Thought("It's stuck. Something on the other side is holding it shut.");
            _cabinetDoor.OnOpened = () =>
            {
                if (Has(F.KitchenMsg)) return;
                G.Perception.Hit(8f);
                G.Inventory.Read("cabinet");
                Story.Set(F.KitchenMsg);
            };
            if (Has(F.RadioOff)) _cabinetDoor.SetAngleInstant(Has(F.KitchenMsg) ? 105f : 12f);

            // refrigerator
            var fridge = Box("Fridge", new Vector3(-1.45f, 0.9f, 9.6f), new Vector3(0.7f, 1.8f, 0.65f), "appliance");
            Box("Handle", new Vector3(-1.75f, 1.2f, 9.255f), new Vector3(0.03f, 0.35f, 0.03f), "chrome", null, false);
            _fridgeLoop = G.Audio.CreateLoop(Snd.Fridge, fridge.transform, Vector3.zero, 0.3f, AudioCat.Ambience, 7f);
            var note = Panel("FridgeNote", new Vector3(-1.4f, 1.35f, 9.27f), new Vector2(0.13f, 0.16f), Vector3.back,
                Materials.NewLit(Color.white, Materials.Writing("FUSES\nDRAWER", 64, 80, 1, new Color(0.1f, 0.1f, 0.3f), new Color(0.9f, 0.88f, 0.6f), true), 0.1f));
            note.AddComponent<BoxCollider>().size = new Vector3(1f, 1f, 0.05f);
            Interactable.Add(note, "Read note", () => G.Inventory.Read("fridge_note"));

            // radio
            var radio = Box("Radio", new Vector3(-2.75f, 1.02f, 9.72f), new Vector3(0.34f, 0.2f, 0.15f), "plastic_dark");
            Prim(PrimitiveType.Cylinder, "Dial", new Vector3(0.1f, 0f, -0.08f), new Vector3(0.05f, 0.01f, 0.05f), "chrome", radio.transform, false, new Vector3(90, 0, 0));
            _radio = radio.transform;
            _radioLoop = G.Audio.CreateLoop(Snd.Static, _radio, Vector3.zero, 0.25f, AudioCat.Sfx, 9f, false);
            Interactable.Add(radio, "Switch radio", UseRadio).PromptFunc = () => _radioLoop.isPlaying ? "Switch the radio off" : "Switch the radio on";
            if (Has(F.RadioOn) && !Has(F.RadioOff)) _radioLoop.Play();

            // dining table: three chairs for a table that seats four
            Table("KitchenTable", new Vector3(-3.6f, 0f, 7.4f), new Vector3(1.4f, 0.75f, 0.85f), "wood_light");
            float flip = Changed ? 180f : 0f;
            Chair("KChair", new Vector3(-4.6f, 0f, 7.4f), 90f + flip);
            Chair("KChair", new Vector3(-2.6f, 0f, 7.4f), 270f + flip);
            Chair("KChair", new Vector3(-3.6f, 0f, 6.75f), 0f + flip);
            Prim(PrimitiveType.Cylinder, "Plate", new Vector3(-4.0f, 0.76f, 7.4f), new Vector3(0.24f, 0.006f, 0.24f), "porcelain", null, false);
            Prim(PrimitiveType.Cylinder, "Plate", new Vector3(-3.2f, 0.76f, 7.4f), new Vector3(0.24f, 0.006f, 0.24f), "porcelain", null, false);
            Prim(PrimitiveType.Cylinder, "Plate", new Vector3(-3.6f, 0.76f, 7.15f), new Vector3(0.24f, 0.006f, 0.24f), "porcelain", null, false);
            var smallPlate = Prim(PrimitiveType.Cylinder, "SmallPlate", new Vector3(-3.6f, 0.76f, 7.7f), new Vector3(0.18f, 0.006f, 0.18f), "plastic_red", null, false);
            var cupObs = smallPlate.AddComponent<ObservableObject>();
            cupObs.RequiredStoryProgress = 2;
            cupObs.MinPlayerDistance = 2f;
            cupObs.EventCooldown = 45f;
            cupObs.CheckOccupancy = false;
            cupObs.LoopSteps = true;
            cupObs.Steps.Add(ObservableStep.Do(() => cupObs.SetVisible(false)));
            cupObs.Steps.Add(ObservableStep.Do(() => cupObs.SetVisible(true)));

            Clock(new Vector3(-5.93f, 2.0f, 6.6f), Vector3.right, false, 9, 40); // stopped at 9:40
            _kitchenLight = CeilingLight("KitchenLight", new Vector3(-3.4f, 2.5f, 7.7f), Tungsten, 1.2f, 6.5f);
            _kitchenLight.On = false;
            LightSwitch(new Vector3(-0.83f, 1.2f, 8.4f), Vector3.left, null, _kitchenLight);
        }

        // ------------------------------------------------------------------ bedroom
        void Bedroom()
        {
            Box("BedFrame", new Vector3(4.95f, 0.32f, 8.0f), new Vector3(2.0f, 0.15f, 1.45f), "wood_dark");
            for (int i = 0; i < 4; i++)
                Box("BedLeg", new Vector3(i % 2 == 0 ? 4.0f : 5.9f, 0.125f, i < 2 ? 7.33f : 8.67f), new Vector3(0.06f, 0.25f, 0.06f), "wood_dark", null, false);
            Box("Mattress", new Vector3(4.95f, 0.5f, 8.0f), new Vector3(1.95f, 0.2f, 1.4f), "fabric_bed");
            Box("Headboard", new Vector3(5.94f, 0.65f, 8.0f), new Vector3(0.06f, 1.0f, 1.45f), "wood_dark");
            Box("Pillow", new Vector3(5.62f, 0.65f, 8.0f), new Vector3(0.35f, 0.1f, 1.0f), "fabric_bed", null, false);
            if (!Changed) Box("Blanket", new Vector3(4.6f, 0.62f, 8.0f), new Vector3(1.3f, 0.05f, 1.46f), "sheet", null, false);

            Box("BedsideTable", new Vector3(5.6f, 0.3f, 9.2f), new Vector3(0.45f, 0.6f, 0.4f), "wood_dark");
            if (!Has(F.GotFlashlight))
            {
                var torch = Prim(PrimitiveType.Cylinder, "Flashlight", new Vector3(5.5f, 0.64f, 9.15f), new Vector3(0.06f, 0.12f, 0.06f), "metal", null, true, new Vector3(0, 30, 90));
                Pickup(torch, "Take flashlight", () =>
                {
                    G.Inventory.Add(Items.Flashlight);
                    Story.Set(F.GotFlashlight);
                    GameEvents.Notify($"Flashlight: press {UIManager.KeyName(G.Settings.KeyFor(InputAction.Flashlight))}");
                });
            }
            var watch = Prim(PrimitiveType.Cylinder, "Wristwatch", new Vector3(5.72f, 0.61f, 9.3f), new Vector3(0.06f, 0.008f, 0.06f), "chrome");
            Interactable.Add(watch, "Hold the wristwatch", () => Ground("watch", 20f, "It still ticks. You count sixty seconds, and the room holds still."));

            // wardrobe, hollow so its contents can be seen
            var wr = new GameObject("Wardrobe").transform;
            wr.SetParent(transform, false);
            wr.localPosition = new Vector3(2.6f, 0f, 9.7f);
            Box("Back", new Vector3(0, 1.0f, 0.27f), new Vector3(1.2f, 2.0f, 0.03f), "wood_dark", wr);
            Box("Side", new Vector3(-0.59f, 1.0f, 0), new Vector3(0.03f, 2.0f, 0.57f), "wood_dark", wr);
            Box("Side", new Vector3(0.59f, 1.0f, 0), new Vector3(0.03f, 2.0f, 0.57f), "wood_dark", wr);
            Box("Top", new Vector3(0, 1.99f, 0), new Vector3(1.2f, 0.03f, 0.57f), "wood_dark", wr);
            Box("Bottom", new Vector3(0, 0.06f, 0), new Vector3(1.2f, 0.12f, 0.57f), "wood_dark", wr);
            Prim(PrimitiveType.Cylinder, "Rail", new Vector3(0, 1.75f, 0.05f), new Vector3(0.02f, 0.58f, 0.02f), "chrome", wr, false, new Vector3(0, 0, 90));
            Box("ChildDress", new Vector3(-0.2f, 1.42f, 0.05f), new Vector3(0.3f, 0.6f, 0.05f), "child_clothes", wr, false);
            Box("ChildCoat", new Vector3(0.15f, 1.38f, 0.05f), new Vector3(0.32f, 0.68f, 0.06f), "fabric_child", wr, false);
            Box("SmallShoes", new Vector3(0.3f, 0.15f, 0.0f), new Vector3(0.12f, 0.06f, 0.16f), "red_shoe", wr, false);
            var tally = new PixelCanvas(128, 256, new Color(0.3f, 0.2f, 0.14f));
            tally.Text(6, 10, "IIII IIII\nIIII IIII\nIIII IIII\nIIII IIII\nIIII IIII\nIIII III", 2, new Color(0.55f, 0.45f, 0.35f), true);
            Panel("Tally", new Vector3(-0.57f, 1.2f, 0f), new Vector2(0.4f, 0.8f), Vector3.right, Materials.NewLit(Color.white, tally.ToTexture(), 0.1f), wr);
            Note("Diary", new Vector3(2.4f, 0.14f, 9.65f), new Vector3(0.18f, 0.03f, 0.24f), "diary", "plastic_red", 15f, () => Story.Set(F.DiaryRead));
            var drawing = Panel("Drawing", new Vector3(2.75f, 0.85f, 9.95f), new Vector2(0.4f, 0.3f), Vector3.back, Materials.NewLit(Color.white, ChildDrawing(), 0.05f));
            drawing.AddComponent<BoxCollider>().size = new Vector3(1f, 1f, 0.05f);
            Interactable.Add(drawing, "Look at the drawing", () => G.Inventory.Read("drawing"));
            var wl = MakeDoor("wardrobe", new Vector3(2.02f, 0.12f, 9.41f), 0f, 0.58f, "wood_dark", 100f, 1.86f);
            var wrr = MakeDoor("wardrobe", new Vector3(3.18f, 0.12f, 9.41f), 180f, 0.58f, "wood_dark", -100f, 1.86f);
            foreach (var d in new[] { wl, wrr })
            {
                d.IsLocked = () => !Has(F.GotBrassKey);
                d.OnLockedAttempt = () => Thought("Locked. A small brass keyhole.");
                d.OnOpened = () =>
                {
                    if (Has(F.WardrobeOpen)) return;
                    Story.Set(F.WardrobeOpen);
                    G.Perception.Hit(8f);
                    G.Audio.PlayAt(Snd.Creak, d.transform.position, 0.5f);
                    Thought("Small clothes. A child's. Why does this apartment have a child's clothes?");
                };
            }
            if (Has(F.WardrobeOpen)) { wl.SetAngleInstant(100f); wrr.SetAngleInstant(-100f); }

            // desk with the camera drawer
            Table("Desk", new Vector3(4.5f, 0f, 5.38f), new Vector3(1.2f, 0.76f, 0.6f), "wood_light");
            var drawer = Box("DeskDrawer", new Vector3(4.5f, 0.64f, 5.38f), new Vector3(0.5f, 0.12f, 0.52f), "wood_light");
            Interactable.Add(drawer, "Open drawer", () =>
            {
                G.Audio.PlayAt(Snd.DoorOpen, drawer.transform.position, 0.3f, 1.5f);
                if (!Has(F.GotCamera))
                {
                    G.Inventory.Add(Items.Camera);
                    G.Inventory.Add(Items.Film, 6);
                    Story.Set(F.GotCamera);
                    GameEvents.Notify($"Take a photograph: {UIManager.KeyName(G.Settings.KeyFor(InputAction.Camera))}    Inventory: {UIManager.KeyName(G.Settings.KeyFor(InputAction.Inventory))}");
                    Thought("An old instant camera. Someone loaded it.");
                }
                else Thought("Pencils. A hospital wristband, cut through. The name has been scratched off.");
            });
            var dob = drawer.AddComponent<ObservableObject>();
            dob.RequiredStoryProgress = 2;
            dob.CheckOccupancy = false;
            dob.MinPlayerDistance = 2.5f;
            dob.EventCooldown = 60f;
            dob.LoopSteps = true;
            dob.MovementAudio = Snd.Scrape;
            dob.MovementAudioVolume = 0.15f;
            dob.Steps.Add(ObservableStep.Pose(new Vector3(4.5f, 0.64f, 5.68f), 0f));
            dob.Steps.Add(ObservableStep.Pose(new Vector3(4.5f, 0.64f, 5.38f), 0f));
            Chair("DeskChair", new Vector3(4.5f, 0f, 6.0f), 180f);
            Box("Papers", new Vector3(4.2f, 0.765f, 5.3f), new Vector3(0.3f, 0.01f, 0.22f), "paper", null, false, -8f);
            Prim(PrimitiveType.Cylinder, "Mug", new Vector3(4.95f, 0.8f, 5.25f), new Vector3(0.08f, 0.05f, 0.08f), "porcelain", null, false);

            // mirror
            Box("MirrorFrame", new Vector3(0.8f, 1.45f, 8.7f), new Vector3(0.02f, 1.08f, 0.63f), "wood_dark", null, false);
            var mGo = new GameObject("BedroomMirror");
            mGo.transform.SetParent(transform, false);
            mGo.transform.localPosition = new Vector3(0.815f, 1.45f, 8.7f);
            mGo.transform.localRotation = Quaternion.LookRotation(Vector3.right);
            _bedMirror = mGo.AddComponent<Mirror>();
            _bedMirror.Init(0.55f, 1.0f);
            var mcol = new GameObject("MirrorCollider");
            mcol.transform.SetParent(mGo.transform, false);
            mcol.AddComponent<BoxCollider>().size = new Vector3(0.55f, 1.0f, 0.04f);
            Interactable.Add(mcol, "Look in the mirror", () => Thought(Has(F.MemoriesDone) ? "Adrian. That's my face. Adrian." : "A tired man. I don't know his name either."));

            // music box hidden by the bed (found by sound alone)
            BuildMusicBox(new Vector3(4.45f, 0.0f, 7.12f));

            _bedLight = CeilingLight("BedroomLight", new Vector3(3.4f, 2.5f, 7.5f), Tungsten, 1.1f, 6.5f);
            _bedLight.On = false;
            LightSwitch(new Vector3(0.83f, 1.2f, 6.75f), Vector3.right, null, _bedLight);
            _bedDoor = MakeDoor("door", new Vector3(0.75f, 0f, 5.55f), -90f, 0.9f, "door");
            Dust(new Vector3(3.5f, 1.2f, 7.5f), new Vector3(3f, 2f, 3f));
        }

        static Texture2D ChildDrawing()
        {
            var c = new PixelCanvas(256, 192, new Color(0.92f, 0.9f, 0.84f));
            Color grey = new Color(0.35f, 0.35f, 0.38f), blue = new Color(0.2f, 0.3f, 0.7f), red = new Color(0.7f, 0.15f, 0.1f);
            c.Line(20, 30, 236, 30, 2, red); c.Line(20, 30, 20, 140, 2, red); c.Line(236, 30, 236, 140, 2, red);
            c.Line(20, 140, 236, 140, 2, red); c.Line(128, 30, 128, 140, 2, red); c.Line(20, 85, 236, 85, 2, red);
            for (int i = 0; i < 4; i++)
            {
                float x = 60 + (i % 2) * 108, y = 40 + (i / 2) * 55;
                c.Line(x, y, x, y + 38, 4, grey); c.Disc(x, y - 3, 5, grey);
            }
            c.Ellipse(180, 128, 26, 7, blue); c.Line(160, 126, 190, 126, 3, new Color(0.9f, 0.75f, 0.2f));
            c.Text(36, 156, "DADDY DONT LOOK AWAY", 2, red, true);
            return c.ToTexture();
        }

        // ------------------------------------------------------------------ bathroom
        void Bathroom()
        {
            Prim(PrimitiveType.Cylinder, "Pedestal", new Vector3(2.2f, 0.4f, 4.75f), new Vector3(0.15f, 0.4f, 0.15f), "porcelain");
            var basin = Box("Basin", new Vector3(2.2f, 0.85f, 4.72f), new Vector3(0.55f, 0.15f, 0.42f), "porcelain");
            Box("Tap", new Vector3(2.2f, 1.0f, 4.88f), new Vector3(0.03f, 0.15f, 0.03f), "chrome", null, false);
            _waterLoop = G.Audio.CreateLoop(Snd.Water, basin.transform, Vector3.up * 0.1f, 0.4f, AudioCat.Sfx, 8f, false);
            Interactable.Add(basin, "Turn the tap", () =>
            {
                if (_waterLoop.isPlaying) { _waterLoop.Stop(); Thought("The water was running. I didn't leave it running."); }
                else { _waterLoop.Play(); StartCoroutine(StopAfter(_waterLoop, 4f)); }
            }).PromptFunc = () => _waterLoop.isPlaying ? "Turn off the tap" : "Turn the tap";

            // mirror
            Box("MirrorFrame", new Vector3(2.2f, 1.55f, 4.94f), new Vector3(0.68f, 0.83f, 0.02f), "chrome", null, false);
            var mGo = new GameObject("BathroomMirror");
            mGo.transform.SetParent(transform, false);
            mGo.transform.localPosition = new Vector3(2.2f, 1.55f, 4.925f);
            mGo.transform.localRotation = Quaternion.LookRotation(Vector3.back);
            _bathMirror = mGo.AddComponent<Mirror>();
            _bathMirror.Init(0.6f, 0.75f);
            var mcol = new GameObject("MirrorCollider");
            mcol.transform.SetParent(mGo.transform, false);
            mcol.AddComponent<BoxCollider>().size = new Vector3(0.6f, 0.75f, 0.04f);
            Interactable.Add(mcol, "Look in the mirror", () => Thought(Has(F.MirrorMsg) ? "11, 4, 7. Written from the inside of the glass." : "My reflection looks back. It takes a moment too long."));
            var steam = new PixelCanvas(256, 320, Color.clear);
            steam.TextCentered(50, "CH", 7, new Color(0.85f, 0.88f, 0.9f), true);
            steam.TextCentered(150, "11 4 7", 6, new Color(0.85f, 0.88f, 0.9f), true);
            steam.Line(70, 250, 186, 250, 4, new Color(0.85f, 0.88f, 0.9f));
            steam.Line(70, 250, 70, 300, 4, new Color(0.85f, 0.88f, 0.9f)); steam.Line(186, 250, 186, 300, 4, new Color(0.85f, 0.88f, 0.9f));
            steam.Line(70, 300, 186, 300, 4, new Color(0.85f, 0.88f, 0.9f));
            _mirrorMsg = Panel("MirrorWriting", new Vector3(2.2f, 1.55f, 4.92f), new Vector2(0.5f, 0.62f), Vector3.back, Materials.Cutout(steam.ToTexture(), Color.white, true), null, Layers.IgnoreRaycast);
            _mirrorMsg.SetActive(Has(F.MirrorMsg));

            // what only the camera can see
            _bathKey = Prim(PrimitiveType.Cube, "BrassKey", new Vector3(2.45f, 0.012f, 4.55f), new Vector3(0.07f, 0.012f, 0.03f), "brass", null, false, new Vector3(0, 25, 0));
            _bathKey.layer = Has(F.KeyRevealed) ? Layers.Default : Layers.Unseen;
            if (Has(F.GotBrassKey)) Destroy(_bathKey);
            else
            {
                if (Has(F.KeyRevealed)) MakeKeyTakeable();
                var reveal = _bathKey.AddComponent<RevealOnPhoto>();
                reveal.MaxDistance = 4.5f;
                reveal.Caption = "Under the sink there is something small and brass. It wasn't there when you looked.";
                reveal.Active = () => !Has(F.KeyRevealed) && Has(F.GotCamera);
                reveal.OnRevealed = () =>
                {
                    Story.Set(F.KeyRevealed);
                    _bathKey.layer = Layers.Default;
                    MakeKeyTakeable();
                };
            }
            var circle = Panel("CircleSymbol", new Vector3(2.95f, 0.55f, 4.935f), new Vector2(0.5f, 0.25f), Vector3.back,
                Materials.Cutout(Materials.SymbolCard(Symbol.Circle, "= 0", new Color(0.35f, 0.08f, 0.06f), Color.clear, true), Color.white), null, Layers.Unseen);
            var cr = circle.AddComponent<RevealOnPhoto>();
            cr.MaxDistance = 4.5f;
            cr.Caption = "On the tiles beside the sink, something is drawn: a circle, and the number 0.";
            cr.Active = () => Has(F.GotCamera);
            cr.OnRevealed = () => { if (!Has(F.CircleSeen)) { Story.Set(F.CircleSeen); Story.AddJournal("Bathroom tiles (in a photograph): CIRCLE = 0"); } };

            // bath, shower, toilet, cabinet
            Box("Bathtub", new Vector3(3.55f, 0.275f, 3.05f), new Vector3(0.75f, 0.55f, 1.65f), "porcelain");
            Box("BathWater", new Vector3(3.55f, 0.555f, 3.05f), new Vector3(0.6f, 0.01f, 1.5f), "water", null, false);
            Box("BathTap", new Vector3(3.55f, 0.75f, 3.85f), new Vector3(0.04f, 0.3f, 0.04f), "chrome", null, false);
            Prim(PrimitiveType.Cylinder, "ShowerHead", new Vector3(3.55f, 2.05f, 3.82f), new Vector3(0.12f, 0.02f, 0.12f), "chrome", null, false, new Vector3(30, 0, 0));
            Prim(PrimitiveType.Cylinder, "CurtainRail", new Vector3(3.17f, 2.2f, 3.05f), new Vector3(0.02f, 0.85f, 0.02f), "chrome", null, false, new Vector3(90, 0, 0));
            Box("ShowerCurtain", new Vector3(3.17f, 1.4f, 2.6f), new Vector3(0.02f, 1.55f, 0.75f), "sheet", null, false);
            Box("Toilet", new Vector3(1.2f, 0.2f, 4.62f), new Vector3(0.4f, 0.4f, 0.55f), "porcelain");
            Box("Cistern", new Vector3(1.2f, 0.6f, 4.85f), new Vector3(0.4f, 0.4f, 0.16f), "porcelain");
            var cab = Box("MedicineCabinet", new Vector3(2.6f, 1.5f, 2.1f), new Vector3(0.5f, 0.6f, 0.15f), "wood_painted");
            Interactable.Add(cab, "Open cabinet", () => Thought("Sleeping pills, a lot of them. A child's toothbrush, still damp."));
            _tvBathCam = _tv.CreateFeedCamera("TVBathCam", transform, new Vector3(1.05f, 2.25f, 2.35f), new Vector3(2.45f, 0.35f, 4.6f), Layers.TvCameraMask);

            _bathLight = CeilingLight("BathroomLight", new Vector3(2.4f, 2.5f, 3.5f), ColdLight, 1.0f, 4.5f, true, null, true);
            _bathLight.On = false;
            _bathLight.AlwaysUnstable = Chapter >= 2;
            LightSwitch(new Vector3(0.83f, 1.2f, 3.65f), Vector3.right, null, _bathLight);
            _bathDoor = MakeDoor("door", new Vector3(0.75f, 0f, 2.575f), -90f, 0.85f, "door");
            G.Audio.CreateLoop(Snd.Drip, transform, new Vector3(3.55f, 0.8f, 3.8f), 0.0f, AudioCat.Ambience, 5f, false);
        }

        void MakeKeyTakeable()
        {
            if (_bathKey.GetComponent<Collider>() == null) _bathKey.AddComponent<BoxCollider>().size = new Vector3(3f, 6f, 5f);
            Pickup(_bathKey, "Take the small brass key", () =>
            {
                G.Inventory.Add(Items.BrassKey);
                Story.Set(F.GotBrassKey);
                Thought("It's cold. Real.");
            });
        }

        System.Collections.IEnumerator StopAfter(AudioSource src, float s)
        {
            yield return new WaitForSeconds(s);
            if (src != null) src.Stop();
        }

        // ------------------------------------------------------------------ hallway
        void Hallway()
        {
            _hall1 = CeilingLight("HallLight", new Vector3(0f, 2.5f, 2.5f), Tungsten, 0.9f, 5f, true, () => Power);
            _hall2 = CeilingLight("HallLight", new Vector3(0f, 2.5f, 7.5f), Tungsten, 0.9f, 5f, true, () => Power);
            // Only lit while the hallway is stretched, so it never shines through the end wall.
            _extLight = CeilingLight("ExtensionBulb", new Vector3(0f, 2.4f, 12.4f), new Color(0.9f, 0.85f, 0.7f), 0.35f, 4f, false, () => Power && _falseWall != null && _falseWall.transform.position.z > 11f, true);
            LightSwitch(new Vector3(-0.69f, 1.2f, 0.45f), Vector3.right, () => Power, _hall1, _hall2);
            var drain = new GameObject("DistortedZone").AddComponent<PerceptionZone>();
            drain.transform.SetParent(transform, false);
            drain.transform.localPosition = new Vector3(0, 0, 12f);
            drain.Radius = 2.2f;
            drain.RatePerSecond = -1.5f;

            var fusebox = Box("FuseBox", new Vector3(-0.7f, 1.55f, 0.95f), new Vector3(0.08f, 0.4f, 0.3f), "metal");
            Interactable.Add(fusebox, "Open fuse box", UseFuseBox).PromptFunc = () => Power ? "Fuse box" : G.Inventory.Has(Items.Fuse) ? "Insert the fuse" : "Open fuse box";

            Box("Console", new Vector3(0.55f, 0.4f, 4.3f), new Vector3(0.25f, 0.8f, 0.8f), "wood_dark");
            Prim(PrimitiveType.Cylinder, "KeyBowl", new Vector3(0.55f, 0.83f, 4.3f), new Vector3(0.18f, 0.03f, 0.18f), "porcelain", null, false);
            Box("Runner", new Vector3(0f, 0.005f, 5.0f), new Vector3(0.8f, 0.01f, 8.5f), "rug", null, false);
            for (int i = 0; i < 3; i++) Box("CoatHook", new Vector3(0.71f, 1.75f, 0.25f + i * 0.2f), new Vector3(0.05f, 0.03f, 0.03f), "brass", null, false);
            Box("Coat", new Vector3(0.64f, 1.35f, 0.35f), new Vector3(0.08f, 0.8f, 0.35f), "clothes", null, false);
            Picture(new Vector3(-0.7f, 1.6f, 5.0f), Vector3.right, new Vector2(0.35f, 0.45f), Materials.Writing("", 32, 32, 1, Color.black, new Color(0.35f, 0.4f, 0.45f), false));
            Picture(new Vector3(0.7f, 1.6f, 8.5f), Vector3.left, new Vector2(0.45f, 0.35f), Materials.FamilyPhoto(false).ToTexture());

            _frontDoor = MakeDoor("front door", new Vector3(-0.45f, 0f, 0.0f), 0f, 0.9f, "door_front", -95f, 2.1f);
            _frontDoor.IsLocked = () => true;
            _frontDoor.OnLockedAttempt = UseFrontDoor;
            Box("DoorChain", new Vector3(0.3f, 1.5f, 0.06f), new Vector3(0.1f, 0.02f, 0.01f), "brass", null, false);

            BuildFalseWall();
        }

        /// <summary>The north end of the hallway, with the basement door. It is not always where you left it.</summary>
        void BuildFalseWall()
        {
            _falseWall = new GameObject("HallEnd");
            _falseWall.transform.SetParent(transform, false);
            _falseWall.transform.localPosition = new Vector3(0, 0, 10f);
            var t = _falseWall.transform;
            Box("Wall", new Vector3(-0.6f, 1.35f, 0), new Vector3(0.3f, 2.7f, 0.12f), HallMat, t);
            Box("Wall", new Vector3(0.6f, 1.35f, 0), new Vector3(0.3f, 2.7f, 0.12f), HallMat, t);
            Box("Wall", new Vector3(0f, 2.375f, 0), new Vector3(0.9f, 0.65f, 0.12f), HallMat, t);
            var door = Box("BasementDoor", new Vector3(0f, 1.025f, 0f), new Vector3(0.88f, 2.05f, 0.05f), "door", t);
            Prim(PrimitiveType.Sphere, "Knob", new Vector3(0.32f, 1.0f, -0.04f), Vector3.one * 0.055f, "brass", t, false);
            if (!Has(F.BasementUnlocked))
            {
                _padlock = new GameObject("Padlock");
                _padlock.transform.SetParent(t, false);
                _padlock.transform.localPosition = new Vector3(0.32f, 1.15f, -0.07f);
                Box("Body", Vector3.zero, new Vector3(0.09f, 0.1f, 0.04f), "brass", _padlock.transform, false);
                Prim(PrimitiveType.Cylinder, "Shackle", new Vector3(0, 0.07f, 0), new Vector3(0.06f, 0.03f, 0.06f), "chrome", _padlock.transform, false);
            }
            var it = Interactable.Add(door, "Basement door", UseBasementDoor);
            it.PromptFunc = () => Has(F.BasementUnlocked) ? "Go down to the basement" : "Examine the padlock";

            var ob = _falseWall.AddComponent<ObservableObject>();
            ob.RequiredStoryProgress = 3;
            ob.MovementDelay = 3f;
            ob.EventCooldown = 50f;
            ob.MaximumMovementDistance = 3.2f;
            ob.MinPlayerDistance = 4f;
            ob.LoopSteps = true;
            ob.MovementAudio = Snd.Creak;
            ob.MovementAudioVolume = 0.2f;
            ob.Steps.Add(ObservableStep.Pose(new Vector3(0, 0, 13f), 0f));
            ob.Steps.Add(ObservableStep.Pose(new Vector3(0, 0, 10f), 0f));
            var player = new Func<Vector3>(() => G.Player != null ? G.Player.transform.position : Vector3.zero);
            // Only stretches/returns while the player is well down the hallway, so nobody is ever shut in behind it.
            ob.Condition = () => Chapter <= 4 && player().z < 8.3f && Mathf.Abs(player().x) < 0.8f;
            ob.OnNoticed = o =>
            {
                if (o.StepIndex == 0) { G.Perception.Hit(5f); Thought("The hallway is longer. It is longer than it was."); }
            };
        }

        // ------------------------------------------------------------------ closet
        void Closet()
        {
            bool found = Has(F.ClosetFound);
            _closetFiller = Box("Wall", new Vector3(0.75f, 1.025f, 1.0f), new Vector3(0.12f, 2.05f, 0.8f), HallMat);
            _closetRoot = new GameObject("ClosetContents");
            _closetRoot.transform.SetParent(transform, false);
            _closetDoor = MakeDoor("closet", new Vector3(0.75f, 0f, 0.6f), -90f, 0.8f, "door");
            _closetDoor.transform.parent.SetParent(_closetRoot.transform, true);
            Box("Shelf", new Vector3(1.6f, 1.55f, 0.22f), new Vector3(1.5f, 0.03f, 0.35f), "wood_painted", _closetRoot.transform);
            Box("OldCoat", new Vector3(2.1f, 1.2f, 1.0f), new Vector3(0.4f, 1.0f, 0.1f), "clothes", _closetRoot.transform, false, 90f);
            Box("SmallCoat", new Vector3(1.9f, 1.35f, 1.4f), new Vector3(0.3f, 0.6f, 0.08f), "child_clothes", _closetRoot.transform, false, 90f);
            var note = Box("ClosetNote", new Vector3(1.3f, 1.575f, 0.2f), new Vector3(0.2f, 0.01f, 0.26f), "paper", _closetRoot.transform);
            Interactable.Add(note, "Read note", () =>
            {
                G.Inventory.Read("closet_note");
                if (!Has("square_seen")) { Story.Set("square_seen"); Story.AddJournal("Closet note: SQUARE = 1"); }
            });
            if (!Has(F.FragA))
            {
                var frag = Box("Fragment", new Vector3(1.85f, 1.575f, 0.22f), new Vector3(0.14f, 0.01f, 0.11f), "paper", _closetRoot.transform);
                Pickup(frag, "Take the torn photograph", () => { G.Inventory.Add(F.FragA); Story.Set(F.FragA); G.Perception.Restore(10f); Thought("Part of a photograph. A man's shoulder."); });
            }
            _closetLight = CeilingLight("ClosetBulb", new Vector3(1.6f, 2.4f, 1.0f), Tungsten, 0.5f, 3f, false, null, true);
            _closetLight.transform.SetParent(_closetRoot.transform, true);
            _closetFiller.SetActive(!found);
            _closetRoot.SetActive(found);
        }

        // ------------------------------------------------------------------ the room the TV shows
        void RemoteSet()
        {
            var root = new GameObject("RemoteSet").transform;
            root.SetParent(transform, false);
            root.localPosition = new Vector3(0, -30f, 0);
            Box("Floor", new Vector3(0, -0.05f, 0), new Vector3(4, 0.1f, 4), "carpet", root);
            Box("Wall", new Vector3(0, 1.25f, 2f), new Vector3(4, 2.5f, 0.1f), "wallpaper_child", root);
            Box("Wall", new Vector3(-2f, 1.25f, 0), new Vector3(0.1f, 2.5f, 4), "wallpaper_child", root);
            Box("Wall", new Vector3(2f, 1.25f, 0), new Vector3(0.1f, 2.5f, 4), "wallpaper_child", root);
            Box("Bed", new Vector3(-1.2f, 0.25f, 1.1f), new Vector3(1.2f, 0.4f, 1.6f), "fabric_child", root);
            var c = Chair("EmptyChair", Vector3.zero, 180f, "wood_painted", true);
            c.transform.SetParent(root, false);
            c.transform.localPosition = new Vector3(0.3f, 0, 0.6f);
            Prim(PrimitiveType.Sphere, "Rabbit", new Vector3(-1.0f, 0.55f, 1.3f), new Vector3(0.18f, 0.22f, 0.15f), "rabbit", root, false);
            var l = new GameObject("Light").AddComponent<Light>();
            l.transform.SetParent(root, false);
            l.transform.localPosition = new Vector3(0.5f, 2.0f, -0.5f);
            l.type = LightType.Point;
            l.color = new Color(1f, 0.7f, 0.6f);
            l.intensity = 0.9f;
            l.range = 5f;
            _remoteCam = _tv.CreateFeedCamera("RemoteCam", root, root.position + new Vector3(1.5f, 1.5f, -1.6f), root.position + new Vector3(0, 0.6f, 0.8f), Layers.TvCameraMask);
        }

        // ------------------------------------------------------------------ chapter 4+: the apartment has changed
        void ChangedApartment()
        {
            _sofa.transform.localRotation = Quaternion.Euler(0, 180f, 0);
            _sofa.transform.localPosition = new Vector3(-3.4f, 0f, 3.4f);
            foreach (var l in new[] { _livingLight, _kitchenLight, _bedLight, _hall1, _hall2 })
            {
                l.Light.color = Color.Lerp(l.Light.color, ColdLight, 0.5f);
                l.BaseIntensity *= 0.75f;
            }
            var rng = new System.Random(4);
            for (int i = 0; i < 7; i++)
            {
                var c = new PixelCanvas(128, 96, new Color(0.92f, 0.9f, 0.84f));
                Color crayon = i % 2 == 0 ? new Color(0.2f, 0.3f, 0.7f) : new Color(0.35f, 0.35f, 0.38f);
                for (int k = 0; k < 3; k++) { float x = 25 + k * 38; c.Line(x, 35, x, 75, 4, crayon); c.Disc(x, 28, 7, crayon); }
                if (i % 3 == 0) c.Text(10, 82, "LOOK", 1, new Color(0.7f, 0.15f, 0.1f), true);
                float z = 1.5f + i * 1.15f;
                bool west = i % 2 == 0;
                Panel("Drawing", new Vector3(west ? -0.685f : 0.685f, 1.2f + (float)rng.NextDouble() * 0.6f, z), new Vector2(0.3f, 0.22f), west ? Vector3.right : Vector3.left, Materials.NewLit(Color.white, c.ToTexture(), 0.05f));
            }
            _tv.SetStatic();
        }
    }
}
