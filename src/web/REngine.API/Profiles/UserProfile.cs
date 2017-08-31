using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace REngine.API.Profiles
{
    public class UserProfile : AutoMapper.Profile
    {
        public UserProfile()
        {
            CreateMap<REngine.API.Models.UserIdentity, REngine.Model.User.Identity>()
                            .ReverseMap();
            CreateMap<REngine.Model.User.Identity, REngine.MongoDb.Model.UserEntity>()
                            .ReverseMap();
        }
    }
}