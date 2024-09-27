using Microsoft.AspNetCore.Mvc;
using RelataBH.Service.Auth.Domain;
using RelataBH.Service.Auth;
using Microsoft.AspNetCore.Http.HttpResults;

namespace RelataBH.Controllers
{
    [ApiController]
    [Route("auth")]
    public class AuthController(IAuthService authService): ControllerBase
    {
        [HttpPost("register")]
        public async Task<IActionResult> Register(AuthUserRequest userRequest)
        {
            try
            {
                var userFirebaseResponse = await authService.Register(userRequest);
                return Ok();
            }
            catch (Exception exception)
            {
                return BadRequest(exception.Message);
            }
        }

        [HttpPost("login")]
        public async Task<IActionResult> Login(AuthUserRequest userRequest)
        {
            try
            {
                var userFirebaseResponse = await authService.Login(userRequest);
                return Ok(userFirebaseResponse);
            }
            catch (Exception exception)
            {
                return BadRequest(exception.Message);
            }
        }
    }
}
