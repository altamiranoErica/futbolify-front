import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VenuesComponent } from './venue/venues.component';

const routes: Routes = [
  {
    path: 'venues',
    component: VenuesComponent,
  },
  {
    path: '',
    redirectTo: 'venues',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublicRoutingModule { }
