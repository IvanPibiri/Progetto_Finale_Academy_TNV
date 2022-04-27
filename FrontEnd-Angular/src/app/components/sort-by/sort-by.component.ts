import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MovieData } from 'src/app/models/model-node/dataModel';
import { MoviesApiService } from 'src/app/services/node/movieapi.service';

@Component({
  selector: 'app-sort-by',
  templateUrl: './sort-by.component.html',
  styleUrls: ['./sort-by.component.scss']
})
export class SortByComponent implements OnInit {

  constructor(private dataService: MoviesApiService) { }

  sortOptions = ["releaseDate"];

  movies : MovieData[] = [];
  orderedItems : MovieData[]= [];
  showResult = false;
  sortOption!: string;

  

  ngOnInit(): void {
    //this.getEntries();
  }
/*
  sortBy(form: NgForm){
    this.sortOption = form.form.value.sortOption;
    this.showResult=true;

    let sorting = this.sortOption;
    if(sorting=="evaluation" || sorting=="reviews"){
      this.orderedItems = this.movies.sort(function(a,b) {
        return -(a[sorting] - b[sorting]);
      })

    }
    else if(sorting=="releaseDate"){
      this.orderedItems = this.movies.sort(function(a,b) {
        let aD= new Date(a['releaseDate']);
        let bD = new Date(b['releaseDate']);

        return aD.getTime() - bD.getTime();
      })
    }
  }

  getEntries() {
    this.dataService.getData().subscribe((response: any) => {
    this.movies = response;
  })
}
*/
}
