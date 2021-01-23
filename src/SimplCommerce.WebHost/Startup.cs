using System.Text.Encodings.Web;
using System.Text.Unicode;
using MediatR;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc.Razor;
using Microsoft.AspNetCore.Mvc.ViewFeatures.Internal;
using Microsoft.AspNetCore.Razor.TagHelpers;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.WebEncoders;
using Swashbuckle.AspNetCore.Swagger;
using SimplCommerce.Infrastructure;
using SimplCommerce.Infrastructure.Data;
using SimplCommerce.Infrastructure.Modules;
using SimplCommerce.Infrastructure.Web;
using SimplCommerce.Module.Core.Data;
using SimplCommerce.Module.Localization.Extensions;
using SimplCommerce.Module.Localization.TagHelpers;
using SimplCommerce.WebHost.Extensions;
using Microsoft.Extensions.FileProviders;
using System.IO;
using Hangfire;
using System;
using SimplCommerce.WebHost.Extensions.Jobs;
using Microsoft.AspNetCore.Rewrite;
using Microsoft.AspNetCore.ResponseCompression;
using System.IO.Compression;
using System.Collections.Generic;
using RouteUrlRedirector;

namespace SimplCommerce.WebHost
{
    public class Startup
    {
        private readonly IHostingEnvironment _hostingEnvironment;
        private readonly IConfiguration _configuration;

        public Startup(IConfiguration configuration, IHostingEnvironment hostingEnvironment)
        {
            _configuration = configuration;
            _hostingEnvironment = hostingEnvironment;
        }

        public void ConfigureServices(IServiceCollection services)
        {
            Infrastructure.GlobalConfiguration.WebRootPath = _hostingEnvironment.WebRootPath;
            Infrastructure.GlobalConfiguration.ContentRootPath = _hostingEnvironment.ContentRootPath;
            services.AddModules(_hostingEnvironment.ContentRootPath);

            services.Configure<CookiePolicyOptions>(options =>
            {
                // This lambda determines whether user consent for non-essential cookies is needed for a given request.
                options.CheckConsentNeeded = context => true;
                options.MinimumSameSitePolicy = SameSiteMode.None;
            });

            services.AddCustomizedDataStore(_configuration);
            services.AddCustomizedIdentity(_configuration);
            services.AddHttpClient();
            services.AddTransient(typeof(IRepository<>), typeof(Repository<>));
            services.AddTransient(typeof(IRepositoryWithTypedId<,>), typeof(RepositoryWithTypedId<,>));

            services.AddCustomizedLocalization();

            services.AddCustomizedMvc(Infrastructure.GlobalConfiguration.Modules);
            services.Configure<RazorViewEngineOptions>(
                options => { options.ViewLocationExpanders.Add(new ThemeableViewLocationExpander()); });
            services.Configure<WebEncoderOptions>(options =>
            {
                options.TextEncoderSettings = new TextEncoderSettings(UnicodeRanges.All);
            });
            services.AddScoped<ITagHelperComponent, LanguageDirectionTagHelperComponent>();
            // services.AddScoped<ITagHelper, InlineStyleTagHelper>();
            services.AddTransient<IRazorViewRenderer, RazorViewRenderer>();
            services.AddAntiforgery(options => options.HeaderName = "X-XSRF-Token");
            services.AddSingleton<AutoValidateAntiforgeryTokenAuthorizationFilter, CookieOnlyAutoValidateAntiforgeryTokenAuthorizationFilter>();
            services.AddCloudscribePagination();

            var sp = services.BuildServiceProvider();
            var moduleInitializers = sp.GetServices<IModuleInitializer>();
            foreach (var moduleInitializer in moduleInitializers)
            {
                moduleInitializer.ConfigureServices(services);
            }

            services.AddScoped<ServiceFactory>(p => p.GetService);
            services.AddScoped<IMediator, SequentialMediator>();
            services.AddSwaggerGen(c =>
            {
                c.SwaggerDoc("v1", new Info { Title = "SimplCommerce API", Version = "v1" });
            });
            services.AddHangfire(x => x.UseSqlServerStorage(_configuration.GetConnectionString("DefaultConnection")));
            services.AddHangfireServer();
            services.AddResponseCompression(options =>
            {
                IEnumerable<string> MimeTypes = new[]
               {
                     // General
                     "text/plain",
                     "text/html",
                     "text/css",
                     "font/woff2",
                     "application/javascript",
                     "image/x-icon",
                     "image/png"
                 };
                options.EnableForHttps = true;
                options.MimeTypes = MimeTypes;
                options.Providers.Add<GzipCompressionProvider>();
            });
            services.Configure<GzipCompressionProviderOptions>(options =>
            {
                options.Level = CompressionLevel.Fastest;
            });
            services.AddResponseCaching();
        }

