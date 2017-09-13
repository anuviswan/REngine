using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Http.Cors;
using System.Web.Mvc;

namespace REngine.API.Controllers
{
    [EnableCors(origins: "http://localhost:4200", headers: "*", methods: "*")]
    public class DashboardController : BaseController
    {
        #region Private Instance
        private Core.Abstract.IUser _UserInstance;
        #endregion
        public DashboardController(Core.Abstract.IUser UserInstance)
        {
            _UserInstance = UserInstance;
        }
        // GET: Dashboard
        public Models.ReturnValue<Models.Dashboard> GetDashboardResults()
        {
            var result = new API.Models.Dashboard()
            {
                TotalUsers = _UserInstance.GetAll().Count()
            };
            return base.SendSuccessMsg<Models.Dashboard>(result,"Dashboard");
        }
    }
}