using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace RelataBH.Model
{
    public class User
    {
        [Key]
        [Column("ID")]
        public int Id { get; set; }
        [Column("NAME")]
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

