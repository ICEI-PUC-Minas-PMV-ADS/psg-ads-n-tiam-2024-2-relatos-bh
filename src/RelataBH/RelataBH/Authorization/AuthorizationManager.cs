using System.IdentityModel.Tokens.Jwt;
using System.Net.Http.Headers;

namespace RelataBH.Authorization
{
    public class AuthorizationManager
    {
        public static string? GetUserFromToken(string token)
        {
            try {
                if (AuthenticationHeaderValue.TryParse(token, out var headerValue))
                {
                    var jwtToken = headerValue.Parameter;
                    var userData = new JwtSecurityToken(jwtToken);

                    //return userData.Payload.GetValueOrDefault("user_id", "") as string ?? "";
                    return userData.Payload.GetValueOrDefault("email", "") as string ?? "";
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
