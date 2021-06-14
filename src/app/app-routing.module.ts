import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ArtistPageComponent } from './components/artist-page/artist-page.component';
import { ArtistsListComponent } from './components/artists-list/artists-list.component';
import { LandingPageComponent } from './landing-page/landing-page.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'landing' },
  { path: 'landing', component: LandingPageComponent },
  { path: 'artist-list', component: ArtistsListComponent },
  {path: 'artist-page/:id', component:ArtistPageComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }