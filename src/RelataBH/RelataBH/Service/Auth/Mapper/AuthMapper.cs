using RelataBH.Model;
using RelataBH.Service.Auth.Domain;

namespace RelataBH.Service.Auth.Mapper
{
    internal class AuthMapper
    {
        internal static User AuthUserToUser(AuthUserRequest userRequest, AuthUserResponse userResponse) => new(
            id: userResponse.LocalId, 
            email: userResponse.Email, 
            name: userRequest.Name ?? "",
            token: userResponse.IdToken
        );
    }
}
