import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MovieFavorite } from 'src/app/models/model-node/movieDB';
import { movieRating } from 'src/app/models/rating-model/movieRating';
import { MoviesApiService } from 'src/app/services/node/movieapi.service';
import { MovieDataBase } from 'src/app/services/node/moviedatabase';
import { RatingService } from 'src/app/services/rating/rating.service';


@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.scss']
})
export class RatingComponent implements OnInit {

  //movieRating: movieRating = {} as movieRating;
  movieId: any | null = null;
  userId: any | null = null;
  movieRating : any| null = null;

  //favorite : MovieFavorite[] = [];
  constructor(private httpClient: HttpClient, private serviceBackEnd : RatingService) { }

  ngOnInit(): void {
   /* this.serviceBackEnd.getMoviesFavList().subscribe({
      next: (res) => this.favorite = res,
      error: () => console.log('error')
    })*/
  }
/*
  createRating(rating: NgForm) {
    this.httpClient.post(`http://localhost:8000/api/movie`, rating.value).subscribe({
      next: () => console.log('rating created'),
      error: () => console.log('error')
    });
  }*/


 createRating(rating: NgForm){
    this.serviceBackEnd.createRatingMovie(rating.value).subscribe({
      next: () => console.log('rating created'),
      error: () => console.log("voto non assegnato")
    })
  }

}
