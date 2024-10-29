using Refit;



namespace RelataBH.Service.Auth.Domain.RecoverPassword
{
    public class SendEmailResponse
    {
        [AliasAs("email")]
        public required string Email { get; set; }

    }
}
