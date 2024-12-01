using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text.Json.Serialization;

namespace RelataBH.Model.Relato
{
    public class RelatoImage
    {
        [Key]
        [Column("ID")]
        [JsonIgnore]
        public int Id { get; set; }
        [Column("URL")]
        public string Url { get; set; }
        [JsonIgnore]
        [Column("ID_RELATO")]
        public int IdRelato { get; set; }
        [JsonIgnore]
        public Relato Relato { get; set; }
    }
}
