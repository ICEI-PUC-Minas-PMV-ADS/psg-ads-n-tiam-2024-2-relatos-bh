using Microsoft.EntityFrameworkCore;
using RelataBH.Database;

namespace RelataBH.Service.Profile.RelatoHistoric
{
    public class IRelatoHistoricServiceImpl(RelatoContext relatoContext) : IRelatoHistoricService
    {
        public async Task<IEnumerable<Model.Relato.Relato>> GetRelatosByUser(int userId)
        {
            var relatosUser = await relatoContext.Relatos
               .Where(x => x.idUser == userId)
               .Include(x => x.images)
               .Include(x => x.feedback)
               .OrderByDescending(x => x.id)
               .ToListAsync();

            return relatosUser;
        }
    }
}
