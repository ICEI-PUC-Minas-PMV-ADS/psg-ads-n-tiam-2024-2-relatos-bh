using RelataBH.Model;
using RelataBH.Service.Auth.Domain;
using RelataBH.Service.Auth.Domain.RecoverPassword;

namespace RelataBH.Service.Auth
{
    public interface IAuthService
    {
        public Task<User> Register(AuthUserRequest userRequest);
        public Task<AuthUserResponse> Login(AuthUserRequest userRequest);
        public Task<SendEmailResponse> RecoverPassword(SendEmailRequest Request);
    }
}
