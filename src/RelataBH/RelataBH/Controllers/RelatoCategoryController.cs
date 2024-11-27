using Microsoft.AspNetCore.Mvc;
using RelataBH.Model.Relato;
using RelataBH.Service.Relato.Category;

namespace RelataBH.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class RelatoCategoryController(ICategoryService categoryService) : ControllerBase
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
    }
}
