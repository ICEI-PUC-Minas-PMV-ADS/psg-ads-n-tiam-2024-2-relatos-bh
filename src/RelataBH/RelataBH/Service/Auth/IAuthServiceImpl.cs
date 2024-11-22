using RelataBH.database;
using RelataBH.Model;
using RelataBH.Service.Auth.Api;
using RelataBH.Service.Auth.Domain;
using RelataBH.Service.Auth.Domain.RecoverPassword;
using RelataBH.Service.Auth.Mapper;

namespace RelataBH.Service.Auth
{
    public class IAuthServiceImpl(IAuthApi authApi, IConfiguration config, UserContext userContext): IAuthService
    {
        private readonly string ApiKey = 
            Environment.GetEnvironmentVariable("FirebaseApiKey", EnvironmentVariableTarget.User) 
                ?? config["FirebaseApiKey"] 
                ?? "";

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

        public async Task<SendEmailResponse> RecoverPassword(SendEmailRequest sendEmailRequest)
        {
            var apiResponse = await authApi.RecoverPassword(sendEmailRequest: sendEmailRequest, apiKey :ApiKey);

            if (apiResponse.IsSuccessStatusCode)
            {
                return apiResponse.Content;
            }   
            else
            {
                throw new Exception(apiResponse.Error.Content);
            }
        }

        public async Task<User> Register(AuthUserRequest userRequest)
        {
            var apiResponse = await authApi.Register(user: userRequest, apiKey: ApiKey);

            if (apiResponse.IsSuccessStatusCode)
            {
                var user = AuthMapper.AuthUserToUser(userRequest, apiResponse.Content);
                
                var saved = await userContext.AddAsync(user);
                await userContext.SaveChangesAsync();
                return saved.Entity;
            }
            else
            {
                throw new Exception(apiResponse.Error.Content);
            }
        }
    }
}
