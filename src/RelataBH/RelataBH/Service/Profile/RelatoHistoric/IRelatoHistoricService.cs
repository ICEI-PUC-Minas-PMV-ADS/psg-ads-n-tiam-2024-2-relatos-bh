namespace RelataBH.Service.Profile.RelatoHistoric
{
    public interface IRelatoHistoricService
    {
        public Task<IEnumerable<Model.Relato.Relato>> GetRelatosByUser(int userId);
    }
}
