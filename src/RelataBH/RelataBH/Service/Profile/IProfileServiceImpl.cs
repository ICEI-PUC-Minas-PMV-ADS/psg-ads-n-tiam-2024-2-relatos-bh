using Microsoft.EntityFrameworkCore;
using RelataBH.Database;
using RelataBH.Model;

namespace RelataBH.Service.Profile
{
    public class IProfileServiceImpl(AppUserContext appUser) : IProfileService
    {
        public async Task<AppUser> GetProfile(int userId)
        {
            return await appUser.AppUser
                 .Where(user => user.id == userId)
                 .FirstAsync();
        }
    }
}