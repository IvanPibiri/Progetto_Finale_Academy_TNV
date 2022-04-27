import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesApiService } from 'src/app/services/node/movieapi.service';
import { Location } from '@angular/common';
import { MovieData } from 'src/app/models/model-node/dataModel';

@Component({
  selector: 'app-info-movie',
  templateUrl: './info-movie.component.html',
  styleUrls: ['./info-movie.component.scss']
})
export class InfoMovieComponent implements OnInit {

  movie: any = {};

  constructor( private route: ActivatedRoute, private movieService: MoviesApiService, private location: Location ) 
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
   // this.getMovie()
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

