using Microsoft.AspNetCore.Mvc;
using RelataBH.Model.Relato;
using RelataBH.Service.Auth.Domain.Relato;
using RelataBH.Service.Relato;
using RelataBH.Service.Relato.Domain;
using RelataBH.Service.Relato.Feedback;

namespace RelataBH.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class RelatoController(IRelatoService relatoService) : ControllerBase
    {
        [HttpGet("searchByCentralPoint")]
        public async Task<ActionResult<IEnumerable<Relato>>> GetRelatosPoint([FromQuery] string lat, [FromQuery] string log)
        {
            var relatos = await relatoService.GetRelatosPoint(lat, log);
            return Ok(relatos);
        }

        [HttpGet("searchById")]
        public async Task<ActionResult<VW_RELATOS?>> GetRelatoId([FromQuery] int Id)
        {
            var relato = await relatoService.GetRelatoId(Id);
            return Ok(relato);
        }

        [HttpGet("")]
        public async Task<ActionResult<List<VW_RELATOS>>> GetRelatos()
        {
            IEnumerable<VW_RELATOS> relatos = await relatoService.GetRelatos();
            return Ok(relatos);
        }

        [HttpGet("searchByArea")]
        public async Task<ActionResult<IEnumerable<Relato>>> SearchByArea([FromQuery] AreaRequest area)
        {
            return Ok(await relatoService.GetRelatosInArea(area));
        }

        [HttpGet("searchByCidade")]
        public async Task<ActionResult<IEnumerable<Relato>>> SearchByCidade([FromQuery] int id)
        {
            IEnumerable<Relato> relatos = await relatoService.SearchByCidade(id);
            return Ok(relatos);
        }

        [HttpPost]
        [Consumes("multipart/form-data")]
        public async Task<ActionResult<Relato>> SaveRelato(
            [FromForm] RelatoRequest relato,
            [FromForm] List<IFormFile> images
        ) {
            var relatoSalvo = await relatoService.SaveRelato(relato, images);
            return Ok(relatoSalvo);
        }

        [HttpPatch("")]
        public async Task<ActionResult<Relato>> UpdateRelatos([FromBody] RelatoRequest relato)
        {
            var relatoEditado = await relatoService.UpdateRelato(relato);
            return Ok(relatoEditado);
        }

        [HttpDelete("")]
        public async Task<ActionResult<Boolean>> DeleteRelatos(int id)
        {
            if (await relatoService.DeleteRelato(id))
            {
                return Ok(true);
            }
            else
            {
                return BadRequest();
            }
        }
    }
}
