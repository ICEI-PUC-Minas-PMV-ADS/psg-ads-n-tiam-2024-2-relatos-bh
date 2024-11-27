using Microsoft.EntityFrameworkCore;
using RelataBH.Database;
using RelataBH.Model;

namespace RelataBH.Service.Profile
{
    public class IProfileServiceImpl(ProfileContext profileContext) : IProfileService
    {
        public async Task<Model.Profile> GetProfile(string? email)
        {
            return await profileContext.Profile
                 .Where(user => user.email == email)
                 .FirstAsync();
        }
    }
}