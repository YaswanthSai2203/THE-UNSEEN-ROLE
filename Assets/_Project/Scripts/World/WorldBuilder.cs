using System;
using System.Collections.Generic;
using UnityEngine;

namespace Unseen
{
    /// <summary>
    /// Base for the procedural level builders. Provides a small construction kit (boxes, walls with openings,
    /// lights, doors, notes) and the spawn points. Builders configure everything from the saved story flags,
    /// so loading a save just means rebuilding the world.
    /// </summary>
    public abstract class WorldBuilder : MonoBehaviour
    {
        public const float WallThickness = 0.12f;
        protected readonly Dictionary<string, Pose> Spawns = new Dictionary<string, Pose>();
        protected float CeilingHeight = 2.7f;

        protected GameManager G => GameManager.I;
        protected StoryManager Story => GameManager.I.Story;
        protected bool Has(string flag) => GameManager.I.Story.Has(flag);
        protected int Chapter => GameManager.I.Story.Chapter;

        public virtual bool HasPlayer => true;
        public abstract void Build();
        public virtual void OnEntered() { }
        public virtual void OnBlackout() { }

        public Pose GetSpawn(string id) => id != null && Spawns.TryGetValue(id, out var p) ? p : Spawns["default"];

        protected void Spawn(string id, Vector3 pos, float yaw) => Spawns[id] = new Pose(pos, Quaternion.Euler(0, yaw, 0));

        // ---------------------------------------------------------------- primitives
        public GameObject Box(string name, Vector3 center, Vector3 size, string mat, Transform parent = null, bool collide = true, float yaw = 0f)
        {
            var go = new GameObject(name);
            go.transform.SetParent(parent != null ? parent : transform, false);
            go.transform.localPosition = center;
            go.transform.localRotation = Quaternion.Euler(0, yaw, 0);
            go.AddComponent<MeshFilter>().sharedMesh = MeshKit.Box(size);
            go.AddComponent<MeshRenderer>().sharedMaterial = Materials.Get(mat);
            if (collide) go.AddComponent<BoxCollider>().size = size;
            return go;
        }

        public GameObject Prim(PrimitiveType type, string name, Vector3 center, Vector3 scale, string mat, Transform parent = null, bool collide = true, Vector3? euler = null)
        {
            var go = GameObject.CreatePrimitive(type);
            go.name = name;
            go.transform.SetParent(parent != null ? parent : transform, false);
            go.transform.localPosition = center;
            go.transform.localScale = scale;
            if (euler.HasValue) go.transform.localRotation = Quaternion.Euler(euler.Value);
            go.GetComponent<Renderer>().sharedMaterial = Materials.Get(mat);
            if (!collide) Destroy(go.GetComponent<Collider>());
            return go;
        }

        /// <summary>A flat textured panel (decal, picture, writing). Faces along +normal.</summary>
        public GameObject Panel(string name, Vector3 center, Vector2 size, Vector3 normal, Material mat, Transform parent = null, int layer = Layers.Default)
        {
            var go = GameObject.CreatePrimitive(PrimitiveType.Quad);
            go.name = name;
            Destroy(go.GetComponent<Collider>());
            go.layer = layer;
            go.transform.SetParent(parent != null ? parent : transform, false);
            go.transform.localPosition = center;
            go.transform.localRotation = Quaternion.LookRotation(-normal, Vector3.up);
            go.transform.localScale = new Vector3(size.x, size.y, 1f);
            go.GetComponent<Renderer>().sharedMaterial = mat;
            return go;
        }

        public struct Gap
        {
            public float Center, Width, Height, Bottom;
            public Gap(float center, float width, float height = 2.1f, float bottom = 0f) { Center = center; Width = width; Height = height; Bottom = bottom; }
        }

