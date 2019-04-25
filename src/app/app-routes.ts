import { Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { FilmComponent } from './components/film/film.component';

export const ROUTES: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'film', component: FilmComponent },
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: '**', pathMatch: 'full', redirectTo: 'home' }
];
