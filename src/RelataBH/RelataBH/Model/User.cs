using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text.Json.Serialization;

namespace RelataBH.Model
{
    public class User
    {
        [Key]
        [Column("ID")]
        public int Id { get; set; }
        [Column("NOME")]
        public string Name { get; set; }
        [Column("EMAIL")]
        public string Email { get; set; }
        [Column("ID_FIREBASE")]
        public string IdFirebase { get; set; }
        [Column("CREATED_AT")]
        public DateOnly createdAt { get; set; }
        [NotMapped]
        public string Token { get; set; }
    }
}

