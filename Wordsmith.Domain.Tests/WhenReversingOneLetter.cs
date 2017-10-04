using System;
using Xunit;
using Wordsmith.Domain;

namespace Wordsmith.Domain.Tests
{
    public class WhenReversingOneLetter
    {
        [Fact]
        public void ItShouldReturnTheSameLetter()
        {
            var input = "A";
            var actual = PhraseReverser.Reverse(input);
            var expected = "A";
            Assert.Equal(actual, expected);
        }
    }
}
