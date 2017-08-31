using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

using MongoDB.Driver;

namespace REngine.MongoDb.Concrete
{
    public class User : MongoDb.Common.BaseAccess, Data.IUser
    {
        public bool Add(REngine.Model.User.Identity UserIdentity)
        {
            var userToAdd = AutoMapper.Mapper.Map<MongoDb.Model.UserEntity>(UserIdentity);
            base.UserCollection.InsertOne(userToAdd);
            return true;
        }

        public REngine.Model.User.Identity GetUser(string Username)
        {
            var userFilter = Builders<MongoDb.Model.UserEntity>.Filter.Eq(x =>x.Username, Username);
            var result = base.UserCollection.FindSync<Model.UserEntity>(userFilter).ToList<Model.UserEntity>().FirstOrDefault();
            return AutoMapper.Mapper.Map<REngine.Model.User.Identity>(result);
        }

        public IList<REngine.Model.User.Identity> GetAll()
        {
            var emptyFilter = Builders<Model.UserEntity>.Filter.Empty;
            var result = base.UserCollection
                                    .FindSync<Model.UserEntity>(emptyFilter)
                                            .ToList<Model.UserEntity>();
            return AutoMapper.Mapper.Map<IList<REngine.Model.User.Identity>>(result);
        }

        public REngine.Model.User.Identity ValidateUser(REngine.Model.User.Identity User, out bool IsAuthenticated)
        {
            var user = AutoMapper.Mapper.Map<MongoDb.Model.UserEntity>(User);
            var userFilter = Builders<MongoDb.Model.UserEntity>.Filter
                               .Eq(x => x.Username, user.Username);
            var passwordFilter = Builders<MongoDb.Model.UserEntity>.Filter
                                .Eq(x => x.Password, user.Password);
            var Result = base.UserCollection
                                .FindSync<Model.UserEntity>(userFilter & passwordFilter)
                                .ToList<Model.UserEntity>()
                                .FirstOrDefault();
            IsAuthenticated = (Result != default(Model.UserEntity));
            return AutoMapper.Mapper.Map<REngine.Model.User.Identity>(Result);
        }
    }
}
