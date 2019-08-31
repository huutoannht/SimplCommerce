using System.Threading.Tasks;
using SimplCommerce.Infrastructure.Data;
using SimplCommerce.Module.Catalog.Models;
using SimplCommerce.Module.Core.Models;
using SimplCommerce.Module.Core.Services;

namespace SimplCommerce.Module.Catalog.Services
{
    public class PromotionService : IPromotionService
    {

        private readonly IRepository<Core.Models.Media> _mediaRepository;
        private readonly IEntityService _entityService;

        public PromotionService(IRepository<Core.Models.Media> mediaRepository, IEntityService entityService)
        {
            _mediaRepository = mediaRepository;
            _entityService = entityService;
        }

        public long Create(Core.Models.Media media)
        {
            using (var transaction = _mediaRepository.BeginTransaction())
            {
                _mediaRepository.Add(media);
                _mediaRepository.SaveChanges();

                transaction.Commit();
                return media.Id;
            }
        }

        public Task Delete(Media product)
        {
            throw new System.NotImplementedException();
        }

        public void Update(Media product)
        {
            throw new System.NotImplementedException();
        }
    }
}
