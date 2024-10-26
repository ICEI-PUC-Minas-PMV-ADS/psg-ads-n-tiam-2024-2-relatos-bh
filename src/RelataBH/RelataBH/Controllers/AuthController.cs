using Microsoft.AspNetCore.Mvc;
using RelataBH.Service.Auth.Domain;
using RelataBH.Service.Auth;
using RelataBH.Model;
using Microsoft.AspNetCore.Authorization;

namespace RelataBH.Controllers
{
    [ApiController]
    [Route("api/auth")]
    [AllowAnonymous]
    public class AuthController(IAuthService authService): ControllerBase
    {
        [HttpPost("register")]
        public async Task<IActionResult> Register(AuthUserRequest userRequest)
        {
            try
            {
                User user = await authService.Register(userRequest);
                return Ok(user);
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
                var user = await authService.Login(userRequest);
                return Ok(user);
            }
            catch (Exception exception)
            {
                return BadRequest(exception.Message);
            }
        }
    }
}
