using System.ComponentModel.DataAnnotations.Schema;

namespace RelataBH.Model.Location
{
    public class Bairro
    {
        [Column("id_bairro")]
        public int ID { get; set; }
        [Column("nome")]
        public string Name { get; set; }
        [Column("cidade")]
        public int CidadeId { get; set; }
        public Cidade Cidade { get; set; }
    }
}
