using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace RelataBH.Model.Relato
{
    public class Relato
    {
        [Key]
        [Column("ID")]
        public int id { get; set; }
        [Column("LATITUDE")]
        public double latitude { get; set; }
        [Column("LONGITUDE")]
        public double longitude { get; set; }
        [Column("ENDERECO")]
        public string endereco { get; set; }
        [Column("CREATED_AT")]
        public DateOnly createdAt { get; set; }
        [Column("DSC")]
        public string dsc { get; set; }
        [Column("TITULO")]
        public string titulo { get; set; }
        [Column("COD_INDICADOR")]
        public int codIndicador { get; set; }
        [Column("ID_USER")]
        public int idUser { get; set; }
        [Column("ID_BAIRRO")]
        public int idBairro { get; set; }
    }
}
