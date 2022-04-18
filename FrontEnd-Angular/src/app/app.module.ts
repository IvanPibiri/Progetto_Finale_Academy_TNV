import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { LoginComponent } from './components/login-componets/login.component';
import { LoginPageComponent } from './routes/login-page/login-page.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LoginPageComponent

  ],
  imports: [
    
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
