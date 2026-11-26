using UnityEngine;

namespace Unseen
{
    /// <summary>Main menu backdrop: a dark apartment hallway with a failing bulb and something at the far end.</summary>
    public class MenuBuilder : WorldBuilder
    {
        public override bool HasPlayer => false;
        Camera _cam;
        RoomLight _bulb;
        GameObject _figure;
        float _figureTimer = 8f;

        public override void Build()
        {
            CeilingHeight = 2.6f;
            SetupAtmosphere(new Color(0.035f, 0.035f, 0.042f), new Color(0.01f, 0.01f, 0.012f), 0.07f);
            Room("Hall", -0.75f, 0f, 0.75f, 12f, "floor_wood");
            WallZ(-0.75f, 0f, 12f, "plaster", "wallpaper_hall", new Gap(4f, 0.9f, 2.05f), new Gap(8.5f, 0.9f, 2.05f));
            WallZ(0.75f, 0f, 12f, "wallpaper_hall", "plaster", new Gap(6f, 0.9f, 2.05f));
            WallX(12f, -0.75f, 0.75f, "wallpaper_hall", "plaster", new Gap(0f, 0.9f, 2.05f));
            WallX(0f, -0.75f, 0.75f, "plaster", "wallpaper_hall");
            MakeDoor("door", new Vector3(-0.75f, 0f, 4.45f), 90f, 0.9f, "door").SetAngleInstant(-20f);
            MakeDoor("door", new Vector3(0.75f, 0f, 5.55f), -90f, 0.9f, "door").SetAngleInstant(35f);
            MakeDoor("door", new Vector3(-0.45f, 0f, 12f), 0f, 0.9f, "door").SetAngleInstant(-25f);
            Box("Runner", new Vector3(0f, 0.005f, 6f), new Vector3(0.8f, 0.01f, 11f), "rug", null, false);
            Box("Console", new Vector3(0.55f, 0.4f, 3.0f), new Vector3(0.25f, 0.8f, 0.8f), "wood_dark");
            _bulb = CeilingLight("Bulb", new Vector3(0f, 2.35f, 7f), Tungsten, 0.9f, 6f, true, null, true);
            _bulb.AlwaysUnstable = true;
            CeilingLight("Bulb", new Vector3(0f, 2.35f, 1.5f), Tungsten, 0.35f, 3f, false, null, true);
            Dust(new Vector3(0, 1.4f, 5f), new Vector3(1.2f, 1.5f, 6f));
            _figure = Figure("Figure", new Vector3(0f, 0f, 12.6f), 180f, Layers.Default);
            _figure.SetActive(false);

            var go = new GameObject("MenuCamera");
            go.transform.SetParent(transform, false);
            _cam = go.AddComponent<Camera>();
            _cam.clearFlags = CameraClearFlags.SolidColor;
            _cam.backgroundColor = Color.black;
            _cam.fieldOfView = 60f;
            _cam.nearClipPlane = 0.05f;
            _cam.cullingMask = Layers.MainCameraMask;
            go.AddComponent<AudioListener>();
            G.Audio.CreateLoop(Snd.RoomTone, go.transform, Vector3.zero, 0.5f, AudioCat.Ambience, 5f);
            G.Audio.CreateLoop(Snd.Buzz, _bulb.transform, Vector3.zero, 0.15f, AudioCat.Ambience, 6f);
            G.Audio.CreateLoop(Snd.Tick, transform, new Vector3(-0.7f, 2f, 3f), 0.2f, AudioCat.Ambience, 6f);
            PostFX.Impl?.SetupCamera(_cam);
            Spawns["default"] = new Pose(Vector3.zero, Quaternion.identity);
        }

        void Update()
        {
            float t = Time.unscaledTime;
            _cam.transform.localPosition = new Vector3(Mathf.Sin(t * 0.13f) * 0.06f, 1.6f + Mathf.Sin(t * 0.21f) * 0.02f, 0.8f + Mathf.Sin(t * 0.05f) * 0.5f);
            _cam.transform.localRotation = Quaternion.Euler(2f + Mathf.Sin(t * 0.17f) * 0.6f, Mathf.Sin(t * 0.09f) * 1.5f, 0f);
            // Someone stands in the far doorway for a while, then isn't there. It changes only while the bulb is out.
            _figureTimer -= Time.unscaledDeltaTime;
            if (_figureTimer <= 0f)
            {
                _bulb.Flicker(0.5f);
                _figureTimer = Random.Range(12f, 25f);
                StartCoroutine(SwapFigure());
            }
        }

        System.Collections.IEnumerator SwapFigure()
        {
            yield return new WaitForSecondsRealtime(0.25f);
            _figure.SetActive(!_figure.activeSelf);
        }
    }
}
