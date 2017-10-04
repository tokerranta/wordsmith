using System.Collections.Generic;
using Wordsmith.Api.Models;

namespace Wordsmith.Api.Application
{
    public interface IReverseService
    {
        ReversedResult GetReversedResult(string phrase);
        IEnumerable<ReversedResult> GetReversedHistory();
        void SaveToHistory(ReversedResult reversedResult);
    }
}