using Microsoft.AspNetCore.Authentication;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using RelataBH.Authorization;
using RelataBH.Model;
using RelataBH.Service.Profile;
using RelataBH.Service.Profile.Domain;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace RelataBH.Controllers
{
    [Route("api/user")]
    [ApiController]
    //[Authorize]
    public class UserController(ILogger<WeatherForecastController> logger, IProfileService profileService) : ControllerBase
    {

        [HttpPost("/profile")]
        //[Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]
        public async Task<ActionResult<AppUser>> Post([FromBody] ProfileRequest profileRequest)
        {
           AppUser appUser = await profileService.GetProfile(profileRequest.UserId);
           return Ok(appUser);
        }

        [HttpPut()]
        [Authorize]
        public void Put([FromBody] string value)
        {
        }
    }
}
