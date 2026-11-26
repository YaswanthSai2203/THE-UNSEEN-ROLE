using UnityEngine;

namespace Unseen
{
    /// <summary>
    /// A real planar mirror without custom shaders: a camera at the reflected eye position renders through
    /// the mirror rectangle with an off-axis projection; the image is shown horizontally flipped.
    /// The player's body (ReflectionOnly layer) appears in it. Supports the "frozen reflection" anomaly.
    /// </summary>
    public class Mirror : MonoBehaviour
    {
        public float Width = 0.6f, Height = 0.8f;
        public bool Anomaly;           // reflection keeps its own pose when unobserved
        Camera _cam;
        RenderTexture _rt;
        Renderer _surface;
        Transform _frozenBody;

        /// <summary>The transform's forward must point out of the mirror, into the room.</summary>
        public void Init(float width, float height)
        {
            Width = width; Height = height;
            var quad = GameObject.CreatePrimitive(PrimitiveType.Quad);
            Destroy(quad.GetComponent<Collider>());
            quad.name = "MirrorSurface";
            quad.layer = Layers.IgnoreRaycast;
            quad.transform.SetParent(transform, false);
            quad.transform.localRotation = Quaternion.Euler(0, 180f, 0);
            quad.transform.localScale = new Vector3(width, height, 1f);
            int texH = 512, texW = Mathf.Clamp(Mathf.RoundToInt(512 * width / height), 128, 1024);
            _rt = new RenderTexture(texW, texH, 24);
            var mat = Materials.NewUnlit(new Color(0.82f, 0.86f, 0.86f), _rt);
            mat.mainTextureScale = new Vector2(-1f, 1f);
            mat.mainTextureOffset = new Vector2(1f, 0f);
            _surface = quad.GetComponent<Renderer>();
            _surface.sharedMaterial = mat;

            var camGo = new GameObject("MirrorCamera");
            camGo.transform.SetParent(transform, false);
            _cam = camGo.AddComponent<Camera>();
            _cam.cullingMask = Layers.MirrorCameraMask;
            _cam.clearFlags = CameraClearFlags.SolidColor;
            _cam.backgroundColor = Color.black;
            _cam.targetTexture = _rt;
            _cam.enabled = false;
        }

        void OnDestroy()
        {
            if (_rt != null) _rt.Release();
            if (_frozenBody != null) Destroy(_frozenBody.gameObject);
        }

        void LateUpdate()
        {
            var gm = GameManager.I;
            var player = gm.Player;
            if (player == null || _cam == null) return;
            Vector3 eye = player.Cam.transform.position;
            Vector3 n = transform.forward, c = transform.position;
            float side = Vector3.Dot(eye - c, n);
            bool visible = side > 0.05f && side < 7f && Vector3.Distance(eye, c) < 7f &&
                           ObservationMath.InViewCone(eye, player.Cam.transform.forward, player.Cam.transform.up, player.Cam.fieldOfView, player.Cam.aspect, c, 0.3f);
            _cam.enabled = visible;
            UpdateAnomaly(player, visible);
            if (!visible) return;

            Vector3 virtualEye = eye - 2f * side * n;
            _cam.transform.position = virtualEye;
            _cam.transform.rotation = Quaternion.LookRotation(n, Vector3.up);
            Vector3 right = _cam.transform.right, up = _cam.transform.up;
            Vector3 d = c - virtualEye;
            float near = Mathf.Max(0.02f, Vector3.Dot(d, n));
            float l = Vector3.Dot(d, right) - Width / 2f, r = l + Width;
            float b = Vector3.Dot(d, up) - Height / 2f, t = b + Height;
            float far = 25f;
            _cam.nearClipPlane = near;
            _cam.farClipPlane = far;
            // Low perception: the reflection drifts slightly out of true.
            float wobble = gm.Perception.Distortion > 0.6f ? Mathf.Sin(Time.time * 0.7f) * 0.03f * gm.Perception.Distortion : 0f;
            _cam.projectionMatrix = Matrix4x4.Frustum(l + wobble, r + wobble, b, t, near, far);
        }

        /// <summary>
        /// While the anomaly is active, the reflection is a separate copy of the body that only follows the
        /// player while the mirror is unobserved... and sometimes not even then.
        /// </summary>
        void UpdateAnomaly(PlayerController player, bool visible)
        {
            if (!Anomaly)
            {
                if (_frozenBody != null) { Destroy(_frozenBody.gameObject); player.Body.gameObject.SetActive(true); }
                return;
            }
            if (_frozenBody == null)
            {
                _frozenBody = Instantiate(player.Body.gameObject, player.Body.position, player.Body.rotation).transform;
                _frozenBody.name = "FrozenReflection";
                _frozenBody.SetParent(transform.parent, true);
            }
            player.Body.gameObject.SetActive(false);
            // It only catches up when you are not looking — and when it does, it faces the mirror, not you.
            if (!visible)
            {
                _frozenBody.position = player.Body.position;
                _frozenBody.rotation = Quaternion.LookRotation(-transform.forward, Vector3.up);
            }
        }

        public void EndAnomaly()
        {
            Anomaly = false;
        }
    }
}
