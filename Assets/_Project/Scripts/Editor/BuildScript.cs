using System.Linq;
using UnityEditor;
using UnityEditor.Build.Reporting;
using UnityEngine;

namespace Unseen.EditorTools
{
    /// <summary>
    /// Windows standalone build. From the menu, or headless:
    ///   Unity -batchmode -quit -projectPath . -executeMethod Unseen.EditorTools.BuildScript.BuildWindows
    /// Output: Builds/Windows/TheUnseen.exe
    /// </summary>
    public static class BuildScript
    {
        public const string Output = "Builds/Windows/TheUnseen.exe";

        [MenuItem("The Unseen/Build Windows (x64)")]
        public static void BuildWindows()
        {
            ProjectSetup.EnsureSetup(true);
            var options = new BuildPlayerOptions
            {
                scenes = EditorBuildSettings.scenes.Where(s => s.enabled).Select(s => s.path).ToArray(),
                locationPathName = Output,
                target = BuildTarget.StandaloneWindows64,
                options = BuildOptions.None,
            };
            var report = BuildPipeline.BuildPlayer(options);
            bool ok = report.summary.result == BuildResult.Succeeded;
            Debug.Log($"[The Unseen] Build {report.summary.result}: {Output} ({report.summary.totalSize / (1024 * 1024)} MB, {report.summary.totalErrors} errors)");
            if (Application.isBatchMode) EditorApplication.Exit(ok ? 0 : 1);
        }
    }
}
