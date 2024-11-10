using Microsoft.EntityFrameworkCore.Metadata.Internal;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace RelataBH.Model
{
    public class AppUser
    {
        [Key]
        [Column("id")]
        public int? id { get; set; }
        [Column("idFireBase")]
        public int? idFireBase { get; set; }
        [Column("email")]
        public string? email { get; set; }
        [Column("createdat")]
        public int? createdat { get; set; }
        [Column("nome")]
        public string? nome { get; set; }
    }
}
