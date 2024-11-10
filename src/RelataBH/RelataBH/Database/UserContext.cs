using Microsoft.EntityFrameworkCore;
using RelataBH.Model;

namespace RelataBH.database
{
    public class UserContext(DbContextOptions<UserContext> options) : DbContext(options)
    {
        public DbSet<AppUser> User { get; set; } = null;
    }
}
