using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;

namespace RelataBH.Model.Relato
{
    public class RelatoFeedback
    {
        [Key]
        [Column("ID")]
        [JsonIgnore]
        public int Id {  get; set; }
        [Column("GOSTEI")]
        public int Like { get; set; } = 0;
        [Column("N_GOSTEI")]
        public int Dislike { get; set; } = 0;
        [Column("ID_RELATO")]
        [JsonIgnore]
        public int IdRelato { get; set; }

        [JsonIgnore]
        public Relato Relato { get; set; }
    }
}
