using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MovieApp.Core.Model
{
    public class MovieComment
    {
        public int Id { get; }

        public int User_Id { get; set; }

        public int Movie_Id { get; set;}

        public string Comment { get; set; }


        public MovieComment(int userId, int movieId, string comment)
        {
            Id = 0;
            User_Id = userId;
            Movie_Id = movieId;
            Comment = comment;
        }

        public MovieComment(int id, int userId, int movieId, string comment) : this (userId, movieId, comment)
        {
            Id = id;
        }
            
     }
}
