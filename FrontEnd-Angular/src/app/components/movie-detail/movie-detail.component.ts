import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MovieData } from 'src/app/models/model-node/dataModel';
import { MoviesApiService } from 'src/app/services/node/movieapi.service';
import { MovieDataBase } from 'src/app/services/node/moviedatabase';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.scss']
})

export class MovieDetailComponent implements OnInit {

  maxRandom: number = 50000; //numero range max random
  movieId: number | null  = null; //id film

  //movie= {};

  movies : MovieData | null = null;
  //movieArray : MovieData [] = [];
  movieVote : any;
  isVisible: boolean = true;


  
  constructor(private httpClient: HttpClient, private serviceApi : MoviesApiService, private router: Router) {
    
  }


  ngOnInit(): void {
     this.serviceApi.getMoviePopulares().subscribe(
        {
          next : (res) => this.movies = res
          
        }

      );
      this.serviceApi.getMovieByVote().subscribe({
        next : (res) => this.movieVote = res
      })

    // this.setRandomMovie();
  }

  getRandomInt(max:number) {
    return Math.floor(Math.random() * max);
  }
  

    //setRandomMovie(){
      //this.movieId = this.getRandomInt(this.maxRandom);
/*
    const latestId = 5000;
    const randomId = Math.round(Math.random() * latestId);
    this.httpClient
      .get(`https://api.themoviedb.org/3/movie/${randomId}?api_key=3949444e64e7a9355250d3b1b5c59bf1&language=it-it`).subscribe({
        next: (res) => {
        this.movie = res;
        console.log('ID trovato');
        },
        error: () => {
          console.log('ID non esistente, retry!');
          this.setRandomMovie();
        },
      });*/
/*
      this.movieId = this.getRandomInt(this.maxRandom);
      this.serviceApi.getMovieById(this.movieId).subscribe({
      next : (res) => {
        this.movies = res;
        if(this.movies == null || this.movies === null) this.setRandomMovie();},
      error: (res) => {
        console.log(res);
        this.setRandomMovie();}
}); }*/

       searchMovie(movieTxt : string){
        if(movieTxt.length ==0){
          return;
        }
        console.log(movieTxt)
        this.router.navigate(['search', movieTxt])
      }
    
     

  
}






