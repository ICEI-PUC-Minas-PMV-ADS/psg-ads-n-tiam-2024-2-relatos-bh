using Microsoft.EntityFrameworkCore;
using RelataBH.Model;

namespace RelataBH.Database
{
    public class ProfileContext(DbContextOptions<ProfileContext> options) : DbContext(options)
    {
        public DbSet<Profile> Profile { get; set; } = null;

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Profile>().ToView("VW_PERFIL");
        }
    }
}
