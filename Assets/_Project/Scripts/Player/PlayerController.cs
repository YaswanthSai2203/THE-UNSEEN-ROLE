using UnityEngine;

namespace Unseen
{
    /// <summary>Grounded first-person movement: walk, faster walk, crouch, gravity, head bob, footsteps.</summary>
    [RequireComponent(typeof(CharacterController))]
    public class PlayerController : MonoBehaviour
    {
        public const float StandHeight = 1.75f, CrouchHeight = 1.1f, Radius = 0.28f;
        public const float WalkSpeed = 1.7f, FastSpeed = 2.9f, CrouchSpeed = 0.9f;

        public Camera Cam { get; private set; }
        public CharacterController CC { get; private set; }
        public EyeClosureController Eyes { get; private set; }
        public PlayerInteraction Interaction { get; private set; }
        public CameraController PhotoCamera { get; private set; }
        public Light Flashlight { get; private set; }
        public Transform Body { get; private set; }

        public float Yaw => _yaw;
        public float Pitch => _pitch;
        public bool IsGrounded => CC.isGrounded;
        public bool Crouching { get; private set; }
        public Vector3 Velocity => _velocity;

        Transform _head;
        float _yaw, _pitch, _vy, _height = StandHeight, _bob, _stepDist, _shake, _shakeTime;
        Vector3 _velocity;

        public static PlayerController Create(Vector3 position, float yaw, Transform parent)
        {
            var go = new GameObject("Player");
            go.layer = Layers.Player;
            go.transform.SetParent(parent);
            go.transform.position = position;
            var cc = go.AddComponent<CharacterController>();
            cc.height = StandHeight;
            cc.radius = Radius;
            cc.center = new Vector3(0, StandHeight / 2f, 0);
            cc.stepOffset = 0.3f;
            cc.slopeLimit = 50f;
            cc.skinWidth = 0.03f;

            var head = new GameObject("Head").transform;
            head.SetParent(go.transform, false);
            head.localPosition = new Vector3(0, StandHeight - 0.13f, 0);
            var cam = head.gameObject.AddComponent<Camera>();
            cam.nearClipPlane = 0.03f;
            cam.clearFlags = CameraClearFlags.SolidColor;
            cam.backgroundColor = Color.black;
            cam.farClipPlane = 60f;
            cam.cullingMask = Layers.MainCameraMask;
            cam.tag = "MainCamera";
            head.gameObject.AddComponent<AudioListener>();

            var flash = new GameObject("Flashlight").AddComponent<Light>();
            flash.transform.SetParent(head, false);
            flash.transform.localPosition = new Vector3(0.18f, -0.15f, 0.1f);
            flash.type = LightType.Spot;
            flash.spotAngle = 52f;
            flash.innerSpotAngle = 22f;
            flash.range = 11f;
            flash.intensity = 2.2f;
            flash.color = new Color(1f, 0.93f, 0.8f);
            flash.shadows = LightShadows.Soft;
            flash.enabled = false;

            var p = go.AddComponent<PlayerController>();
            p.Cam = cam;
            p._head = head;
            p.CC = cc;
            p.Flashlight = flash;
            p._yaw = yaw;
            p.Eyes = go.AddComponent<EyeClosureController>();
            p.Interaction = go.AddComponent<PlayerInteraction>();
            p.PhotoCamera = go.AddComponent<CameraController>();
            p.Body = CreateReflectionBody(go.transform);
            go.transform.rotation = Quaternion.Euler(0, yaw, 0);
            return p;
        }

        /// <summary>The body is only drawn by mirror and TV cameras (first-person view never sees it).</summary>
        static Transform CreateReflectionBody(Transform parent)
        {
            var root = new GameObject("ReflectionBody").transform;
            root.SetParent(parent, false);
            var mat = Materials.Get("clothes");
            var skin = Materials.Get("skin");
            void Part(PrimitiveType t, Vector3 pos, Vector3 scale, Material m)
            {
                var g = GameObject.CreatePrimitive(t);
                Object.Destroy(g.GetComponent<Collider>());
                g.layer = Layers.ReflectionOnly;
                g.transform.SetParent(root, false);
                g.transform.localPosition = pos;
                g.transform.localScale = scale;
                g.GetComponent<Renderer>().sharedMaterial = m;
            }
            Part(PrimitiveType.Capsule, new Vector3(0, 1.15f, 0), new Vector3(0.42f, 0.38f, 0.26f), mat);
            Part(PrimitiveType.Capsule, new Vector3(-0.11f, 0.45f, 0), new Vector3(0.16f, 0.45f, 0.16f), Materials.Get("trousers"));
            Part(PrimitiveType.Capsule, new Vector3(0.11f, 0.45f, 0), new Vector3(0.16f, 0.45f, 0.16f), Materials.Get("trousers"));
            Part(PrimitiveType.Capsule, new Vector3(-0.27f, 1.12f, 0), new Vector3(0.11f, 0.33f, 0.11f), mat);
            Part(PrimitiveType.Capsule, new Vector3(0.27f, 1.12f, 0), new Vector3(0.11f, 0.33f, 0.11f), mat);
            Part(PrimitiveType.Sphere, new Vector3(0, 1.62f, 0), new Vector3(0.21f, 0.25f, 0.23f), skin);
            Part(PrimitiveType.Sphere, new Vector3(0, 1.69f, -0.02f), new Vector3(0.22f, 0.14f, 0.23f), Materials.Get("hair"));
            return root;
        }

