using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;


namespace REngine.API.Hub
{
    public class DashboardHub : Microsoft.AspNet.SignalR.Hub
    {
        public void Announce()
        {
            var Result = new Models.Dashboard();
            Result.TotalUsers = 34;
            Clients.All.Announce(Result);
        }
    }
}