using Microsoft.AspNetCore.Mvc;
using Wordsmith.Api.Application;
using Wordsmith.Api.Models;
using Wordsmith.Core.Extensions;
using Wordsmith.Domain;

namespace Wordsmith.Api.Controllers
{
    [Route("api/[controller]")]
    public class ReverseController : ControllerBase
    {
        private readonly IReverseService _reverseService;

        public ReverseController(IReverseService reverseService)
        {
            reverseService.ThrowIfNull(nameof(reverseService));
            _reverseService = reverseService;
        }

        // GET api/values
        [HttpPost]
        public IActionResult Post([FromBody] string input)
        {
            if(string.IsNullOrEmpty(input))
            {
                return BadRequest(new BadRequestResponse("Text cannot be empty"));
            }

            var result = _reverseService.GetReversedResult(input);
            _reverseService.SaveToHistory(result);
            // Add to history
            return Ok(result);
        }
    }
}
