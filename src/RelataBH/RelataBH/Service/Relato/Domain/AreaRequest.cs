namespace RelataBH.Service.Relato.Domain
{
    public class AreaRequest
    {
        public required SearchCoordinate TopLeft { get; set; }
        public required SearchCoordinate BottomRight { get; set; }
    }
}
