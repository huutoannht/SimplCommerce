using System.IO;
using System.Threading.Tasks;

namespace SimplCommerce.Module.Core.Services
{
    public interface IStorageService
    {
        string GetMediaUrl(string fileName);

        Task SaveMediaAsync(Stream mediaBinaryStream, string fileName, string mimeType = null,string typeCrop=null);

        Task DeleteMediaAsync(string fileName);
    }
}
