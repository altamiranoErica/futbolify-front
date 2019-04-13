import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';

const routes: Routes = [

  {
    path: 'authorize',
    loadChildren: './modules/authorize/authorize.module#AuthorizeModule'
  },
  {
    path: 'space',
    loadChildren: './modules/space/space.module#SpaceModule',
  },
  {
    path: '',
    redirectTo: 'space',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
