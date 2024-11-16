using Microsoft.EntityFrameworkCore;
using RelataBH.Model.Location;
using RelataBH.Model.Relato;

namespace RelataBH.Database
{
    public class RelatoContext(DbContextOptions<RelatoContext> options) : DbContext(options)
    {
        public DbSet<Category> Category { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Category>().ToTable("INDICADORES");
        }
    }
}
