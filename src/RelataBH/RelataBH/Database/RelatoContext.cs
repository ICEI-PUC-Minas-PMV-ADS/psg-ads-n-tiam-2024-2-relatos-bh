using Microsoft.EntityFrameworkCore;
using RelataBH.Model.Relato;
namespace RelataBH.Database
{
    public class RelatoContext(DbContextOptions<RelatoContext> options) : DbContext(options)
    {
        public DbSet<Relato> Relatos { get; set; }
        public DbSet<VW_RELATOS> VW_RELATOS { get; set; }
        public DbSet<Category> Category { get; set; }
        public DbSet<RelatoImage> Images { get; set; }
        public DbSet<RelatoFeedback> Feedback { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            modelBuilder.Entity<RelatoImage>().ToTable("FOTOS");
            modelBuilder.Entity<RelatoFeedback>().ToTable("CURTIDAS");
            modelBuilder.Entity<VW_RELATOS>().ToView("VW_RELATOS");
            modelBuilder.Entity<Category>().ToTable("INDICADORES");

            modelBuilder
                .Entity<Relato>()
                .HasMany(r => r.images)
                .WithOne(f => f.Relato)
                .HasForeignKey(i => i.IdRelato)
                .OnDelete(DeleteBehavior.Cascade);

            modelBuilder
                .Entity<Relato>()
                .HasOne(r => r.feedback)
                .WithOne(f => f.Relato)
                .HasForeignKey<RelatoFeedback>(f => f.IdRelato)
                .OnDelete(DeleteBehavior.Cascade);

            modelBuilder
                .Entity<VW_RELATOS>()
                .Property(x => x.Coordinates)
                .HasColumnType("geography");
        }
    }
}
