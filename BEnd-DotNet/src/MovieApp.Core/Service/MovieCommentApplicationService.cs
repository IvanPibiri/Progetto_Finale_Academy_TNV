using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using MovieApp.Core.Exceptions;
using MovieApp.Core.Model;

namespace MovieApp.Core.Service
{
    public class MovieCommentApplicationService 
    {
        private IMovieCommentStorageService _movieCommentStorageService;

        public MovieCommentApplicationService (IMovieCommentStorageService movieCommentStorageService)
        {
            _movieCommentStorageService = movieCommentStorageService;
        }

        /// <summary>
        /// Metodo della Creazione di un Movie Comment
        /// </summary>
        /// <param name="userId"></param>
        /// <param name="movieId"></param>
        /// <param name="comment"></param>
        /// <returns></returns>
        /// <exception cref="InvalidMovieCommentException"></exception>
        /// <exception cref="InvalidValueException"></exception>
        /// <exception cref="MovieCommentNotCreatedException"></exception>

        public MovieComment CreateMovieComment( int userId, int movieId, string comment)
        {
          
            if (comment.Length<10)
            {
                throw new InvalidMovieCommentException(10, comment.Length);
            }
            else if(movieId < 0)
            {
                throw new InvalidValueException("movie id", movieId);

            }
            else if(userId < 0)
            {
                throw new InvalidValueException("user id", userId);
            }
            var validMovieComment = _movieCommentStorageService.CreateMovieComment(userId, movieId, comment);
            if(validMovieComment != null)
            {
                return validMovieComment;
            }
            else
            {
                throw new MovieCommentNotCreatedException();
            }
        }
            
        /// <summary>
        /// Metodo che permette di rendere tutta la lista di Movie Comment
        /// </summary>
        /// <returns></returns>
        public List<MovieComment> GetAllMovieComments() => _movieCommentStorageService.GetAllMovieComments();

        /// <summary>
        /// Metodo per permette la ricerca di un singolo Movie Comment passondogli come paramentro Id con eventuali eccezioni
        /// </summary>
        /// <param name="movieCommentId"></param>
        /// <returns></returns>
        /// <exception cref="InvalidValueException"></exception>
        /// <exception cref="MovieCommentIdNotFoundException"></exception>
        public MovieComment? GetMovieCommentById(int movieCommentId)
        {
            if(movieCommentId < 0)
            {
                throw new InvalidValueException("id", movieCommentId);

            }
            else if(movieCommentId.Equals(null))
            {
                throw new MovieCommentIdNotFoundException(movieCommentId);
            }
            else
            {
                return _movieCommentStorageService.GetMovieCommentById(movieCommentId);
            }
        } 

        /// <summary>
        /// Metodo che permette di effetuare un aggiornamento di un singolo Movie Comment 
        /// </summary>
        /// <param name="movieId"></param>
        /// <param name="movieWithUpdatedProperties"></param>
        /// <returns></returns>
        /// <exception cref="MovieCommentIdNotFoundException"></exception>
        /// <exception cref="InvalidMovieCommentException"></exception>
        /// <exception cref="MovieCommentNotUpdateException"></exception>

        public MovieComment? UpdateMovieCommentById(int movieId, MovieComment movieWithUpdatedProperties)
        {
            if (movieWithUpdatedProperties == null)
            {
                throw new MovieCommentIdNotFoundException(movieId);
            }
            else if(movieWithUpdatedProperties.Comment.Length < 10)
            {
                throw new InvalidMovieCommentException(10, movieWithUpdatedProperties.Comment.Length);
            }
            var validMovieCommentUpdate = _movieCommentStorageService.UpdateMovieCommentById(movieId, movieWithUpdatedProperties);

            if(validMovieCommentUpdate != null)
            {
                return validMovieCommentUpdate;
            }
            else
            {
                throw new MovieCommentNotUpdateException();
            }

        } 
       
        /// <summary>
        /// Metodo che permette l'eliminazione di un singolo Movie Comment passandogli come parametro Id
        /// </summary>
        /// <param name="movieCommentId"></param>
        /// <returns></returns>
        /// <exception cref="MovieCommentDeleteNotFounfException"></exception>
        public bool DeleteMovieCommentById(int movieCommentId)
        {
            if(movieCommentId.Equals(null))
            {

                throw new MovieCommentDeleteNotFounfException(movieCommentId);
            }
            else
            {
                
                return _movieCommentStorageService.DeleteMovieCommentById(movieCommentId);
            }
           
        }
    }
}
