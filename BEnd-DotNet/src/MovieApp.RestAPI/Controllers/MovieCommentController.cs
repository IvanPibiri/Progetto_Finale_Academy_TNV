using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using MovieApp.Core.Exceptions;
using MovieApp.Core.Model;
using MovieApp.Core.Service;
using MovieApp.RestAPI.Mapper;
using MovieApp.RestAPI.Model;
using MovieApp.RestAPI.Model.Request;

namespace MovieApp.RestAPI.Controllers
{
    [ApiController]
    [Route("movie")]
    public class MovieCommentController : ControllerBase
    {
        private MovieCommentApplicationService _applicationService;

        public MovieCommentController(MovieCommentApplicationService applicationService)
        {
            _applicationService = applicationService;
        }

        /// <summary>
        /// Funzione che permette di fare una Post, su postman, in questo caso una creazione di un nuovo Movie Comment inserendo i parametri richiesti nel body
        /// </summary>
        /// <param name="parameters"></param>
        /// <returns></returns>
        [EnableCors("Policyl")]
        [HttpPost]

        public ActionResult<MovieCommentDTO> CreateMovieComment([FromBody] MovieCommentCreateParameters parameters)
        {
            try
            {
                var createdMovieComment = _applicationService.CreateMovieComment(parameters.User_Id, parameters.Movie_Id, parameters.Comment);
                return Ok(MovieCommentMapper.From(createdMovieComment));
            }
            catch (InvalidMovieCommentException ex)
            {
                return BadRequest(new ErroreResponse()
                {
                    ErrorMessage = ex.Message,
                    timestamp = DateTime.Now

                });
            }
            catch (InvalidValueException ex)
            {
                return BadRequest(new ErroreResponse()
                {
                    ErrorMessage = ex.Message,
                    timestamp = DateTime.Now

                });
            }
            catch (MovieCommentNotCreatedException ex)
            {
                return NotFound(new ErroreResponse()
                {
                    ErrorMessage = ex.Message,
                    timestamp = DateTime.Now

                });
            }
          

        }

        /// <summary>
        /// Funzione che permette di fare una richiesta di tipo Get, su postman, per fare la ricerca tramite Id passatogli come parametro
        /// </summary>
        /// <param name="movieCommentId"></param>
        /// <returns></returns>

        [EnableCors("Policyl")]
        [HttpGet]
        [Route("{movie-id}")]
        public ActionResult<MovieCommentDTO> GetMovieCommentById([FromRoute(Name = "movie-id")] int movieCommentId)
        {
            try
            {
                var movieComment = _applicationService.GetMovieCommentById(movieCommentId);
                return Ok(MovieCommentMapper.From(movieComment));
            }

            catch (MovieCommentIdNotFoundException ex)
            {

                return NotFound(new ErroreResponse()
                {
                    ErrorMessage = ex.Message,
                    timestamp = DateTime.Now

                });

            }
            catch (NullReferenceException ex)
            {
                return BadRequest(new ErroreResponse()
                {
                    ErrorMessage = ex.Message,
                    timestamp = DateTime.Now
                });
            }

        }
        /// <summary>
        /// Funzione che permette di fare una richiesta di tipo Get, su postman, per avere un intera lista di Movie Comment
        /// </summary>
        /// <returns></returns>
        [EnableCors("Policyl")]
        [HttpGet]      
        public ActionResult<List<MovieCommentDTO>> GetMovieCommentList()
        {
            try
            {
                var movieCommentsList = _applicationService.GetAllMovieComments();
                return Ok(movieCommentsList.Select(movieComment => MovieCommentMapper.From(movieComment)));
            }
            catch (NullReferenceException ex)
            {
                return BadRequest(new ErroreResponse()
                {
                    ErrorMessage = ex.Message,
                    timestamp = DateTime.Now
                });
            }
        }
        /// <summary>
        /// Funzione che permette di fare una richiesta di tipo Put,su postman, per poter aggiornare un Movie Comment esistente(Id paasatogli come parametro) e inserendo i 
        /// parametri da aggiornare nel body
        /// </summary>
        /// <param name="movieCommentId"></param>
        /// <param name="parameters"></param>
        /// <returns></returns>
        [EnableCors("Policyl")]
        [HttpPut]
        [Route("{comment-id}")]
        public ActionResult<MovieCommentDTO> UpdateMovieCommentById([FromRoute(Name = "comment-id")] int movieCommentId,
            [FromBody] MovieCommentCreateParameters parameters)
        {
            try
            {
                var movieComment = _applicationService.GetMovieCommentById(movieCommentId);
                MovieComment commentWhitUdateProperties = new MovieComment(parameters.Movie_Id, parameters.User_Id, parameters.Comment);
                movieComment = _applicationService.UpdateMovieCommentById(movieCommentId, commentWhitUdateProperties);
                return Ok(MovieCommentMapper.From(movieComment));
            }
            catch (MovieCommentIdNotFoundException ex)
            {
                return BadRequest(new ErroreResponse()
                {
                    ErrorMessage = ex.Message,
                    timestamp = DateTime.Now

                });
            }
            catch (InvalidMovieCommentException ex)
            {
                return BadRequest(new ErroreResponse()
                {
                    ErrorMessage = ex.Message,
                    timestamp = DateTime.Now
                });
            }
            catch (MovieCommentNotUpdateException ex)
            {
                return NotFound(new ErroreResponse()
                {
                    ErrorMessage = ex.Message,
                    timestamp = DateTime.Now
                });
            }
            catch (NullReferenceException ex)
            {
                return BadRequest(new ErroreResponse()
                {
                    ErrorMessage = ex.Message,
                    timestamp = DateTime.Now
                });
            }
        }
        /// <summary>
        /// Funzione che permette di fare una richiesta di tipo Delete, su postman, tramite un Id esistente passatogli come parametro
        /// </summary>
        /// <param name="commentId"></param>
        /// <returns></returns>
        [EnableCors("Policyl")]
        [HttpDelete]
        [Route("{comment-id}")]
        public ActionResult<bool> DeleteMovieCommentById([FromRoute(Name = "comment-id")] int commentId)
        {
            try
            {
                var movieCommentDelete = _applicationService.DeleteMovieCommentById(commentId);               
                return Ok(movieCommentDelete);
            }
            catch (MovieCommentDeleteNotFounfException ex)
            {

                return NotFound(new ErroreResponse()
                {
                    ErrorMessage = ex.Message,
                    timestamp = DateTime.Now

                });
            }
            catch (NullReferenceException ex)
            {
                return BadRequest(new ErroreResponse()
                {
                    ErrorMessage = ex.Message,
                    timestamp = DateTime.Now
                });
            }

        }
    }
}