        /// <summary>
        /// A wall along X at the given z, from x0 to x1, with door/arch openings. Each side gets its own
        /// finish (matNeg faces -z, matPos faces +z) so neighbouring rooms keep their own wallpaper.
        /// </summary>
        public void WallX(float z, float x0, float x1, string matNeg, string matPos, params Gap[] gaps)
            => Wall(true, z, x0, x1, matNeg, matPos, gaps);

        /// <summary>A wall along Z at the given x (matNeg faces -x, matPos faces +x).</summary>
        public void WallZ(float x, float z0, float z1, string matNeg, string matPos, params Gap[] gaps)
            => Wall(false, x, z0, z1, matNeg, matPos, gaps);

        void Wall(bool alongX, float at, float a0, float a1, string matNeg, string matPos, Gap[] gaps)
        {
            var list = new List<Gap>(gaps);
            list.Sort((p, q) => p.Center.CompareTo(q.Center));
            float cursor = a0;
            foreach (var g in list)
            {
                float g0 = g.Center - g.Width / 2f, g1 = g.Center + g.Width / 2f;
                if (g0 > cursor) WallSegment(alongX, at, cursor, g0, 0f, CeilingHeight, matNeg, matPos);
                if (g.Bottom > 0f) WallSegment(alongX, at, g0, g1, 0f, g.Bottom, matNeg, matPos);
                WallSegment(alongX, at, g0, g1, g.Height, CeilingHeight, matNeg, matPos);
                cursor = g1;
            }
            if (cursor < a1) WallSegment(alongX, at, cursor, a1, 0f, CeilingHeight, matNeg, matPos);
        }

        void WallSegment(bool alongX, float at, float a0, float a1, float y0, float y1, string matNeg, string matPos)
        {
            float len = a1 - a0, h = y1 - y0, mid = (a0 + a1) / 2f, half = WallThickness / 4f;
            if (len <= 0.001f || h <= 0.001f) return;
            if (alongX)
            {
                Box("Wall", new Vector3(mid, y0 + h / 2f, at - half), new Vector3(len, h, WallThickness / 2f), matNeg);
                Box("Wall", new Vector3(mid, y0 + h / 2f, at + half), new Vector3(len, h, WallThickness / 2f), matPos);
                if (y0 <= 0f) Box("Skirting", new Vector3(mid, 0.05f, at), new Vector3(len, 0.1f, WallThickness + 0.03f), "wood_painted", null, false);
            }
            else
            {
                Box("Wall", new Vector3(at - half, y0 + h / 2f, mid), new Vector3(WallThickness / 2f, h, len), matNeg);
                Box("Wall", new Vector3(at + half, y0 + h / 2f, mid), new Vector3(WallThickness / 2f, h, len), matPos);
                if (y0 <= 0f) Box("Skirting", new Vector3(at, 0.05f, mid), new Vector3(WallThickness + 0.03f, 0.1f, len), "wood_painted", null, false);
            }
        }

        /// <summary>Floor and ceiling slabs for a rectangular room.</summary>
        public void Room(string name, float x0, float z0, float x1, float z1, string floorMat, string ceilingMat = "ceiling")
        {
            Box("Floor_" + name, new Vector3((x0 + x1) / 2f, -0.05f, (z0 + z1) / 2f), new Vector3(x1 - x0, 0.1f, z1 - z0), floorMat);
            Box("Ceiling_" + name, new Vector3((x0 + x1) / 2f, CeilingHeight + 0.05f, (z0 + z1) / 2f), new Vector3(x1 - x0, 0.1f, z1 - z0), ceilingMat);
        }

