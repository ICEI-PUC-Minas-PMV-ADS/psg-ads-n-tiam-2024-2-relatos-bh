using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace RelataBH.Model.Relato
{
    public class Category
    {
        [Key]
        [Column("ID")]
        public int Id { get; set; }
        [Column("NOME")]
        public required string Name { get; set; }
        [Column("DSC")]
        public required string Description { get; set; }
    }
}
