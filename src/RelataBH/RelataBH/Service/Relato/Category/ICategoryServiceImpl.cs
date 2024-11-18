
using Microsoft.EntityFrameworkCore;
using RelataBH.Database;

namespace RelataBH.Service.Relato.Category
{
    public class ICategoryServiceImpl(RelatoContext relatoContext) : ICategoryService
    {
        public async Task<IEnumerable<Model.Relato.Category>> GetCategories()
        {
            return await relatoContext
                .Category
                .ToListAsync();
        }
    }
}
