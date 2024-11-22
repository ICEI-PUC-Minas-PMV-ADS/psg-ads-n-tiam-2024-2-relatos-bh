using RelataBH.Model;

namespace RelataBH.Service.Profile
{
    public interface IProfileService
    {
        public Task<Model.Profile> GetProfile(string? email);
    }
}
