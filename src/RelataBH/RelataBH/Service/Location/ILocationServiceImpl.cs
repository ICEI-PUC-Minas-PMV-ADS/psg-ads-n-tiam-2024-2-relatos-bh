
using Microsoft.EntityFrameworkCore;
using RelataBH.Database;
using RelataBH.Model.Location;

namespace RelataBH.Service.Location
{
    public class ILocationServiceImpl(LocationContext locationContext) : ILocationService
    {
        public async Task<IEnumerable<Place>> SearchLocation(string query)
        {
            List<Place> cidades = await locationContext
                .Cidade
                .Where(cidade => cidade.Name.Contains(query))
                .Select(cidade => new Place(cidade.ID, cidade.Name, PlaceType.CIDADE))
                .ToListAsync();

            return cidades;
        }
    }
}
