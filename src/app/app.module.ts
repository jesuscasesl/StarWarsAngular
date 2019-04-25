import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { FilmComponent } from './components/film/film.component';

import { ROUTES } from './app-routes';

import { StarwarsService } from './services/starwars.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FilmComponent,
    HeaderComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot( ROUTES, { useHash: true } )
  ],
  providers: [
    StarwarsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
