using Refit;

namespace RelataBH.Service.Profile.Domain
{
    public class ProfileRequest
    {
        [AliasAs("userId")]
        public required int UserId { get; set; }
    }
}
