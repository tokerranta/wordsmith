using Xunit;
using Wordsmith.Domain;

namespace Wordsmith.Domain.Tests
{
    public class WhenReversingMultipleWords
    {
        [Fact]
        public void ItShouldReverseTheInput()
        {
            var input = "Hi my name is markus";
            var actual = PhraseReverser.Reverse(input);
            var expected = "iH ym eman si sukram";
            Assert.Equal(expected, actual);
        }
    }
}