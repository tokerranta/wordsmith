using System;
using System.Collections.Generic;
using System.Linq;
using Wordsmith.Core.Extensions;

namespace Wordsmith.Domain
{
    public static class PhraseReverser
    {
        public static string Reverse(string input)
        {
            input.ThrowIfNull(nameof(input));

            var words = input.Split(' ');
            var reversedWords = new List<string>();

            foreach (var word in words)
            {
                var reversed = word.Reverse().ToArray();
                reversedWords.Add(new string(reversed));
            }

            return String.Join(" ", reversedWords);
        }
    }
}
