using Microsoft.EntityFrameworkCore;
using MovieApp.Core.Model;
using MovieApp.DB.Entities;

namespace MovieApp.DB;
public class MovieDbContext : DbContext
{
    public DbSet<MovieEntity> MovieContex { get; set; }

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
    {
        var connectionString = "Server=localhost;Port=3306;Database=movieapp;Uid=root;Pwd= ";
        var mySqlServerVersion = new MySqlServerVersion(new Version(10, 4, 22));

        optionsBuilder.UseMySql(connectionString, mySqlServerVersion);

        base.OnConfiguring(optionsBuilder);
    }
  
}
