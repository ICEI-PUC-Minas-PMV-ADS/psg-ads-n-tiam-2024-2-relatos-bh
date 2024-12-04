using Microsoft.EntityFrameworkCore.Metadata.Internal;
using NetTopologySuite.Geometries;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text.Json.Serialization;

namespace RelataBH.Model.Relato
{
    public class VW_RELATOS
    {
        [Key]
        [Column("ID_RELATO")]
        public int IdRelato { get; set; }
        [Column("LATITUDE")]
        public string Latitude { get; set; }
        [Column("LONGITUDE")]
        public string Longitude { get; set; }
        [Column("ENDERECO")]
        public string Endereco { get; set; }
        [Column("CRIADO_QUANDO")]
        public DateTime CriadoQuando { get; set; }
        [Column("DESCRICAO_RELATO")]
        public string DescricaoRelato { get; set; }
        [Column("TITULO")]
        public string Titulo { get; set; }
        [Column("ID_CIDADE")]
        public int IdCidade { get; set; }
        [Column("NOME_CATEGORIA")]
        public string NomeCategoria { get; set; }
        [Column("DESCRICAO_CATEGORIA")]
        public string DescricaoCategoria { get; set; }
        [Column("ID_CATEGORIA")]
        public int IdCategoria { get; set; }
        [Column("NOME_USER")]
        public string NomeUser { get; set; }
        [Column("EMAIL_USER")]
        public string EmailUser { get; set; }
        [Column("QUANT_LIKE")]
        public int QuantLike { get; set; } = 0;
        [Column("QUANT_DESLIKE")]
        public int QuantDeslike { get; set; } = 0;
        [Column("POINT")]
        [JsonIgnore]
        public Point Coordinates { get; set; }
    }
}
