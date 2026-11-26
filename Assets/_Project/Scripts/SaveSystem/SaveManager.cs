using System;
using System.IO;
using UnityEngine;

namespace Unseen
{
    /// <summary>
    /// Writes the save atomically (temp file, then replace) and keeps the previous save as a backup.
    /// A corrupted or unknown-version file never crashes the game: Load falls back to the backup, then to null.
    /// </summary>
    public class SaveManager
    {
        public string Folder { get; }
        public string MainPath => Path.Combine(Folder, "save.json");
        public string BackupPath => Path.Combine(Folder, "save.bak");
        public string PhotoFolder => Path.Combine(Folder, "photos");

        public SaveManager(string folder) { Folder = folder; }

        public bool HasSave => File.Exists(MainPath) || File.Exists(BackupPath);

        public static string Serialize(SaveData d) => JsonUtility.ToJson(d, true);

        public static SaveData Parse(string json)
        {
            if (string.IsNullOrWhiteSpace(json)) return null;
            try
            {
                var d = JsonUtility.FromJson<SaveData>(json);
                return d != null && d.Validate() ? d : null;
            }
            catch (Exception e)
            {
                Debug.LogWarning("Save data could not be parsed: " + e.Message);
                return null;
            }
        }

        public static SaveData Clone(SaveData d) => Parse(Serialize(d));

        public bool Write(SaveData d)
        {
            try
            {
                Directory.CreateDirectory(Folder);
                d.version = SaveData.CurrentVersion;
                d.savedAt = DateTime.Now.ToString("yyyy-MM-dd HH:mm");
                string tmp = MainPath + ".tmp";
                File.WriteAllText(tmp, Serialize(d));
                if (File.Exists(MainPath)) File.Copy(MainPath, BackupPath, true);
                File.Copy(tmp, MainPath, true);
                File.Delete(tmp);
                return true;
            }
            catch (Exception e)
            {
                Debug.LogError("Saving failed: " + e.Message);
                return false;
            }
        }

        /// <summary>Returns the newest valid save, or null. Sets WasCorrupted if a file existed but was unusable.</summary>
        public SaveData Load()
        {
            WasCorrupted = false;
            foreach (var path in new[] { MainPath, BackupPath })
            {
                if (!File.Exists(path)) continue;
                string json = null;
                try { json = File.ReadAllText(path); }
                catch (Exception e) { Debug.LogWarning("Could not read " + path + ": " + e.Message); }
                var d = Parse(json);
                if (d != null) return d;
                WasCorrupted = true;
            }
            return null;
        }

        public bool WasCorrupted { get; private set; }

        public void DeleteAll()
        {
            try
            {
                if (File.Exists(MainPath)) File.Delete(MainPath);
                if (File.Exists(BackupPath)) File.Delete(BackupPath);
                if (Directory.Exists(PhotoFolder)) Directory.Delete(PhotoFolder, true);
            }
            catch (Exception e) { Debug.LogWarning("Could not clear save: " + e.Message); }
        }
    }
}
