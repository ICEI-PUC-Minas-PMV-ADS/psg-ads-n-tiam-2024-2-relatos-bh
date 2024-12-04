using Microsoft.AspNetCore.Mvc;
using RelataBH.Service.Relato.Domain;
using RelataBH.Service.Relato.Feedback;

namespace RelataBH.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class RelatoFeedbackController(IFeedbackService feedbackService) : ControllerBase
    {
        [HttpPost("like")]
        public async Task<IActionResult> LikeRelato(RelatoFeedbackRequest body)
        {
            int likeCount = await feedbackService.Like(body.IdRelato);
            return Ok(likeCount);
        }

        [HttpPost("dislike")]
        public async Task<IActionResult> DislikeRelato(RelatoFeedbackRequest body)
        {
            int dislikeCount = await feedbackService.Dislike(body.IdRelato);
            return Ok(dislikeCount);
        }
    }
}
