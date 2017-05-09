using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using scbwisummer2017.Data;
using scbwisummer2017.Models;
using scbwisummer2017.Services;
using WebApiContrib.Core.Formatter.Csv;
using Microsoft.Net.Http.Headers;
using Microsoft.AspNetCore.SpaServices.Webpack;

namespace scbwisummer2017
{
    public class Startup
    {
        public Startup(IHostingEnvironment env)
        {
            var builder = new ConfigurationBuilder()
                .SetBasePath(env.ContentRootPath)
                .AddJsonFile("appsettings.json", optional: false, reloadOnChange: true)
                .AddJsonFile($"appsettings.{env.EnvironmentName}.json", optional: true);

            if (env.IsDevelopment())
            {
                // For more details on using the user secret store see http://go.microsoft.com/fwlink/?LinkID=532709
                builder.AddUserSecrets<Startup>();
            }

            builder.AddEnvironmentVariables();
            Configuration = builder.Build();
        }

        public IConfigurationRoot Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            // Add framework services.
            services.AddDbContext<ApplicationDbContext>(options =>
                options.UseSqlite(Configuration.GetConnectionString("Scbwi")));

            services.AddIdentity<ApplicationUser, IdentityRole>()
                .AddEntityFrameworkStores<ApplicationDbContext>()
                .AddDefaultTokenProviders();

            var formatOptions = new CsvFormatterOptions
            {
                CsvDelimiter = ",",
                UseSingleLineHeaderInCsv = true
            };

            services.AddMvc(options =>
            {
                options.OutputFormatters.Add(new CsvOutputFormatter(formatOptions));
                options.FormatterMappings.SetMediaTypeMappingForFormat("csv", MediaTypeHeaderValue.Parse("text/csv"));
            });

            // Add application services.
            services.AddTransient<IEmailSender, AuthMessageSender>();
            services.AddTransient<ISmsSender, AuthMessageSender>();
            services.AddTransient<ITotalCalculator, TotalCalculator>();

            services.AddOptions();

            services.Configure<Secrets>(opts =>
            {
                opts.sendgridkey = Configuration["sendgrid"];
                opts.paypaltoken = Configuration["braintree"];
            });

            services.Configure<EmailOptions>(options =>
            {
                options.ccra = Configuration["ccra"] == "true";
                options.sendtoself = Configuration["sendtoself"] == "true";
                options.supportemail = Configuration["supportemail"];
                options.supportemailname = Configuration["supportemailname"];
                options.self = Configuration["selfemail"];
            });
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IHostingEnvironment env, ILoggerFactory loggerFactory)
        {
            loggerFactory.AddConsole(Configuration.GetSection("Logging"));
            loggerFactory.AddDebug();

            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
                app.UseDatabaseErrorPage();

                app.UseWebpackDevMiddleware(/*new WebpackDevMiddlewareOptions
                {
                    HotModuleReplacement = true,
                    ReactHotModuleReplacement = true
                }*/);
            }
            else
            {
                app.UseExceptionHandler("/Home/Error");
            }

            app.UseStaticFiles();

            app.UseIdentity();

            app.UseMvc(routes =>
            {
                routes.MapRoute(
                    name: "account",
                    template: "Account/{action}/{id?}");

                routes.MapRoute(
                    name: "admin",
                    template: "admin/{action}/{id?}");

                routes.MapRoute(
                    name: "register",
                    template: "register/{*page}",
                    defaults: new { controller = "Home", action = "Index" });

                routes.MapRoute(
                    name: "dashboard",
                    template: "dashboard/{*page}",
                    defaults: new { controller = "Home", action = "Index" });

                routes.MapRoute(
                    name: "default",
                    template: "{controller=Home}/{action=Index}/{id?}");

                routes.MapSpaFallbackRoute(
                    name: "spa-fallback",
                    defaults: new { controller = "Home", action = "Index" });
            });
        }
    }
}
