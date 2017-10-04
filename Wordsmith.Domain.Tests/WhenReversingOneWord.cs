using Xunit;
using Wordsmith.Domain;

namespace Wordsmith.Domain.Tests
{
    public class WhenReversingOneWord
    {
        [Fact]
        public void ItShouldReverseTheInput()
        {
            var input = "Cow";
            var actual = PhraseReverser.Reverse(input);
            var expected = "woC";
            Assert.Equal(expected, actual);
        }
    }
}