using Microsoft.Data.Entity;
using Abt.Models;

namespace Abt.Data
{
    public class AbtDataContext : DbContext
    {
        public DbSet<Student> Students { get; set; }

        protected override void OnConfiguring(EntityOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseInMemoryStore();
        }
	}
}