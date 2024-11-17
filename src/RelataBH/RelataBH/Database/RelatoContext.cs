using Microsoft.EntityFrameworkCore;
using RelataBH.Model.Relato;
using RelataBH.Service.Auth.Domain.Relato;

namespace RelataBH.Database
{
    public class RelatoContext(DbContextOptions<RelatoContext> options) : DbContext(options)
    {
        public DbSet<Relato> Relatos { get; set; }
        public DbSet<VW_RELATOS> VW_RELATOS { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Relato>().ToTable("RELATOS");
            modelBuilder.Entity<VW_RELATOS>().ToView("VW_RELATOS");
        }
    }
}
