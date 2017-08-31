using Microsoft.Practices.Unity;
using System.Web.Http;
using Unity.WebApi;

namespace REngine.API
{
    public static class UnityConfig
    {
        public static void RegisterComponents()
        {
			var container = new UnityContainer();

            // register all your components with the container here
            // it is NOT necessary to register your controllers

            container.RegisterType<REngine.Core.Abstract.IUser, REngine.Core.Concrete.User>();
            container.RegisterType<REngine.Data.IUser, REngine.MongoDb.Concrete.User>();

            GlobalConfiguration.Configuration.DependencyResolver = new UnityDependencyResolver(container);
        }
    }
}