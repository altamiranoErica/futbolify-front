import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SpacesComponent } from './spaces/spaces.component';

const routes: Routes = [
  {
    path: 'spaces',
    component: SpacesComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublicRoutingModule { }
