using Microsoft.AspNetCore.Authentication;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using RelataBH.Authorization;
using RelataBH.Model;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace RelataBH.Controllers
{
    [Route("api/user")]
    [ApiController]
    //[Authorize]
    public class UserController(ILogger<WeatherForecastController> logger) : ControllerBase
    {

        [HttpGet]
        [Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]
        public async Task<IActionResult> Get([FromHeader] string Authorization)
        {
            var accessToken = await HttpContext.GetTokenAsync("Authorization");
            User? user = AuthorizationManager.GetUserFromToken(token: Authorization);
            if (user != null)
            {
                return Ok(user);
            }
            return Unauthorized();
        }

        [HttpPut()]
        [Authorize]
        public void Put([FromBody] string value)
        {
        }
    }
}
