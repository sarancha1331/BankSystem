using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace WebAPIApp.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UsersController : ControllerBase
    {

        [HttpGet]
        [Route("Test1")]
        public async Task<ActionResult<List<int>>> TestQuery()
        {
            var result = new List<int> { 1, 2, 3 };
            return Ok(result);
        }

    }
}
