using System.IO;
using UnityEditor;
using UnityEditor.SceneManagement;
using UnityEngine;
using UnityEngine.Rendering;
#if !UNSEEN_NO_URP
using UnityEngine.Rendering.Universal;
#endif

namespace Unseen.EditorTools
{
    /// <summary>
    /// One-time project configuration, run automatically when the editor loads (and from the menu):
    /// creates the three scenes and build settings, enables the legacy input manager alongside the new one,
    /// makes sure a URP asset is assigned, keeps the shader variants the runtime materials need, and sets
    /// player settings. Safe to run repeatedly.
    /// </summary>
    [InitializeOnLoad]
    public static class ProjectSetup
    {
        public const string SceneFolder = "Assets/_Project/Scenes";
        public static readonly string[] Scenes = { "MainMenu", "Apartment", "Basement" };
        const string VariantFolder = "Assets/_Project/Resources/ShaderVariants";
        const string UrpFolder = "Assets/_Project/Art/Lighting";

        static ProjectSetup()
        {
            EditorApplication.delayCall += () =>
            {
                if (!EditorApplication.isPlayingOrWillChangePlaymode) EnsureSetup(false);
            };
        }

        [MenuItem("The Unseen/Run Project Setup")]
        public static void RunFromMenu() => EnsureSetup(true);

        public static void EnsureSetup(bool verbose)
        {
            bool restartNeeded = EnsureInputHandling();
            EnsureRenderPipeline();
            EnsureScenes();
            EnsureShaderVariants();
            EnsurePlayerSettings();
            AssetDatabase.SaveAssets();
            if (verbose) Debug.Log("[The Unseen] Project setup complete.");
            if (restartNeeded && !Application.isBatchMode)
                EditorUtility.DisplayDialog("The Unseen", "Active Input Handling was set to 'Both' (the game uses the classic Input Manager). Please restart the editor.", "OK");
        }

        /// <summary>The game reads UnityEngine.Input; Unity 6 templates default to the new Input System only.</summary>
        static bool EnsureInputHandling()
        {
            var assets = AssetDatabase.LoadAllAssetsAtPath("ProjectSettings/ProjectSettings.asset");
            if (assets == null || assets.Length == 0) return false;
            var so = new SerializedObject(assets[0]);
            var p = so.FindProperty("activeInputHandler");
            if (p == null || p.intValue != 1) return false; // 0 = old, 1 = new only, 2 = both
            p.intValue = 2;
            so.ApplyModifiedProperties();
            return true;
        }

        static void EnsureRenderPipeline()
        {
#if !UNSEEN_NO_URP
            if (GraphicsSettings.defaultRenderPipeline != null) return;
            Directory.CreateDirectory(UrpFolder);
            var renderer = ScriptableObject.CreateInstance<UniversalRendererData>();
            foreach (var guid in AssetDatabase.FindAssets("t:PostProcessData"))
            {
                var ppd = AssetDatabase.LoadAssetAtPath<PostProcessData>(AssetDatabase.GUIDToAssetPath(guid));
                if (ppd != null) { renderer.postProcessData = ppd; break; }
            }
            AssetDatabase.CreateAsset(renderer, UrpFolder + "/UnseenRenderer.asset");
            var asset = UniversalRenderPipelineAsset.Create(renderer);
            AssetDatabase.CreateAsset(asset, UrpFolder + "/UnseenURP.asset");
            var so = new SerializedObject(asset);
            SetInt(so, "m_AdditionalLightsRenderingMode", 1);   // per pixel
            SetInt(so, "m_AdditionalLightsPerObjectLimit", 8);
            SetBool(so, "m_AdditionalLightShadowsSupported", true);
            SetInt(so, "m_AdditionalLightsShadowmapResolution", 2048);
            SetBool(so, "m_SupportsHDR", true);
            SetFloat(so, "m_ShadowDistance", 25f);
            so.ApplyModifiedProperties();
            GraphicsSettings.defaultRenderPipeline = asset;
            for (int i = 0; i < QualitySettings.names.Length; i++)
            {
                QualitySettings.SetQualityLevel(i, false);
                QualitySettings.renderPipeline = asset;
            }
#endif
        }

        static void SetInt(SerializedObject so, string name, int v) { var p = so.FindProperty(name); if (p != null) p.intValue = v; }
        static void SetBool(SerializedObject so, string name, bool v) { var p = so.FindProperty(name); if (p != null) p.boolValue = v; }
        static void SetFloat(SerializedObject so, string name, float v) { var p = so.FindProperty(name); if (p != null) p.floatValue = v; }

        /// <summary>The scenes are intentionally empty: GameManager builds each world in code at runtime.</summary>
        static void EnsureScenes()
        {
            Directory.CreateDirectory(SceneFolder);
            var list = new EditorBuildSettingsScene[Scenes.Length];
            for (int i = 0; i < Scenes.Length; i++)
            {
                string path = $"{SceneFolder}/{Scenes[i]}.unity";
                if (!File.Exists(path))
                {
                    var scene = EditorSceneManager.NewScene(NewSceneSetup.EmptyScene, NewSceneMode.Additive);
                    EditorSceneManager.SaveScene(scene, path);
                    EditorSceneManager.CloseScene(scene, true);
                }
                list[i] = new EditorBuildSettingsScene(path, true);
            }
            EditorBuildSettings.scenes = list;
        }

        /// <summary>
        /// Runtime-created materials use shader keywords (emission, alpha clip). Materials in Resources are
        /// always built, so these keep the needed shader variants from being stripped.
        /// </summary>
        static void EnsureShaderVariants()
        {
            Directory.CreateDirectory(VariantFolder);
            MakeVariant("Lit", "Universal Render Pipeline/Lit", null);
            MakeVariant("LitEmission", "Universal Render Pipeline/Lit", "_EMISSION");
            MakeVariant("LitAlphaClip", "Universal Render Pipeline/Lit", "_ALPHATEST_ON");
            MakeVariant("Unlit", "Universal Render Pipeline/Unlit", null);
            MakeVariant("UnlitAlphaClip", "Universal Render Pipeline/Unlit", "_ALPHATEST_ON");
        }

        static void MakeVariant(string name, string shaderName, string keyword)
        {
            string path = $"{VariantFolder}/{name}.mat";
            if (File.Exists(path)) return;
            var shader = Shader.Find(shaderName);
            if (shader == null) { Debug.LogWarning("[The Unseen] Shader not found: " + shaderName); return; }
            var m = new Material(shader);
            if (keyword != null)
            {
                m.EnableKeyword(keyword);
                if (keyword == "_ALPHATEST_ON") m.SetFloat("_AlphaClip", 1f);
                if (keyword == "_EMISSION") m.SetColor("_EmissionColor", Color.white);
            }
            AssetDatabase.CreateAsset(m, path);
        }

        static void EnsurePlayerSettings()
        {
            PlayerSettings.companyName = "The Unseen";
            PlayerSettings.productName = "The Unseen";
            PlayerSettings.defaultScreenWidth = 1920;
            PlayerSettings.defaultScreenHeight = 1080;
            PlayerSettings.fullScreenMode = FullScreenMode.FullScreenWindow;
            PlayerSettings.runInBackground = false;
            PlayerSettings.colorSpace = ColorSpace.Linear;
        }
    }
}
