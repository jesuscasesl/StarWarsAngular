/* Angular */
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';


/* Page */
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { FilmComponent } from './pages/film/film.component';

/* Components */
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ListLastVisitComponent } from './components/list-last-visit/list-last-visit.component';
import { SearchfilmComponent } from './components/search-film/search-film.component';
import { ShowFilmComponent } from './components/show-film/show-film.component';
import { CardFilmComponent } from './components/card-film/card-film.component';
import { CardCartelComponent } from './components/card-cartel/card-cartel.component';
import { LoadingComponent } from './components/loading/loading.component';

/* Components Ext */
import { CarouselModule } from 'ngx-bootstrap/carousel';

/* Routes */
import { ROUTES } from './app-routes';

/* Services */
import { StarwarsService } from './services/starwars.service';
import { FilmService } from './services/film.service';
import { PersonService } from './services/person.service';

/* Pipes */
import { NoimagePipe } from './pipes/noimage.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FilmComponent,
    HeaderComponent,
    FooterComponent,
    ListLastVisitComponent,
    SearchfilmComponent,
    ShowFilmComponent,
    CardFilmComponent,
    CardCartelComponent,
    LoadingComponent,
    NoimagePipe,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot( ROUTES, { useHash: true } ),
    CarouselModule
  ],
  providers: [
    StarwarsService,
    FilmService,
    PersonService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
