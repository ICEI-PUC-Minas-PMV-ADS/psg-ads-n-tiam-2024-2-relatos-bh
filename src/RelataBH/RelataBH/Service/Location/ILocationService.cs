using RelataBH.database;
using RelataBH.Model.Location;

namespace RelataBH.Service.Location
{
    public interface ILocationService
    {
        public Task<IEnumerable<Place>> SearchLocation(string query);
    }
}
