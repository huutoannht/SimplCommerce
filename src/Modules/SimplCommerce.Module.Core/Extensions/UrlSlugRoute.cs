﻿using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Routing;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using SimplCommerce.Infrastructure.Data;
using SimplCommerce.Module.Core.Models;

namespace SimplCommerce.Module.Core.Extensions
{
    public class UrlSlugRoute : IRouter
    {
        private readonly IRouter _target;

        public UrlSlugRoute(IRouter target)
        {
            _target = target;
        }

        public async Task RouteAsync(RouteContext context)
        {
            var requestPath = context.HttpContext.Request.Path.Value;

            if (!string.IsNullOrEmpty(requestPath) && requestPath[0] == '/')
            {
                // Trim the leading slash
                requestPath = requestPath.Substring(1);
            }

            var urlSlugRepository = context.HttpContext.RequestServices.GetService<IRepository<Entity>>();

            // Get the slug that matches.
            var listUrlSlug= await urlSlugRepository.Query().Include(x => x.EntityType).Where(x => x.Slug == requestPath).ToListAsync();
            Entity urlSlug = listUrlSlug.FirstOrDefault();
            if (listUrlSlug.Count > 1)
            {
                urlSlug = listUrlSlug.Where(m => m.EntityTypeId == "Product" ).FirstOrDefault();
                if (urlSlug==null)
                {
                    urlSlug = listUrlSlug.Where(m =>  m.EntityTypeId == "Page").FirstOrDefault();
                }
                if (urlSlug == null)
                {
                    urlSlug = listUrlSlug.Where(m =>  m.EntityTypeId == "NewsItem" ).FirstOrDefault();
                }

            }

            // Invoke MVC controller/action
            var oldRouteData = context.RouteData;
            var newRouteData = new RouteData(oldRouteData);
            newRouteData.Routers.Add(_target);

            // If we got back a null value set, that means the URI did not match)
            if (urlSlug == null)
            {
                return;
            }

            newRouteData.Values["area"] = urlSlug.EntityType.AreaName;
            newRouteData.Values["controller"] = urlSlug.EntityType.RoutingController;
            newRouteData.Values["action"] = urlSlug.EntityType.RoutingAction;
            newRouteData.Values["id"] = urlSlug.EntityId;

            context.RouteData = newRouteData;
            await _target.RouteAsync(context);
        }

        public VirtualPathData GetVirtualPath(VirtualPathContext context)
        {
            return null;
        }
    }
}
