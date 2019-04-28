import { Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { FilmComponent } from './pages/film/film.component';

export const ROUTES: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'film/:id', component: FilmComponent },
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: '**', pathMatch: 'full', redirectTo: 'home' }
];
