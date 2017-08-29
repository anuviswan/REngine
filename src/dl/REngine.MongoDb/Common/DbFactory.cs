using MongoDB.Driver;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace REngine.MongoDb.Common
{
    public class DbFactory
    {
        private static readonly Lazy<DbFactory> lazy = new Lazy<DbFactory>(() => new DbFactory());

        public static DbFactory Instance { get { return lazy.Value; } }
        private DbFactory()
        {
            const string ConnectionString = "mongodb://localhost:27017";
            this.Client = new MongoClient(ConnectionString);
            this.Database = Client.GetDatabase("rdb");
        }

        public MongoClient Client { get; }
        public IMongoDatabase Database { get; }

    }
}
