using System.ComponentModel.DataAnnotations.Schema;

namespace RelataBH.Service.Auth.Domain.Relato
{
    public class RelatoRequest
    {
        public int Id { get; set; }
        public string Latitude { get; set; }
        public string Longitude { get; set; }
        public string Endereco { get; set; }
        public string DescricaoRelato { get; set; }
        public string Titulo { get; set; }
        public int IdCategoria { get; set; }
        public int IdUser { get; set; }
        public string NomeCidade { get; set; }
    }
}
