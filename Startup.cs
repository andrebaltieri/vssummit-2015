using Microsoft.AspNet.Builder;
using Microsoft.Framework.DependencyInjection;
using Abt.Data;
using Abt.Repositories;
using Abt.Repositories.Contracts;

namespace Abt
{
    public class Startup
    {
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddMvc();

            services.AddTransient<IStudentRepository, StudentRepository>();

            services.AddEntityFramework()
                .AddInMemoryStore()
                .AddDbContext<AbtDataContext>();
        }

        public void Configure(IApplicationBuilder app)
        {
            app.UseStaticFiles();

            app.UseMvc(routes =>
                {
                    routes.MapRoute(
                        name: "api",
                        template: "{controller}/{id?}");
                });
        }
    }
}