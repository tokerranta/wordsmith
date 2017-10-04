using System.Collections.Generic;
using Wordsmith.Api.Models;
using Wordsmith.Domain;

namespace Wordsmith.Api.Application
{
    public class ReverseService : IReverseService
    {
        private static IList<ReversedResult> _history = new List<ReversedResult>();

        public IEnumerable<ReversedResult> GetReversedHistory()
        {
            return _history;
        }

        public ReversedResult GetReversedResult(string phrase)
        {
            var reversed = PhraseReverser.Reverse(phrase);
            return new ReversedResult(phrase, reversed);
        }

        public void SaveToHistory(ReversedResult reversedResult)
        {
            _history.Add(reversedResult);
        }
    }
}
