using RelataBH.Service.Auth;
using RelataBH.Service.ImageUpload;
using RelataBH.Service.Location;
using RelataBH.Service.Profile.RelatoHistoric;
using RelataBH.Service.Profile;
using RelataBH.Service.Relato.Category;
using RelataBH.Service.Relato.Feedback;
using RelataBH.Service.Relato;
using RelataBH.Service.Auth.Api;
using Refit;

namespace RelataBH.Config
{
    public static class ServiceConfig
    {
        public static void AddServices(this IServiceCollection services)
        {
            services.AddTransient<IAuthService, IAuthServiceImpl>();
            services.AddTransient<ILocationService, ILocationServiceImpl>();
            services.AddTransient<IProfileService, IProfileServiceImpl>();
            services.AddTransient<IRelatoService, IRelatoServiceImpl>();
            services.AddTransient<ICategoryService, ICategoryServiceImpl>();
            services.AddTransient<IRelatoHistoricService, IRelatoHistoricServiceImpl>();
            services.AddTransient<IImageUploader, ImageUploaderImpl>();
            services.AddTransient<IFeedbackService, IFeedbackServiceImpl>();

            services.AddRefitClient<IAuthApi>().ConfigureHttpClient(
                client => client.BaseAddress = new Uri("https://identitytoolkit.googleapis.com")
            );
        }
    }
}
