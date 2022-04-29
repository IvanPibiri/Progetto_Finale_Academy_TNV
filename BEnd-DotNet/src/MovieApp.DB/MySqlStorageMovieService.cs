using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using MovieApp.Core.Model;
using MovieApp.Core.Service;
using MovieApp.DB.Entities;
using MovieApp.DB.MapperDB;

namespace MovieApp.DB
{
    public class MySqlStorageMovieService : IMovieCommentStorageService
    {
        private MovieDbContext _context;
      

        public MySqlStorageMovieService()
        {
            _context = new();
            _context.Database.EnsureCreated();
        }

        /// <summary>
        /// Metodo che permette la creazione di un Movie Comment e salvarlo nel database
        /// </summary>
        /// <param name="movieId"></param>
        /// <param name="userId"></param>
        /// <param name="comment"></param>
        /// <returns></returns>
        public MovieComment CreateMovieComment(int movieId, int userId, string comment)
        {
            var movieCommentVar = new MovieEntity()
            {
                Movie_Id = movieId,
                User_Id = userId,            
                Comment = comment
            };

            var createdMovieComment = _context.MovieContex.Add(movieCommentVar);
            _context.SaveChanges();
            return MovieEntityMapper.From(createdMovieComment.Entity);
        }

        /// <summary>
        /// Metodo che permette la ricerca di un singolo id di Movie Comment, contenuto nel database
        /// </summary>
        /// <param name="moviecommentId"></param>
        /// <returns></returns>
        public MovieComment? GetMovieCommentById(int moviecommentId)
        {
            return MovieEntityMapper.From(_context.MovieContex.Find(moviecommentId));

        }
        /// <summary>
        /// Metodo che permette di avere la lista di tutti i Movie Comment presenti nel database
        /// </summary>
        /// <returns></returns>

        public List<MovieComment> GetAllMovieComments()
        {
            var commentList = _context.MovieContex;
            return commentList.Select(comment => MovieEntityMapper.From(comment)).ToList();


        }
        /// <summary>
        /// Metodo che permette di aggiornare un singolo Movied Comment tramite ricerca di un Id e salvarlo in modo aggiornato nel database
        /// </summary>
        /// <param name="id"></param>
        /// <param name="movieWithUpdatedProperties"></param>
        /// <returns></returns>

        public MovieComment? UpdateMovieCommentById(int id, MovieComment movieWithUpdatedProperties)
        {
            var movieCommentUpdate = _context.MovieContex.Find(id);
            if (movieCommentUpdate != null)
            {
                movieCommentUpdate.Movie_Id = movieWithUpdatedProperties.Movie_Id;
                movieCommentUpdate.User_Id = movieWithUpdatedProperties.User_Id;
                movieCommentUpdate.Comment = movieWithUpdatedProperties.Comment;
                _context.SaveChanges();
            }

            if (movieCommentUpdate == null) return null;

            return MovieEntityMapper.From(movieCommentUpdate);
        }

        /// <summary>
        /// Metodo che permette di eliminare dal database un singolo Movie Comment passandogli come parametro un id prensente nel database
        /// </summary>
        /// <param name="movieCommentId"></param>
        /// <returns></returns>
        public bool DeleteMovieCommentById(int movieCommentId)
        {
            var movieCommentDelete = _context.MovieContex.Find(movieCommentId);
            _context.MovieContex.Remove(movieCommentDelete);
            _context.SaveChanges();
            return true;
        }
   
    }
}
