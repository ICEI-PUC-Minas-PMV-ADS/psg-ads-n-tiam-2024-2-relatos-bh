using RelataBH.Model;
using RelataBH.Service.Auth.Api;
using RelataBH.Service.Auth.Domain;

namespace RelataBH.Service.Auth
{
    public class IAuthServiceImpl(IAuthApi authApi, IConfiguration config): IAuthService
    {
        private readonly string ApiKey = Environment.GetEnvironmentVariable("FirebaseApiKey", EnvironmentVariableTarget.User) ?? config["FirebaseApiKey"] ?? "";

        public async Task<AuthUserResponse> Login(AuthUserRequest userRequest)
        {
            var apiResponse = await authApi.Login(user: userRequest, apiKey: ApiKey);

            if (apiResponse.IsSuccessStatusCode)
            {
                return apiResponse.Content;
            }
            else
            {
                throw new Exception(apiResponse.Error.Content);
            }
        }

        public Task<AuthUserResponse> RecoverPassword(AuthUserRequest userRequest)
        {
            throw new NotImplementedException();
        }

        public async Task<AuthUserResponse> Register(AuthUserRequest userRequest)
        {
            var apiResponse = await authApi.Register(user: userRequest, apiKey: ApiKey);

            if (apiResponse.IsSuccessStatusCode)
            {
                return apiResponse.Content;
            }
            else
            {
                throw new Exception(apiResponse.Error.Content);
            }
        }

    }
}
