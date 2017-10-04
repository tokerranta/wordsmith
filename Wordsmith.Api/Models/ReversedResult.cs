namespace Wordsmith.Api.Models
{
    public class ReversedResult
    {
        public string Phrase { get; }
        public string Reversed { get; }

        public ReversedResult(string phrase, string reversed)
        {
            Phrase = phrase;
            Reversed = reversed;
        }

    }
}
