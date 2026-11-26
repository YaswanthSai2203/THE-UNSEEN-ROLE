using System;
using UnityEngine;

namespace Unseen
{
    /// <summary>Versioned save file. Transient things (entity positions, effects) are deliberately not stored.</summary>
    [Serializable]
    public class SaveData
    {
        public const int CurrentVersion = 1;

        public int version = CurrentVersion;
        public string scene = SceneNames.Apartment;
        public bool hasPosition;
        public Vector3 position;
        public float yaw;
        public float perception = PerceptionModel.Max;
        public StoryState story = new StoryState();
        public InventoryState inventory = new InventoryState();
        public int ending;            // 0 = none, otherwise Ending id reached from this save
        public string savedAt = "";

        /// <summary>Repairs or rejects data. Returns false if the data is unusable.</summary>
        public bool Validate()
        {
            if (version <= 0 || version > CurrentVersion) return false;
            if (story == null) story = new StoryState();
            if (inventory == null) inventory = new InventoryState();
            story.Sanitize();
            inventory.Sanitize();
            if (scene != SceneNames.Apartment && scene != SceneNames.Basement) scene = SceneNames.Apartment;
            if (float.IsNaN(perception)) perception = PerceptionModel.Max;
            perception = Mathf.Clamp(perception, 0f, PerceptionModel.Max);
            if (float.IsNaN(position.x) || float.IsNaN(position.y) || float.IsNaN(position.z)) hasPosition = false;
            return true;
        }
    }

    public static class SceneNames
    {
        public const string MainMenu = "MainMenu";
        public const string Apartment = "Apartment";
        public const string Basement = "Basement";
    }
}
