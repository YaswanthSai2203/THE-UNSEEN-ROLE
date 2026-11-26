using UnityEngine;

namespace Unseen
{
    /// <summary>
    /// The old television: off, static, live camera feeds (that can see the Unseen layer) or still cards.
    /// Its glow lights the room when it is on.
    /// </summary>
    public class Television : MonoBehaviour
    {
        public enum Mode { Off, Static, Feed, Card }

        public Mode Current { get; private set; } = Mode.Off;
        Renderer _screen;
        Material _mat;
        Light _glow;
        AudioSource _staticLoop;
        Camera _activeFeed;
        RenderTexture _rt; // created in Init: Unity objects can't be created in field initializers

        public void Init(Renderer screen, Light glow, AudioSource staticLoop)
        {
            _screen = screen;
            _rt = new RenderTexture(320, 240, 16);
            _mat = Materials.NewUnlit(Color.white);
            _screen.sharedMaterial = _mat;
            _glow = glow;
            _staticLoop = staticLoop;
            SetOff();
        }

        public Camera CreateFeedCamera(string name, Transform parent, Vector3 pos, Vector3 lookAt, int mask)
        {
            var cam = new GameObject(name).AddComponent<Camera>();
            cam.transform.SetParent(parent, false);
            cam.transform.position = pos;
            cam.transform.LookAt(lookAt);
            cam.cullingMask = mask;
            cam.clearFlags = CameraClearFlags.SolidColor;
            cam.backgroundColor = Color.black;
            cam.fieldOfView = 62f;
            cam.enabled = false;
            return cam;
        }

        void ClearFeed()
        {
            if (_activeFeed != null) { _activeFeed.targetTexture = null; _activeFeed.enabled = false; }
            _activeFeed = null;
        }

        public void SetOff()
        {
            ClearFeed();
            Current = Mode.Off;
            _mat.mainTexture = null;
            _mat.color = new Color(0.02f, 0.025f, 0.025f);
            if (_glow != null) _glow.enabled = false;
            if (_staticLoop != null) _staticLoop.Stop();
        }

        public void SetStatic()
        {
            ClearFeed();
            Current = Mode.Static;
            _mat.mainTexture = Materials.StaticNoise;
            _mat.color = new Color(0.8f, 0.82f, 0.85f);
            if (_glow != null) _glow.enabled = true;
            if (_staticLoop != null && !_staticLoop.isPlaying) _staticLoop.Play();
        }

        public void SetFeed(Camera feed)
        {
            ClearFeed();
            Current = Mode.Feed;
            _activeFeed = feed;
            feed.targetTexture = _rt;
            feed.enabled = true;
            _mat.mainTexture = _rt;
            _mat.mainTextureScale = Vector2.one;
            _mat.mainTextureOffset = Vector2.zero;
            _mat.color = new Color(0.75f, 0.85f, 0.8f);
            if (_glow != null) _glow.enabled = true;
            if (_staticLoop != null) _staticLoop.Stop();
        }

        public void SetCard(Texture tex)
        {
            ClearFeed();
            Current = Mode.Card;
            _mat.mainTexture = tex;
            _mat.mainTextureScale = Vector2.one;
            _mat.mainTextureOffset = Vector2.zero;
            _mat.color = new Color(0.85f, 0.85f, 0.8f);
            if (_glow != null) _glow.enabled = true;
            if (_staticLoop != null) _staticLoop.Stop();
        }

        void Update()
        {
            if (Current == Mode.Static)
            {
                _mat.mainTextureOffset = new Vector2(Random.value, Random.value);
                _mat.mainTextureScale = new Vector2(1.5f, 1.2f);
            }
            if (_glow != null && _glow.enabled)
                _glow.intensity = (Current == Mode.Static ? 0.6f : 0.45f) * (0.85f + Mathf.PerlinNoise(Time.time * 9f, 0f) * 0.3f);
        }

        void OnDestroy()
        {
            ClearFeed();
            if (_rt != null) _rt.Release();
        }
    }
}
