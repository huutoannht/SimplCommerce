using System.Threading.Tasks;
using SimplCommerce.Module.Catalog.Models;

namespace SimplCommerce.Module.Catalog.Services
{
    public interface IPromotionService
    {
        long Create(Core.Models.Media product);

        void Update(Core.Models.Media product);

        Task Delete(Core.Models.Media product);
    }
}
