import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommentsComponent } from './components/comments/comments.component';
import { HomeGiocoComponent } from './components/home-gioco/home-gioco.component';
import { HomeComponent } from './components/home/home.component';
import { InfoMovieComponent } from './components/info-movie/info-movie.component';
import { LoginComponent } from './components/login-componets/login.component';
import { MovieDetailComponent } from './components/movie-detail/movie-detail.component';
import { MovieFavComponent } from './components/movie-fav/movie-fav.component';
import { RatingComponent } from './components/rating/rating.component';
import { OnPageComponent } from './routes/onPage/on-page/on-page.component';


const routes: Routes = [
  { path: "", redirectTo: '/welcome', pathMatch: 'full'},
  { path: "welcome", component: OnPageComponent},
  { path: "login", component: LoginComponent},
  { path: "login/allusers", component: LoginComponent},
  { path: "login/id", component: LoginComponent},
  {path: "home-gioco", component: HomeGiocoComponent},
  { path: "comment", component: CommentsComponent },
  { path: "rating", component: RatingComponent },
  { path: "movie-fav", component: MovieFavComponent},
  { path: "movie-list", component: MovieDetailComponent},
  { path: "home", component: HomeComponent},
  { path: "info-movie/:id", component: InfoMovieComponent},
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
