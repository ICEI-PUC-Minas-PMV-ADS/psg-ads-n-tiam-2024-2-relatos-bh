using Microsoft.AspNetCore.Mvc;
using RelataBH.Model.Location;
using RelataBH.Model.Relato;
using RelataBH.Service.Auth.Domain.Relato;
using RelataBH.Service.Location;
using RelataBH.Service.Relato;

namespace RelataBH.Controllers
{
    [Route("api/relato")]
    [ApiController]
    public class RelatoController(IRelatoService relatoService) : ControllerBase
    {
        [HttpGet("")]
        public async Task<ActionResult<List<VW_RELATOS>>> GetRelatos()
        {
            IEnumerable<VW_RELATOS> relatos = await relatoService.GetRelatos();
            return Ok(relatos);
        }

        [HttpPost]
        public async Task<IActionResult> SaveRelato([FromBody] RelatoRequest relato)
        {
            var relatoSalvo = await relatoService.SaveRelato(relato);
            return Ok(relatoSalvo);
        }

        [HttpPatch("")]
        public async Task<ActionResult> UpdateRelatos([FromBody] RelatoRequest relato)
        {
            var relatoEditado = await relatoService.UpdateRelato(relato);
            return Ok(relatoEditado);
        }

        [HttpDelete("")]
        public async Task<ActionResult> DeleteRelatos(int id)
        {
            if(await relatoService.DeleteRelato(id))
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
