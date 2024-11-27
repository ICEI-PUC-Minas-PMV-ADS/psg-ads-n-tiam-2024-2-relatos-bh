using RelataBH.Database;
using RelataBH.Model.Relato;

namespace RelataBH.Service.Relato.Feedback
{
    public class IFeedbackServiceImpl(RelatoContext context) : IFeedbackService
    {
        public async Task<int> Dislike(int relatoId)
        {
            var feedback = context.Feedback.FirstOrDefault(r => r.IdRelato == relatoId);
            var dislikeCount = 0;
            if (feedback != null)
            {
                feedback.Dislike++;
                dislikeCount = feedback.Dislike;
            }
            else
            {
                var savedFeedback = await context.Feedback.AddAsync(new RelatoFeedback() { Dislike = 1, IdRelato = relatoId });
                dislikeCount = savedFeedback.Entity.Like;
            }

            await context.SaveChangesAsync();
            return dislikeCount;
        }

        public async Task<int> Like(int relatoId)
        {
            var feedback = context.Feedback.FirstOrDefault(r => r.IdRelato == relatoId);
            var likeCount = 0;
            if (feedback != null)
            {
                feedback.Like++;
                likeCount = feedback.Like;
            }
            else
            {
                var savedFeedback = await context.Feedback.AddAsync(new RelatoFeedback() { Like = 1, IdRelato = relatoId });
                likeCount = savedFeedback.Entity.Like;
            }

            await context.SaveChangesAsync();
            return likeCount;
        }
    }
}
