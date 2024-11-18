using Microsoft.EntityFrameworkCore.Metadata.Internal;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace RelataBH.Model
{
    public class Profile
    {
        [Key]
        [Column("ID")]
        public required int id { get; set; }
        [Column("EMAIL")]
        public required string email { get; set; }
        [Column("NOME")]
        public required string nome { get; set; }
        [Column("CREATED_AT")]
        public required DateOnly createdAt { get; set; }
        [Column("QUANTIDADE_RELATO")]
        public required int qntRelatos { get; set; }
    }
}
