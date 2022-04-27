import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MovieDataInterface } from 'src/app/models/model-node/apiMovie.model';
import { MovieData } from 'src/app/models/model-node/dataModel';
import { MoviesApiService } from 'src/app/services/node/movieapi.service';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-sort-by',
  templateUrl: './sort-by.component.html',
  styleUrls: ['./sort-by.component.scss']
})
export class SortByComponent implements OnInit {

  constructor(private dataService: MoviesApiService) { }

  sortOptions = ["releaseDate", "evaluation"];

  movies : MovieDataInterface[] = [];
  optionSelected!: string;
  moviesOrdered : MovieDataInterface[] = [];
  

  ngOnInit(): void {
     // this.getEntries();
  } //da rivedere
  /*
  getEntries(){
    this.dataService.getData().subscribe( (response : any) => {
      this.movies = response;
    })
  }

  sortBy(form: NgForm){
    this.optionSelected = form.form.value.optionSelected;
    console.log(form, this.movies, this.optionSelected);
    let sorting = this.optionSelected;
    if(sorting=="evaluation"){
      this.moviesOrdered = this.movies.sort(function(a,b) {
        return a[sorting] - b[sorting];
      })
    
    }
    else if(sorting=="releaseDate"){
      this.moviesOrdered = this.movies.sort(function(a,b) {
        let aD= new Date(a['releaseDate']);
        let bD = new Date(b['releaseDate']);
        
        return aD.getTime() - bD.getTime();
      })
    }
     
    
  }

        
      }*/

}
