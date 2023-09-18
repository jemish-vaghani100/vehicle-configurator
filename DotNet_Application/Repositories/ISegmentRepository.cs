using demo1.Models;
using Microsoft.AspNetCore.Mvc;

namespace demo1.Repositories
{
    public interface ISegmentRepository
    {
        Task<ActionResult<Segment>?> GetSegment(int Id);
        Task<ActionResult<IEnumerable<Segment>>> GetAllSegment();

        Task<int> GetQty(int seg_id);
    }
}