        public void Configure(IApplicationBuilder app, IHostingEnvironment env,
            IBackgroundJobClient backgroundJobs)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
                app.UseDatabaseErrorPage();
            }
            else
            {
                app.UseWhen(
                    context => !context.Request.Path.StartsWithSegments("/api"),
                    a => a.UseExceptionHandler("/Home/Error")
                );
                app.UseHsts();
                app.UseStaticFiles(new StaticFileOptions
                {
                    FileProvider = new PhysicalFileProvider(Path.Combine(Directory.GetCurrentDirectory(), @".well-known")),
                    RequestPath = new PathString("/.well-known"),
                    ServeUnknownFileTypes = true // serve extensionless file
                });
                app.UseRewriter(new RewriteOptions().AddRedirectToHttps(StatusCodes.Status301MovedPermanently, 443));
            }
            using (StreamReader apacheModRewriteStreamReader =
            File.OpenText("ApacheModRewrite.txt"))
            using (StreamReader iisUrlRewriteStreamReader =
                File.OpenText("IISUrlRewrite.xml"))
            {
                var options = new RewriteOptions()
                    .AddRedirectToHttpsPermanent()
                    //.AddRedirect("^dell-latitude-e7440", "laptop-cu-re")
                    .AddRedirect("^tu-van-cau-hinh-may-tinh-thiet-ke-do-hoa-manh-chuyen-nghiep-2019", "/laptop-do-hoa-ky-thuat")
                    .AddRedirect("^tong-hop-cac-dong-may-tinh-laptop-asus-mini-tot-nhat-nam-2019", "/laptop-hoc-tap-van-phong")
                    .AddRedirect("^tong-hop-cac-dong-laptop-dell-core-i5-cu-tot-nhat-gia-re-nhat", "/laptop-dell-cu")
                    .AddRedirect("^tong-hop-cac-dong-laptop-dell-core-i3-cu-tot-nhat-gia-re-nhat", "/laptop-dell-cu")
                    .AddRedirect("^tieu-chi-de-chon-mua-laptop-do-hoa-cu", "/laptop-do-hoa-ky-thuat")
                    .AddRedirect("^sinh-vien-dan-ky-thuat-nen-dung-laptop-nao-2019", "/laptop-do-hoa-ky-thuat")
                    .AddRedirect("^nhung-dieu-gi-lam-nen-ten-tuoi-thuong-hieu-laptop-msi-cu", "/laptop-msi-cu")
                    .AddRedirect("^mua-laptop-dell-gia-re-chinh-hang-o-dau-da-nang", "/laptop-dell-cu")
                    .AddRedirect("^may-tinh-laptop-dell-la-thuong-hieu-cua-nuoc-nao-san-xuat-o-dau", "/laptop-dell-cu")
                    .AddRedirect("^dia-chi-mua-ban-cuc-sac-cu-sac-laptop-dell-o-dau-tai-da-nang", "/laptop-dell-cu")
                    .AddRedirect("^dan-van-phong-nen-mua-nen-dung-laptop-loai-nao-la-tot-nhat", "/laptop-hoc-tap-van-phong")
                    .AddRedirect("^co-nen-mua-laptop-hp-cu-hay-khong", "/laptop-hp-cu")
                    .AddRedirect("^co-nen-mua-laptop-dell-precision-m4800", "/laptop-dell-cu")
                    .AddRedirect("^chon-mua-laptop-cu-tai-da-nang-o-dau-la-tot-nhat", "/")
                    .AddRedirect("^cach-test-kiem-tra-may-tinh-laptop-asus-chinh-hang", "/laptop-asus-cu")
                    .AddRedirect("^cach-chon-mua-may-tinh-xach-tay-lenovo-cu-nhu-the-nao", "/laptop-lenovo-cu")
                    .AddRedirect("^cac-dong-may-tinh-laptop-hp-nao-tot-nhat-ben-nhat-hien-nay", "/laptop-hoc-tap-van-phong")
                    .AddRedirect("^cac-dong-may-tinh-de-ban-co-cau-hinh-dung-cho-do-hoa-thiet-ke", "/laptop-do-hoa-ky-thuat")
                    .AddRedirect("^cac-dong-laptop-asus-gia-re-tai-cua-hang-laptop-cu-da-nang", "/laptop-asus-cu")
                    .AddRedirect("^cac-dong-laptop-asus-choi-game-gia-re-nhat-2019", "/laptop-gaming")
                    .AddRedirect("^lam-viec-van-phong-thi-nen-chon-mua-laptop-cu-loai-nao", "/laptop-hoc-tap-van-phong")
                    .AddRewrite(@"^rewrite-rule/(\d+)/(\d+)", "rewritten?var1=$1&var2=$2",
                        skipRemainingRules: true)
                    .AddApacheModRewrite(apacheModRewriteStreamReader)
                    .AddIISUrlRewrite(iisUrlRewriteStreamReader);

                app.UseRewriter(options);
            }
            app.UseResponseCaching();
            //app.Use(async (context, next) =>
            //{
            //    context.Response.GetTypedHeaders().CacheControl =
            //        new Microsoft.Net.Http.Headers.CacheControlHeaderValue()
            //        {
            //            Public = true,
            //            MaxAge = TimeSpan.FromSeconds(31557600)
            //        };
            //    context.Response.Headers[Microsoft.Net.Http.Headers.HeaderNames.Vary] =
            //        new string[] { "Accept-Encoding" };

            //    await next();
            //});
            app.UseHangfireDashboard();
            RecurringJob.AddOrUpdate(() => HealCheckJob.HealBeatAsync(), Cron.Minutely);
            app.UseWhen(
                context => !context.Request.Path.StartsWithSegments("/api"),
                a => a.UseStatusCodePagesWithReExecute("/Home/ErrorWithCode/{0}")
            );

            app.UseHttpsRedirection();
            app.UseCustomizedStaticFiles(env);
            app.UseSwagger();
            app.UseSwaggerUI(c =>
            {
                c.SwaggerEndpoint("/swagger/v1/swagger.json", "SimplCommerce API V1");
            });

            app.UseCookiePolicy();
            app.UseCustomizedIdentity();
            app.UseCustomizedRequestLocalization();
            app.UseCustomizedMvc();
            app.UseResponseCompression();

            var moduleInitializers = app.ApplicationServices.GetServices<IModuleInitializer>();
            foreach (var moduleInitializer in moduleInitializers)
            {
                moduleInitializer.Configure(app, env);
            }
        }
    }
}
