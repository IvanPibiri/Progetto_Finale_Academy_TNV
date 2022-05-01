import { Component, OnInit } from '@angular/core';
import { MovieFavorite } from 'src/app/models/model-node/movieDB';
import { MovieDataBase } from 'src/app/services/node/moviedatabase';


@Component({
  selector: 'app-movie-fav',
  templateUrl: './movie-fav.component.html',
  styleUrls: ['./movie-fav.component.scss']
})
export class MovieFavComponent implements OnInit {

 // user_id : number | number = null;
  movies: MovieFavorite[] = [];

  
  constructor(private ServiceBE: MovieDataBase ) { }

  ngOnInit(): void {
    this.ServiceBE.getMoviesFavList().subscribe({
      next: (res) => this.movies = res,
      error: () => console.log('Error!'),
      complete: () => console.log('Complete')
  });
}

//finire di completare e da corregere perchè da errori 
getMovieFav(){
  this.ServiceBE.getMoviesFavList().subscribe({
    next: (res) => {
      this.movies = res;
      for(let i=0; i<this.movies.length; i++){
        let movie
      }
    }
  })
}


}
