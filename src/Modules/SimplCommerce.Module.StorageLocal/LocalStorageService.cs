﻿using System.IO;
using System.Threading.Tasks;
using SimplCommerce.Infrastructure;
using SimplCommerce.Module.Core.Services;
using SixLabors.ImageSharp;
using SixLabors.ImageSharp.Formats.Jpeg;
using SixLabors.ImageSharp.Processing;

namespace SimplCommerce.Module.StorageLocal
{
    public class LocalStorageService : IStorageService
    {
        private const string MediaRootFoler = "user-content";

        public string GetMediaUrl(string fileName)
        {
            return $"/{MediaRootFoler}/{fileName}";
        }

        public async Task SaveMediaAsync(Stream mediaBinaryStream, string fileName, string mimeType = null, string typeCrop = null)
        {
            var filePath = Path.Combine(GlobalConfiguration.WebRootPath, MediaRootFoler, fileName).Replace("png", "jpg", System.StringComparison.OrdinalIgnoreCase);

            using (var image = Image.Load(mediaBinaryStream))
            {
                //if (typeCrop == "product")
                //{
                //    image.Mutate(x => x
                //.Resize(180, 180));
                //}

                image.Save(filePath);

            }
            //using (var output = new FileStream(filePath, FileMode.Create))
            //{
            //    await mediaBinaryStream.CopyToAsync(output);
            //}

        }

        public async Task DeleteMediaAsync(string fileName)
        {
            var filePath = Path.Combine(GlobalConfiguration.WebRootPath, MediaRootFoler, fileName);
            if (File.Exists(filePath))
            {
                await Task.Run(() => File.Delete(filePath));
            }
        }
    }
}
