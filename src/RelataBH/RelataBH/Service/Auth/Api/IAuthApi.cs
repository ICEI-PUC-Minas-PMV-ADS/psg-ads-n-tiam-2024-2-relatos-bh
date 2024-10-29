using Refit;
using RelataBH.Service.Auth.Domain;
using RelataBH.Service.Auth.Domain.RecoverPassword;

namespace RelataBH.Service.Auth.Api
{
    public interface IAuthApi
    {
        [Post("/v1/accounts:signUp?key={apiKey}")]
        Task<ApiResponse<AuthUserResponse>> Register([Body] AuthUserRequest user, string apiKey);

        [Post("/v1/accounts:signInWithPassword?key={apiKey}")]
        Task<ApiResponse<AuthUserResponse>> Login([Body] AuthUserRequest user, string apiKey);

        [Post("/v1/accounts:sendOobCode?key={apiKey}")]
        Task<ApiResponse<SendEmailResponse>> RecoverPassword([Body] SendEmailRequest sendEmailRequest, string apiKey);
    }
}
