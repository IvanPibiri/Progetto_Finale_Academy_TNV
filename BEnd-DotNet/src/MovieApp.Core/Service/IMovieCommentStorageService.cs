using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using MovieApp.Core.Model;

namespace MovieApp.Core.Service
{
    public interface IMovieCommentStorageService 
    {
        MovieComment CreateMovieComment(int userId, int movieId, string comment);

        List<MovieComment> GetAllMovieComments();

        MovieComment? GetMovieCommentById(int movieCommentId);

        MovieComment? UpdateMovieCommentById(int id, MovieComment movieWithUpdatedProperties);

        bool DeleteMovieCommentById(int movieCommentId);





    }
}
