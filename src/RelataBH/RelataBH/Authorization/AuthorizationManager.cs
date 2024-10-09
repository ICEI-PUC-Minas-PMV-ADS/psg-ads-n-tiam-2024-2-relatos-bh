using RelataBH.Model;
using System.IdentityModel.Tokens.Jwt;
using System.Net.Http.Headers;

namespace RelataBH.Authorization
{
    public class AuthorizationManager
    {
        public static User? GetUserFromToken(string token)
        {
            try {
                if (AuthenticationHeaderValue.TryParse(token, out var headerValue))
                {
                    var jwtToken = headerValue.Parameter;
                    var userData = new JwtSecurityToken(jwtToken);

                    return new User(
                        id: userData.Payload.GetValueOrDefault("user_id", "") as string ?? "",
                        email: userData.Payload.GetValueOrDefault("email", "") as string ?? ""
                    );
                }
                else
                {
                    return null;
                }
            }
            catch (Exception)
            {
                return null;
            }
        }
    }
}
