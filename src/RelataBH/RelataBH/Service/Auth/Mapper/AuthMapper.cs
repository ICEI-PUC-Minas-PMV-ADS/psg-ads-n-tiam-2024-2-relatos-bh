using RelataBH.Model;
using RelataBH.Service.Auth.Domain;

namespace RelataBH.Service.Auth.Mapper
{
    internal class AuthMapper
    {
        internal static AppUser AuthUserToUser(AuthUserRequest userRequest, AuthUserResponse userResponse) => new()
        {
            id = Convert.ToInt32(userResponse.LocalId),
            idFireBase = Convert.ToInt32(userResponse.LocalId),
            email = userResponse.Email,
            createdat = (int)DateTime.Now.Ticks,
            nome = userRequest.Name,
        };
    }
}
