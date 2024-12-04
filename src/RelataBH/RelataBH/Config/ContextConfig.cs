using Microsoft.EntityFrameworkCore;
using RelataBH.database;
using RelataBH.Database;

namespace RelataBH.Config
{
    public static class ContextConfig
    {
        public static void AddContexts(this IServiceCollection service, IConfiguration configuration)
        {
            service.AddDbContext<UserContext>(options =>
                options.UseSqlServer(configuration.GetConnectionString("DefaultConnection"))
            );

            service.AddDbContext<LocationContext>(options =>
                options.UseSqlServer(configuration.GetConnectionString("DefaultConnection"))
            );

            service.AddDbContext<ProfileContext>(options =>
                options.UseSqlServer(configuration.GetConnectionString("DefaultConnection"))
            );

            service.AddDbContext<RelatoContext>(options =>
                options.UseSqlServer(
                    configuration.GetConnectionString("DefaultConnection"),
                    x => x.UseNetTopologySuite()
                )
            );
        }
    }
}
