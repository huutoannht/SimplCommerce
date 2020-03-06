using System.ComponentModel.DataAnnotations;
using SimplCommerce.Infrastructure.Models;

namespace SimplCommerce.Module.Core.Models
{
    public class ShoppingCartRoom : EntityBase
    {
        public ShoppingCartRoom()
        {

        }

        public ShoppingCartRoom(int id)
        {
            Id = id;
        }
        public int Id { get; set; }
        public string Name { get; set; }
    }
}
