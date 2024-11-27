using Microsoft.AspNetCore.Authentication.JwtBearer;

namespace RelataBH.Config
{
    public static class AuthenticationConfig
    {
        public static void ConfigureAuthentication(this IServiceCollection service)
        {
            service.AddAuthentication()
                .AddJwtBearer(JwtBearerDefaults.AuthenticationScheme, token =>
                {
                    token.Authority = "https://securetoken.google.com/relata-bh";
                    token.Audience = "relata-bh";
                    token.TokenValidationParameters.ValidIssuer = "https://securetoken.google.com/relata-bh";
                });
        }
    }
}
