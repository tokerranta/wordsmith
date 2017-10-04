using Microsoft.AspNetCore.Mvc;
using Wordsmith.Api.Application;

namespace Wordsmith.Api.Controllers
{
    [Produces("application/json")]
    [Route("api/ReverseHistory")]
    public class ReverseHistoryController : Controller
    {
        private readonly IReverseService _reverseService;

        public ReverseHistoryController(IReverseService reverseService)
        {
            _reverseService = reverseService;
        }

        public IActionResult Get()
        {
            return Ok(_reverseService.GetReversedHistory());
        }
    }
}