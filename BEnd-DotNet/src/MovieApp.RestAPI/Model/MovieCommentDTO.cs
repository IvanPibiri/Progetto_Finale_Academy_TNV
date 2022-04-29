namespace MovieApp.RestAPI.Model
{
    public class MovieCommentDTO
    {
        public int Id { get; set; }

        public int User_Id { get; set; }

        public int Movie_Id { get; set; }

        public string Comment { get; set; }

    }
}
