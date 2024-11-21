using Microsoft.AspNetCore.Mvc;
using RelataBH.Model.Relato;
using RelataBH.Service.Auth.Domain.Relato;

namespace RelataBH.Service.Relato
{
    public interface IRelatoService
    {
        public Task<IEnumerable<VW_RELATOS>> GetRelatos();
        public Task<IEnumerable<VW_RELATOS>> GetRelatosPoint(string lat, string log);
        public Task<VW_RELATOS?> GetRelatoId(int Id);
        public Task<Model.Relato.Relato> SaveRelato(RelatoRequest relato);
        public Task<Model.Relato.Relato?> UpdateRelato(RelatoRequest relato);
        public Task<bool> DeleteRelato(int id);
    }
}
