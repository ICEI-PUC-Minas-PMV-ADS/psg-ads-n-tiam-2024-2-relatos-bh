using System.ComponentModel.DataAnnotations.Schema;

namespace RelataBH.Model.Location
{

    public class Estado
    {
        [Column("id")]
        public int ID { get; set; }
        [Column("uf")]
        public required string UF { get; set; }
        [Column("nome")]
        public required string Name { get; set; }

        public ICollection<Cidade> Cidades { get; set; }
    }
}
