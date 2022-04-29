import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesApiService } from 'src/app/services/node/movieapi.service';
import { Location, NgClass } from '@angular/common';
import { MovieData } from 'src/app/models/model-node/dataModel';
import { MovieFavorite } from 'src/app/models/model-node/movieDB';
import { MovieDataBase } from 'src/app/services/node/moviedatabase';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-info-movie',
  templateUrl: './info-movie.component.html',
  styleUrls: ['./info-movie.component.scss']
})
export class InfoMovieComponent implements OnInit {

  id: number | null = null;
  user_id: number | null = null;
  movie_id: number | null = null;
  movieFav: MovieFavorite | null = null; 
  ListMovieFav : MovieFavorite[] = []; //lista favoriti
  movie: any = {};

  constructor( private route: ActivatedRoute, private movieService: MoviesApiService, private location: Location, private serviceFav: MovieDataBase) 
  {
    this.route.params.subscribe(res => {
        this.movieService.getMovieById(res['id']).subscribe(mov =>{
          this.movie= mov;
        })
        //this.movieId = val['movieId'];
    }); 
  }

  goBack() {
    this.location.back();
  }

 
  ngOnInit(): void {
    /*
   this.serviceFav.getMoviesFavList().subscribe(res => this.movieFav = res);
   this.route.params.subscribe((pararms) => this.movie = pararms['movie']);
   this.movieService.getMoviePopulares().subscribe({
     next: (res) => this.
   })
   }*/
  }

createFavouriteMovie() {
  this.movieFav = {id: null, movie_id: this.movie_id, user_id: this.user_id}
  this.serviceFav.postMovieFav(this.movieFav).subscribe({
    next: () => console.log('Movie Aggiunto ai Preferiti'),
    error: () => console.log('Error!')
  })
}





/*
  getMovie(){
  this.movieService.getMovieById(this.movieId).subscribe(
    {
      next: (res) => this.movies = res      
    });
  }
  */
    

}