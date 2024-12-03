using Microsoft.AspNetCore.Mvc;
using RelataBH.Model.Location;
using RelataBH.Service.Location;

namespace RelataBH.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class LocationController(ILocationService locationService) : ControllerBase
    {
        [HttpGet("search")]
        public async Task<ActionResult<List<Place>>> Search([FromQuery] string query)
        {
            try
            {
                IEnumerable<Place> cidades = await locationService.SearchLocation(query);
                return Ok(cidades);
            }
            catch(Exception exception)
            {
                return BadRequest(exception.Message);
            }
        }
    }
}
