using Microsoft.AspNetCore.Authentication;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using RelataBH.Authorization;
using RelataBH.Model;
using RelataBH.Service.Profile;
using RelataBH.Service.Profile.Domain;

namespace RelataBH.Controllers
{
    [Route("api/user")]
    [ApiController]
    public class UserController(ILogger<WeatherForecastController> logger, IProfileService profileService) : ControllerBase
    {

        [HttpPost("profile")]
        public async Task<ActionResult<ProfileRequest>> Post([FromBody] ProfileRequest profileRequest)
        {
            try
            {
                Profile appUser = await profileService.GetProfile(profileRequest.UserId);
                return Ok(appUser);
            }
            catch (Exception ex)
            {
                return BadRequest(ex);
            }
        }
    }
}
