using RelataBH.Model;

namespace RelataBH.Service.Profile
{
    public interface IProfileService
    {
        public Task<AppUser> GetProfile(int userId);
    }
}
