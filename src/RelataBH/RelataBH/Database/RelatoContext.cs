using Microsoft.EntityFrameworkCore;
using RelataBH.Model.Relato;

namespace RelataBH.Database
{
    public class RelatoContext(DbContextOptions<RelatoContext> options) : DbContext(options)
    {
        public DbSet<Relato> Relato { get; set; }
        public DbSet<vwRelato> vwRelato { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<vwRelato>().ToView("vw_relatos");
            modelBuilder.Entity<Relato>().ToTable("relatos");
        }
    }
}
