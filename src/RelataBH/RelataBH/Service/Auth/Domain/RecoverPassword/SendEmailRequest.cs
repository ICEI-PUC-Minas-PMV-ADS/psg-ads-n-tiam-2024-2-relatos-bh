using Refit;

namespace RelataBH.Service.Auth.Domain.RecoverPassword

{
    public class SendEmailRequest
    {
        [AliasAs("requestType")]
        public required string RequestType { get; set; }

        [AliasAs("email")]
        public required string Email { get; set; }
    }
}
