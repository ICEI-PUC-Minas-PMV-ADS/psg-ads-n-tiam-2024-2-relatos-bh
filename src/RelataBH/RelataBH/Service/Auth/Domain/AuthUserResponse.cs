using Refit;

namespace RelataBH.Service.Auth.Domain
{
    public class AuthUserResponse
    {
        [AliasAs("idToken")]
        public string IdToken { get; set; } = "";
        [AliasAs("email")]
        public string Email { get; set; } = "";
        [AliasAs("refreshToken")]
        public string RefreshToken { get; set; } = "";
        [AliasAs("expiresIn")]
        public string ExpiresIn { get; set; } = "";
        [AliasAs("localId")]
        public string LocalId { get; set; } = "";
    }
}
