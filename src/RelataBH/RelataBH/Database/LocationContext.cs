using Microsoft.EntityFrameworkCore;
using RelataBH.Model.Location;

namespace RelataBH.Database
{
    public class LocationContext(DbContextOptions<LocationContext> options) : DbContext(options)
    {
        public DbSet<Estado> Estado { get; set; }
        public DbSet<Cidade> Cidade { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Estado>().ToTable("ESTADO");
            modelBuilder.Entity<Cidade>().ToTable("CIDADE");

            modelBuilder.Entity<Cidade>()
                .HasOne(c => c.Estado)
                .WithMany(e => e.Cidades)
                .HasForeignKey(c => c.EstadoId);
        }
    }
}
