using demo1.Models;
using demo1.Repositories;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;
using demo1.Models;
using Vehicle.Models;

namespace Vehical_config_1.Repository
{
    public class SQLManufacturerRepository : IManufacturerRepository
    {
        private readonly ApplicationDbContext context;

        public SQLManufacturerRepository(ApplicationDbContext context)
        {
            this.context = context;
        }

        public async Task<ActionResult<IEnumerable<Manufacturer>?>> GetAllManufacturer()
        {
            if (context.Manufacturers == null)
            {
                return null;
            }

            return await context.Manufacturers.ToListAsync();
        }

        public async Task<ActionResult<IEnumerable<Manufacturer>>> GetAllManufacturerbyid(int seg)

        {
            var values =  await context.Manufacturers
                .Where(m => m.Seg_id == seg)
                .ToListAsync();

            return values;
        }


    }

}
