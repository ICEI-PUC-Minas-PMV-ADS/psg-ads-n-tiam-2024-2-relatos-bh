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
            modelBuilder.Entity<Relato>().ToTable("RELATOS");
            modelBuilder.Entity<VW_RELATOS>().ToView("VW_RELATOS");
            modelBuilder.Entity<Category>().ToTable("INDICADORES");
        }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder) => optionsBuilder.UseSqlServer("Server=tcp:relatosbh.database.windows.net,1433;Initial Catalog=relatosbh;User ID=relatos-adm@relatosbh;Password=lsPFJ0iP7Y3GTCEe9kaR4yNs681;Encrypt=True;TrustServerCertificate=False;Connect Timeout=30;",
            b => b.UseNetTopologySuite());
    }
}
