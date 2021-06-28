using System.Collections.Generic;

namespace SimplCommerce.Module.Catalog.Areas.Catalog.ViewModels
{
    public class CategoryMenuItem
    {
        public CategoryMenuItem()
        {
            ChildItems = new List<CategoryMenuItem>();
        }

        public long Id { get; set; }

        public string Name { get; set; }

        public string Slug { get; set; }

        public string Description { get; set; }
        public string Icon { get; set; }

        public CategoryMenuItem Parent { get; set; }

        public IList<CategoryMenuItem> ChildItems { get; set; }
        public int DisplayOrder { get;  set; }
        public string DescriptionEn { get;  set; }
        public string NameEn { get;  set; }

        public void AddChildItem(CategoryMenuItem childItem)
        {
            childItem.Parent = this;
            ChildItems.Add(childItem);
        }
    }
}