        // ---------------------------------------------------------------- lights
        public RoomLight CeilingLight(string name, Vector3 pos, Color color, float intensity, float range, bool shadows = true, Func<bool> power = null, bool bare = false)
        {
            var root = new GameObject(name).transform;
            root.SetParent(transform, false);
            root.localPosition = pos;
            Renderer bulb;
            if (bare)
            {
                Prim(PrimitiveType.Cylinder, "Cord", new Vector3(0, 0.2f, 0), new Vector3(0.01f, 0.2f, 0.01f), "black", root, false);
                bulb = Prim(PrimitiveType.Sphere, "Bulb", Vector3.zero, Vector3.one * 0.09f, "bulb", root, false).GetComponent<Renderer>();
            }
            else
            {
                Prim(PrimitiveType.Cylinder, "Fixture", new Vector3(0, 0.12f, 0), new Vector3(0.1f, 0.02f, 0.1f), "metal", root, false);
                bulb = Prim(PrimitiveType.Sphere, "Globe", Vector3.zero, new Vector3(0.28f, 0.2f, 0.28f), "bulb", root, false).GetComponent<Renderer>();
            }
            var l = new GameObject("Light").AddComponent<Light>();
            l.transform.SetParent(root, false);
            l.transform.localPosition = new Vector3(0, -0.15f, 0);
            l.type = LightType.Point;
            l.color = color;
            l.range = range;
            l.intensity = intensity;
            l.shadows = shadows ? LightShadows.Soft : LightShadows.None;
            l.shadowStrength = 0.85f;
            var rl = root.gameObject.AddComponent<RoomLight>();
            rl.Light = l;
            rl.Bulb = bulb;
            rl.BaseIntensity = intensity;
            rl.HasPower = power;
            return rl;
        }

        public static readonly Color Tungsten = new Color(1f, 0.78f, 0.52f);
        public static readonly Color ColdLight = new Color(0.75f, 0.85f, 1f);

        public GameObject LightSwitch(Vector3 pos, Vector3 normal, Func<bool> power, params RoomLight[] lights)
        {
            var plate = Box("LightSwitch", pos, new Vector3(0.08f, 0.12f, 0.02f), "plastic_beige", null, true, Quaternion.LookRotation(normal).eulerAngles.y);
            var it = Interactable.Add(plate, "Switch light", () =>
            {
                G.Audio.PlayAt(Snd.Switch, pos, 0.6f);
                if (power != null && !power()) { GameEvents.Notify("Nothing happens. There's no power."); return; }
                bool on = !lights[0].On;
                foreach (var l in lights) l.On = on;
            });
            it.PromptFunc = () => lights[0].On ? "Switch light off" : "Switch light on";
            it.MaxDistance = 2f;
            return plate;
        }

        // ---------------------------------------------------------------- doors and props
        /// <summary>
        /// A door whose hinge sits at hingePos. The closed leaf extends from the hinge along local +x
        /// (rotated by yaw). Positive open angles swing towards local -z.
        /// </summary>
        public Door MakeDoor(string label, Vector3 hingePos, float yaw, float width, string mat, float openAngle = 95f, float height = 2.05f)
        {
            var hinge = new GameObject("Door_" + label).transform;
            hinge.SetParent(transform, false);
            hinge.localPosition = hingePos;
            var pivotParent = new GameObject("DoorFrame_" + label).transform;
            pivotParent.SetParent(transform, false);
            pivotParent.localPosition = hingePos;
            pivotParent.localRotation = Quaternion.Euler(0, yaw, 0);
            hinge.SetParent(pivotParent, true);
            hinge.localPosition = Vector3.zero;
            hinge.localRotation = Quaternion.identity;
            var leaf = Box("Leaf", new Vector3(width / 2f, height / 2f, 0), new Vector3(width - 0.02f, height, 0.045f), mat, hinge);
            float knobY = Mathf.Min(1.0f, height * 0.5f) - height / 2f; // leaf is centred vertically
            Prim(PrimitiveType.Sphere, "Knob", new Vector3(width / 2f - 0.09f, knobY, 0.04f), Vector3.one * 0.055f, "brass", leaf.transform, false);
            Prim(PrimitiveType.Sphere, "Knob2", new Vector3(width / 2f - 0.09f, knobY, -0.04f), Vector3.one * 0.055f, "brass", leaf.transform, false);
            var door = hinge.gameObject.AddComponent<Door>();
            door.OpenAngle = openAngle;
            door.Init(leaf, label);
            door.enabled = false;
            return door;
        }

