using RelataBH.Model;
using RelataBH.Service.Auth.Domain;

namespace RelataBH.Service.Auth.Mapper
{
    internal class AuthMapper
    {
        internal static User AuthUserToUser(AuthUserRequest userRequest, AuthUserResponse userResponse) => new()
        {
            Email = userResponse.Email,
            Name = userRequest.Name ?? "",
            createdAt = DateOnly.FromDateTime(DateTime.Now),
            IdFirebase = userResponse.LocalId,
            Token = userResponse.IdToken
        };
    }
}
