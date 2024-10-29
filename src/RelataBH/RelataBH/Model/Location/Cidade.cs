using System.ComponentModel.DataAnnotations.Schema;

namespace RelataBH.Model.Location
{
    public class Cidade
    {
        [Column("id_cidade")]
        public int ID { get; set; }
        [Column("nome")]
        public string Name { get; set; }
        [Column("estado")]
        public int EstadoId { get; set; }
        public Estado Estado { get; set; }

        public ICollection<Bairro> Bairros { get; set; }
    }
}
