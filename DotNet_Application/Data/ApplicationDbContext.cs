using demo1.Models;
using Microsoft.EntityFrameworkCore;

namespace Vehicle.Models
{
    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options) { }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            // Specify the relationships and prevent cascading deletes for Variant
            modelBuilder.Entity<Variant>()
                .HasOne(v => v.Manufacturer)
                .WithMany(m => m.Variants)
                .HasForeignKey(v => v.Mfg_id)
                .OnDelete(DeleteBehavior.Restrict); // Prevent cascading deletes

            modelBuilder.Entity<Variant>()
                .HasOne(v => v.Segment)
                .WithMany()
                .HasForeignKey(v => v.Seg_id)
                .OnDelete(DeleteBehavior.Restrict); // Prevent cascading deletes

            // Define other relationships and constraints here

            // You can also add additional configurations for your other entities
        }

        public DbSet<Segment> Segments { get; set; }
        public DbSet<Manufacturer> Manufacturers { get; set; }
        public DbSet<Variant> Variants { get; set; }
        public DbSet<Component> Components { get; set; }
        public DbSet<Vehicle_detail> Vehicle_Details { get; set; }
        public DbSet<Alternate_Component> Alternate_Components { get; set;}
        public DbSet<User> Users { get; set; }
    }
}

