using Microsoft.EntityFrameworkCore;
using RelataBH.Model.Location;

namespace RelataBH.Database
{
    public class LocationContext(DbContextOptions<LocationContext> options) : DbContext(options)
    {
        public DbSet<Estado> Estado { get; set; }
        public DbSet<Cidade> Cidade { get; set; }
        public DbSet<Bairro> Bairro { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Estado>().ToTable("estados");
            modelBuilder.Entity<Cidade>().ToTable("cidades");
            modelBuilder.Entity<Bairro>().ToTable("bairros");

            modelBuilder.Entity<Bairro>()
                .HasOne(b => b.Cidade)
                .WithMany(c => c.Bairros)
                .HasForeignKey(b => b.CidadeId);

            modelBuilder.Entity<Cidade>()
                .HasOne(c => c.Estado)
                .WithMany(e => e.Cidades)
                .HasForeignKey(c => c.EstadoId);
        }
    }
}
