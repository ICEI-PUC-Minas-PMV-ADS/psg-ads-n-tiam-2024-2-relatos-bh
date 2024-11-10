using Microsoft.EntityFrameworkCore;
using RelataBH.Model;

namespace RelataBH.Database
{
    public class AppUserContext(DbContextOptions<AppUserContext> options) : DbContext(options)
    {
        public DbSet<AppUser> AppUser { get; set; } = null;

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<AppUser>().ToTable("users");
        }
    }
}