        public Interactable Note(string name, Vector3 pos, Vector3 size, string docId, string mat = "paper", float yaw = 0f, Action onRead = null)
        {
            var go = Box(name, pos, size, mat, null, true, yaw);
            var it = Interactable.Add(go, "Read", () => { G.Inventory.Read(docId); onRead?.Invoke(); });
            return it;
        }

        public void Thought(string text) => G.Dialogue.Thought(text);

        /// <summary>A small set of dust motes drifting in a lit area.</summary>
        public void Dust(Vector3 center, Vector3 size)
        {
            var go = new GameObject("Dust");
            go.transform.SetParent(transform, false);
            go.transform.localPosition = center;
            var ps = go.AddComponent<ParticleSystem>();
            var main = ps.main;
            main.startLifetime = 12f;
            main.startSpeed = 0.01f;
            main.startSize = new ParticleSystem.MinMaxCurve(0.004f, 0.01f);
            main.maxParticles = 120;
            main.startColor = new Color(0.8f, 0.75f, 0.65f, 0.35f);
            main.simulationSpace = ParticleSystemSimulationSpace.World;
            var em = ps.emission;
            em.rateOverTime = 8f;
            var shape = ps.shape;
            shape.shapeType = ParticleSystemShapeType.Box;
            shape.scale = size;
            var noise = ps.noise;
            noise.enabled = true;
            noise.strength = 0.03f;
            noise.frequency = 0.2f;
            var r = go.GetComponent<ParticleSystemRenderer>();
            r.sharedMaterial = Materials.Get("dust");
            ps.Play();
        }

        protected void SetupAtmosphere(Color ambient, Color fog, float fogDensity)
        {
            RenderSettings.ambientMode = UnityEngine.Rendering.AmbientMode.Flat;
            RenderSettings.ambientLight = ambient;
            RenderSettings.fog = true;
            RenderSettings.fogMode = FogMode.ExponentialSquared;
            RenderSettings.fogColor = fog;
            RenderSettings.fogDensity = fogDensity;
            RenderSettings.skybox = null;
        }

        /// <summary>A tall, thin, faceless silhouette. Restrained: never a monster, just a shape that shouldn't be there.</summary>
        public GameObject Figure(string name, Vector3 pos, float yaw, int layer, float height = 1.95f, Transform parent = null)
        {
            var root = new GameObject(name);
            root.transform.SetParent(parent != null ? parent : transform, false);
            root.transform.localPosition = pos;
            root.transform.localRotation = Quaternion.Euler(0, yaw, 0);
            float k = height / 1.95f;
            void Part(PrimitiveType t, Vector3 p, Vector3 s)
            {
                var g = Prim(t, "Part", p * k, s * k, "figure", root.transform, false);
                g.layer = layer;
            }
            Part(PrimitiveType.Capsule, new Vector3(0, 1.2f, 0), new Vector3(0.36f, 0.45f, 0.22f));
            Part(PrimitiveType.Capsule, new Vector3(-0.09f, 0.45f, 0), new Vector3(0.12f, 0.48f, 0.12f));
            Part(PrimitiveType.Capsule, new Vector3(0.09f, 0.45f, 0), new Vector3(0.12f, 0.48f, 0.12f));
            Part(PrimitiveType.Capsule, new Vector3(-0.22f, 1.05f, 0), new Vector3(0.08f, 0.48f, 0.08f));
            Part(PrimitiveType.Capsule, new Vector3(0.22f, 1.05f, 0), new Vector3(0.08f, 0.48f, 0.08f));
            Part(PrimitiveType.Sphere, new Vector3(0, 1.78f, 0.02f), new Vector3(0.2f, 0.27f, 0.22f));
            root.layer = layer;
            return root;
        }
    }
}
