using Microsoft.EntityFrameworkCore;
using RelataBH.Model;

namespace RelataBH.database
{
    public class UserContext(DbContextOptions<UserContext> options) : DbContext(options)
    {
        public DbSet<User> User { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<User>().ToTable("USERS");
        }
    }
}
