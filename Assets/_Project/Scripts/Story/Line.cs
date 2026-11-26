namespace Unseen
{
    public enum VoiceKind { None, Caller, Radio, Child, Tape, Thought, Woman }

    public struct Line
    {
        public string Speaker;
        public string Text;
        public Line(string speaker, string text) { Speaker = speaker; Text = text; }
    }
}
