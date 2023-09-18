using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using demo1.Models;
using Vehicle.Models;
using demo1.Repositories;

namespace Vehical_config_1.Repository
{
    public class SQLSegmentRepository : ISegmentRepository
    {
        private readonly ApplicationDbContext context;

        public SQLSegmentRepository(ApplicationDbContext context)
        {
            this.context = context;
        }

        public async Task<ActionResult<IEnumerable<Segment>>> GetAllSegment()
        {
            if (context.Segments == null)
            {
                return null;
            }
            return await context.Segments.ToListAsync();


        }

        public async Task<int> GetQty(int seg_id)
        {
            var segment = await context.Segments.FirstOrDefaultAsync(s => s.Seg_id == seg_id);

            if (segment == null)
            {
                // You can return an appropriate status code or value when the segment is not found
                return 0;
            }

            return segment.Qty;
        }

        public async Task<ActionResult<Segment>?> GetSegment(int Id)
        {
            var segment = await context.Segments.FindAsync(Id);

            if (segment == null)
            {
                return null;
            }

            return new ActionResult<Segment>(segment);
        }



    }
}
