using Microsoft.EntityFrameworkCore;
using RelataBH.Model;

namespace RelataBH.database
{
    public class DatabaseContext : DbContext
    {
        public DatabaseContext(DbContextOptions<DatabaseContext> options) : base(options){ }


        public DbSet<User> User { get; set; } = null;
    }
}
