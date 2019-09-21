using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Razor.TagHelpers;
using Microsoft.Extensions.Caching.Memory;
using Microsoft.Extensions.FileProviders;
using Microsoft.Extensions.Hosting.Internal;
using Microsoft.Extensions.Primitives;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;

namespace SimplCommerce.WebHost.Extensions.TagHelperExtensions
{
    [HtmlTargetElement("inline-script")]
    public class InlineScriptTagHelper : TagHelper
    {
        private IHostingEnvironment HostingEnvironment { get; }
        private IMemoryCache Cache { get; }
        public InlineScriptTagHelper(IHostingEnvironment hostingEnvironment, IMemoryCache cache)
        {
            HostingEnvironment = hostingEnvironment;
            Cache = cache;
        }
        [HtmlAttributeName("src")]
        public string Src { get; set; }

        public override async Task ProcessAsync(TagHelperContext context, TagHelperOutput output)
        {
            var path = Src;
            if (string.IsNullOrEmpty(path))
            {
                output.SuppressOutput();
                return;
            }

            // Get the value from the cache, or compute the value and add it to the cache
            var fileContent = await Cache.GetOrCreateAsync("InlineScriptTagHelper-" + path, async entry =>
            {
                IFileProvider fileProvider = HostingEnvironment.WebRootFileProvider;
                IChangeToken changeToken = fileProvider.Watch(path);

                entry.SetPriority(CacheItemPriority.NeverRemove);
                entry.AddExpirationToken(changeToken);

                IFileInfo file = fileProvider.GetFileInfo(path);
                if (file == null || !file.Exists)
                    return null;

                return await ReadFileContent(file);
            });

            if (fileContent == null)
            {
                output.SuppressOutput();
                return;
            }
            output.TagName = "script";
            output.Content.SetHtmlContent(fileContent);
            output.TagMode = TagMode.StartTagAndEndTag;
        }
        private static async Task<string> ReadFileContent(IFileInfo file)
        {
            using (var stream = file.CreateReadStream())
            using (var textReader = new StreamReader(stream))
            {
                return await textReader.ReadToEndAsync();
            }
        }
    }
}
