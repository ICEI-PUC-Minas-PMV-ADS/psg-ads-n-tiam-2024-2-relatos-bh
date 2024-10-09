using RelataBH.Model;
using RelataBH.Service.Auth.Domain;

namespace RelataBH.Service.Auth
{
    public interface IAuthService
    {
        public Task<User> Register(AuthUserRequest userRequest);
        public Task<AuthUserResponse> Login(AuthUserRequest userRequest);
        public Task<AuthUserResponse> RecoverPassword(AuthUserRequest userRequest);
    }
}
