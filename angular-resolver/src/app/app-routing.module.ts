import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { UsersComponent } from './components/users/users.component';
import { RouteResolver } from './resolver/route-resolver';

const routes: Routes = [
  { 
    path: 'home', 
    pathMatch: 'full',
    component: HomeComponent
  },
  {
    path: 'users',
    component: UsersComponent,
    resolve: {
      users: RouteResolver
    },
  }, 
  {
    path: '**',
    redirectTo: '/',
    pathMatch: 'full'
  },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
