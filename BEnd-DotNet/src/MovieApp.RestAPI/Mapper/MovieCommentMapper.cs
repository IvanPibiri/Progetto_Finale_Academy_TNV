using MovieApp.Core.Model;
using MovieApp.RestAPI.Model;

namespace MovieApp.RestAPI.Mapper
{
    public static class MovieCommentMapper
    {
        public static MovieCommentDTO From(MovieComment movieComment)
        {
            return new()
            {
                Id = movieComment.Id,
                User_Id = movieComment.User_Id,
                Movie_Id = movieComment.Movie_Id,
                Comment = movieComment.Comment
            };
        }

        public static MovieComment From(MovieCommentDTO movieComment)
        {
            return new (movieComment.Id, movieComment.User_Id, movieComment.Movie_Id, movieComment.Comment);
        }
    }
}
