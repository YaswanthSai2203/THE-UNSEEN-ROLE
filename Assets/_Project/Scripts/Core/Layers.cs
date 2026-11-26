namespace Unseen
{
    /// <summary>Layer indices used by the game. Unnamed high layers are used so no TagManager edits are needed.</summary>
    public static class Layers
    {
        public const int Default = 0;
        public const int IgnoreRaycast = 2;   // mirror surfaces: seen by the player, invisible to mirror cameras
        public const int Player = 29;         // player capsule: never occludes observation/interaction rays
        public const int Unseen = 30;         // things only the photo camera / television can see
        public const int ReflectionOnly = 31; // the player's body, only visible in mirrors and on the TV feed

        public const int MainCameraMask = ~((1 << Player) | (1 << Unseen) | (1 << ReflectionOnly));
        public const int PhotoCameraMask = ~((1 << Player) | (1 << ReflectionOnly));
        public const int MirrorCameraMask = ~((1 << Player) | (1 << Unseen) | (1 << IgnoreRaycast));
        public const int TvCameraMask = ~((1 << Player) | (1 << IgnoreRaycast));
        /// <summary>Geometry that blocks line of sight.</summary>
        public const int OccluderMask = 1 << Default;
        /// <summary>Things that make a space "occupied" for unobserved movement.</summary>
        public const int OccupancyMask = (1 << Default) | (1 << Player);
    }
}
