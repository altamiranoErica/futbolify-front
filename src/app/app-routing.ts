import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [

  {
    path: 'authenticate',
    loadChildren: './modules/authentication/authentication.module#AuthenticationModule'
  },
  {
    path: 'space',
    loadChildren: './modules/space/space.module#SpaceModule',
    canActivate: [AuthGuard]
  },
  {
    path: 'public',
    loadChildren: './modules/public/public.module#PublicModule',
  },
  {
    path: '',
    redirectTo: 'public',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
