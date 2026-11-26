namespace Unseen
{
    /// <summary>Automatic checkpoints: an in-memory copy for instant restarts plus the on-disk save.</summary>
    public class CheckpointManager
    {
        readonly GameManager _gm;
        string _lastJson;

        public CheckpointManager(GameManager gm) { _gm = gm; }

        public void Save(string reason)
        {
            if (_gm.Data == null || _gm.State == GameState.Ending) return;
            _gm.CaptureRuntimeState();
            _lastJson = SaveManager.Serialize(_gm.Data);
            if (_gm.Saves.Write(_gm.Data)) _gm.UI?.ShowSaving();
        }

        public void Forget() => _lastJson = null;

        public SaveData Restore()
        {
            var d = SaveManager.Parse(_lastJson);
            return d ?? _gm.Saves.Load();
        }
    }
}
