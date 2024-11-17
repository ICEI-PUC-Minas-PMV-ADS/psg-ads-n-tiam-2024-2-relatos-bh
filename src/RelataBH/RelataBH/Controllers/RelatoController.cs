﻿using Microsoft.AspNetCore.Mvc;
using RelataBH.Model.Location;
using RelataBH.Model.Relato;
using RelataBH.Service.Auth.Domain.Relato;
using RelataBH.Service.Relato;
using RelataBH.Service.Relato.Category;

namespace RelataBH.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class RelatoController(IRelatoService relatoService, ICategoryService categoryService) : ControllerBase
    {
        [HttpGet("categories")]
        public async Task<ActionResult<List<Category>>> GetCategories()
        {
            try
            {
                return Ok(await categoryService.GetCategories());
            }
            catch
            {
                return BadRequest();
            }
        }

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