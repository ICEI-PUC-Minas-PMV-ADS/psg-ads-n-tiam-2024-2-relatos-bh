namespace RelataBH.Service.Relato.Feedback
{
    public interface IFeedbackService
    {
        public Task<int> Like(int relatoId);
        public Task<int> Dislike(int relatoId);
    }
}