        public void Teleport(Vector3 position, float yaw)
        {
            CC.enabled = false;
            transform.position = position;
            CC.enabled = true;
            _yaw = yaw;
            _pitch = 0f;
            _vy = 0f;
            Physics.SyncTransforms();
        }

        /// <summary>Small camera shake, respecting the accessibility settings.</summary>
        public void Shake(float amount, float duration)
        {
            if (!GameManager.I.Settings.ShakeAllowed) return;
            _shake = Mathf.Max(_shake, amount);
            _shakeTime = Mathf.Max(_shakeTime, duration);
        }

        /// <summary>Turns the view towards a point (used by scripted beats).</summary>
        public void LookAt(Vector3 point)
        {
            Vector3 d = point - Cam.transform.position;
            _yaw = Mathf.Atan2(d.x, d.z) * Mathf.Rad2Deg;
            _pitch = -Mathf.Asin(Mathf.Clamp(d.normalized.y, -1f, 1f)) * Mathf.Rad2Deg;
        }

        void Update()
        {
            var gm = GameManager.I;
            var s = gm.Settings;
            bool locked = gm.InputLocked;
            float dt = Time.deltaTime;
            Cam.fieldOfView = s.fieldOfView;

            if (!locked)
            {
                float mx = Input.GetAxisRaw("Mouse X"), my = Input.GetAxisRaw("Mouse Y");
                _yaw += mx * s.mouseSensitivity;
                _pitch += (s.invertY ? my : -my) * s.mouseSensitivity;
                _pitch = Mathf.Clamp(_pitch, -85f, 85f);
                if (s.Down(InputAction.Crouch)) ToggleCrouch();
                if (s.Down(InputAction.Flashlight))
                {
                    if (gm.Inventory.Has(Items.Flashlight))
                    {
                        Flashlight.enabled = !Flashlight.enabled;
                        gm.Audio.Play2D(Snd.Switch, 0.5f);
                    }
                    else GameEvents.Notify("You don't have a flashlight.");
                }
            }

            // Movement
            Vector3 input = Vector3.zero;
            if (!locked)
            {
                if (s.Held(InputAction.Forward)) input.z += 1;
                if (s.Held(InputAction.Back)) input.z -= 1;
                if (s.Held(InputAction.Right)) input.x += 1;
                if (s.Held(InputAction.Left)) input.x -= 1;
            }
            input = Vector3.ClampMagnitude(input, 1f);
            float speed = Crouching ? CrouchSpeed : (!locked && s.Held(InputAction.Sprint) ? FastSpeed : WalkSpeed);
            if (Eyes.IsClosed) speed *= 0.45f;
            Quaternion yawRot = Quaternion.Euler(0, _yaw, 0);
            Vector3 target = yawRot * input * speed;
            float accel = CC.isGrounded ? 10f : 2f;
            _velocity = Vector3.MoveTowards(new Vector3(_velocity.x, 0, _velocity.z), target, accel * dt);
            if (CC.isGrounded && _vy < 0f) _vy = -1f;
            _vy += Physics.gravity.y * dt;
            CC.Move((_velocity + Vector3.up * _vy) * dt);

            // Crouch height smoothing
            float wanted = Crouching ? CrouchHeight : StandHeight;
            _height = Mathf.MoveTowards(_height, wanted, dt * 3f);
            CC.height = _height;
            CC.center = new Vector3(0, _height / 2f, 0);

            // Footsteps and head bob
            float planar = new Vector2(CC.velocity.x, CC.velocity.z).magnitude;
            if (CC.isGrounded && planar > 0.2f)
            {
                _stepDist += planar * dt;
                _bob += planar * dt * 4.2f;
                float stride = Crouching ? 0.55f : 0.75f;
                if (_stepDist > stride)
                {
                    _stepDist = 0f;
                    gm.Audio.PlayAt(Snd.Step, transform.position, Crouching ? 0.12f : 0.25f, Random.Range(0.85f, 1.1f));
                }
            }
            float bobAmount = s.BobAllowed ? 0.025f : 0f;
            Vector3 headPos = new Vector3(0, _height - 0.13f + Mathf.Sin(_bob * 2f) * bobAmount * Mathf.Clamp01(planar), 0);
            if (_shakeTime > 0f)
            {
                _shakeTime -= dt;
                headPos += Random.insideUnitSphere * _shake * Mathf.Clamp01(_shakeTime * 2f);
            }
            _head.localPosition = headPos;
            transform.rotation = yawRot;
            _head.localRotation = Quaternion.Euler(_pitch, 0, 0);
        }

        void ToggleCrouch()
        {
            if (!Crouching) { Crouching = true; return; }
            // Only stand if there is headroom.
            Vector3 bottom = transform.position + Vector3.up * (Radius + 0.05f);
            Vector3 top = transform.position + Vector3.up * (StandHeight - Radius);
            int mask = Layers.OccluderMask;
            if (!Physics.CheckCapsule(bottom + Vector3.up * 0.5f, top, Radius * 0.9f, mask, QueryTriggerInteraction.Ignore))
                Crouching = false;
        }
    }
}
