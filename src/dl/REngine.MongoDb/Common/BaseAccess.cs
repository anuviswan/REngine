using MongoDB.Driver;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace REngine.MongoDb.Common
{
    public class BaseAccess
    {
        public IMongoCollection<Model.UserEntity> UserCollection
        {
            get
            {
                return DbFactory.Instance.Database.GetCollection<Model.UserEntity>(Common.Constants.COLLECTION_USERS);
            }
        }
    }
}
