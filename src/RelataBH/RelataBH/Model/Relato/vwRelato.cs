namespace RelataBH.Model.Relato
{
    public class vwRelato
    {
        public decimal lon { get; set; }
        public decimal lat { get; set; }
        public string rua { get; set; }
        public DateTime dataCriacao { get; set; }
        public string descricao { get; set; }
        public string titulo { get; set; }
        public int idBairro { get; set; }
        public int idFoto { get; set; }
        public string urlFoto { get; set; }
        public string idFareBase { get; set; }
        public string nomeCategoria { get; set; }
        public string dscCategoria { get; set; }
        public string bairro { get; set; }
        public string cidade { get; set; }
    }
}
