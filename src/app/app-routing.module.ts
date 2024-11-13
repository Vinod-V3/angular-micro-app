import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from '../pages/home-page/home-page.component';
import { ListingPageComponent } from '../pages/listing-page/listing-page.component';
import { loadRemoteModule } from '@angular-architects/module-federation';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  // { path: '',     loadChildren: () =>
  //     loadRemoteModule({
  //       remoteName: 'reactApp',
  //       exposedModule: './AboutPage',
  //     }).then((m) => m?.AboutPage || m.default), },
  { path: 'list', component: ListingPageComponent },
  {
    path: 'details',
    loadChildren: () =>
      loadRemoteModule({
        remoteName: 'reactApp',
        exposedModule: './DetailsPage',
      }).then((m) => {
        console.log('Loaded module:', m);
        return m?.DetailsPage || m.default})
      .catch((err) => {
        console.error('Failed to load in routing:', err);
      }),
  },
  {
    path: 'about',
    loadChildren: () =>
      loadRemoteModule({
        remoteName: 'reactApp',
        exposedModule: './AboutPage',
      }).then((m) => m?.AboutPage || m.default),
  },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
