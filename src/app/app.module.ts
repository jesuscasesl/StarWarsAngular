import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { FilmComponent } from './components/film/film.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { CardFilmComponent } from './components/card-film/card-film.component';
import { DetailsFilmComponent } from './components/details-film/details-film.component';
import { SearchfilmComponent } from './components/searchfilm/searchfilm.component';
import { ListLastVisitComponent } from './components/list-last-visit/list-last-visit.component';
import { LoadingComponent } from './components/loading/loading.component';

import { ROUTES } from './app-routes';

import { StarwarsService } from './services/starwars.service';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FilmComponent,
    HeaderComponent,
    FooterComponent,
    CardFilmComponent,
    DetailsFilmComponent,
    SearchfilmComponent,
    ListLastVisitComponent,
    LoadingComponent,
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
