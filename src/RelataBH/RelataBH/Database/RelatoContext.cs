using Microsoft.EntityFrameworkCore;
using RelataBH.Model.Relato;
using RelataBH.Service.Auth.Domain.Relato;
using RelataBH.Model.Location;
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
            modelBuilder.Entity<Relato>().ToTable("RELATOS");
            modelBuilder.Entity<VW_RELATOS>().ToView("VW_RELATOS");
            modelBuilder.Entity<Category>().ToTable("INDICADORES");
        }
    }
}
