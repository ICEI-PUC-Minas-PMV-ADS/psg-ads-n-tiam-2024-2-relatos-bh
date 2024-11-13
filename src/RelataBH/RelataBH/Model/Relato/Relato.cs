namespace RelataBH.Model.Relato
{
    public class Relato
    {
        public int idRelato { get; set; }
        public decimal log { get; set; }
        public decimal lat { get; set; }
        public string logradouro { get; set; }
        public DateTime criado { get; set; }
        public int idUser { get; set; }
        public string dscRelato { get; set; }  
        public string tituloRelato { get; set; }
        public int categoria { get; set; } 
        public int idBairro { get; set; }
    }
}
