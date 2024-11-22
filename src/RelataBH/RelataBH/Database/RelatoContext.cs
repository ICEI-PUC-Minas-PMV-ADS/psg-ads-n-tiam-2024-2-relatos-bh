using Microsoft.EntityFrameworkCore;
using RelataBH.Model.Relato;
namespace RelataBH.Database
{
    public class RelatoContext(DbContextOptions<RelatoContext> options) : DbContext(options)
    {
        public DbSet<Relato> Relatos { get; set; }
        public DbSet<VW_RELATOS> VW_RELATOS { get; set; }
        public DbSet<Category> Category { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            modelBuilder.Entity<Relato>().ToTable("RELATOS");
            modelBuilder
                .Entity<VW_RELATOS>()
                .ToView("VW_RELATOS")
                .Property(x => x.Coordinates)
                .HasColumnType("geography");

            modelBuilder.Entity<Category>().ToTable("INDICADORES");
        }
    }
}
