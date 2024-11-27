using Refit;

namespace RelataBH.Service.Auth.Domain
{
    public class AuthUserRequest
    {
        [AliasAs("email")]
        public required string Email { get; set; }
        [AliasAs("password")]
        public required string Password { get; set; }
        [AliasAs("returnSecureToken")]
        public bool ReturnSecureToken { get; set; } = true;
        [AliasAs("name")]
        public string? Name { get; set; }
    }
}
