using System.Text.Json.Serialization;

namespace RelataBH.Service.Relato.Domain
{
    public class SearchCoordinate
    {
        public required string Latitude { get; set; }
        public required string Longitude { get; set; }
    }
}
