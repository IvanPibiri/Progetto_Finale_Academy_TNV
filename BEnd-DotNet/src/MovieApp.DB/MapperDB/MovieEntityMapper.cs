using MovieApp.Core.Model;
using MovieApp.DB.Entities;

namespace MovieApp.DB.MapperDB
{
    public static class MovieEntityMapper
    {
        public static MovieEntity From(MovieComment movieComment)
        {
            return new()
            {
                Id = movieComment.Id,
                User_Id = movieComment.User_Id,
                Movie_Id = movieComment.Movie_Id,
                Comment = movieComment.Comment
            };
        }

        public static MovieComment From(MovieEntity movieEntity)
        {
            return new(movieEntity.Id, movieEntity.User_Id, movieEntity.Movie_Id, movieEntity.Comment);
        }



    }
}
