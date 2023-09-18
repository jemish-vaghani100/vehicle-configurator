using demo1.Repositories;
using Microsoft.AspNetCore.Cors;
using Microsoft.EntityFrameworkCore;
using System;
using Vehical_config_1.Repositories;
using Vehical_config_1.Repository;
using Vehicle.Models;

namespace Vehicle
{
    public class Program
    {

        public static void Main(string[] args)
        {
            var MyAllowSpecificOrigins = "_myAllowSpecificOrigins";
            var builder = WebApplication.CreateBuilder(args);

            // Add services to the container.

            builder.Services.AddCors(options =>
            {
                options.AddPolicy(name: MyAllowSpecificOrigins,
                                  builder =>
                                  {
                                      builder.WithOrigins("http://localhost:3000");
                                  });
            });

            builder.Services.AddControllers();
            builder.Services.AddTransient<IVehicleDetail,SqlVehicleDetailRepository>(); 
            builder.Services.AddTransient<ISegmentRepository,SQLSegmentRepository>();
            builder.Services.AddTransient<IAlternateComponent, SqlAlternateComponentRepo>();
            builder.Services.AddTransient<IManufacturerRepository,SQLManufacturerRepository>();
            
            builder.Services.AddTransient<IVariantRepository,SQLVariantRepository>();
            builder.Services.AddTransient<IUserRepository, SQLUserRepository>();


            builder.Services.AddDbContextPool<ApplicationDbContext>((options, context) =>
            {
                var connectionString = builder.Configuration.GetConnectionString("DefaultConnection");
                context.UseSqlServer(connectionString);

            });

            // Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
            builder.Services.AddEndpointsApiExplorer();
            builder.Services.AddSwaggerGen();

            var app = builder.Build();

            // Configure the HTTP request pipeline.
            if (app.Environment.IsDevelopment())
            {
                app.UseSwagger();
                app.UseSwaggerUI();
            }

            app.UseHttpsRedirection();
            app.UseCors(MyAllowSpecificOrigins);

            app.UseAuthorization();


            app.MapControllers();

            app.Run();
        }
    }
}