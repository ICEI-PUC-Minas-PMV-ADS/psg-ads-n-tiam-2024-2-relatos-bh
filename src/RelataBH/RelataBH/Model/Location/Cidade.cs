using System.ComponentModel.DataAnnotations.Schema;

namespace RelataBH.Model.Location
{
    public class Cidade
    {
        [Column("id")]
        public int ID { get; set; }
        [Column("nome")]
        public string Name { get; set; }
        [Column("uf")]
        public int EstadoId { get; set; }
        public Estado Estado { get; set; }
    }
}
