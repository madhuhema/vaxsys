import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{
  path: '',
  loadChildren: () => import('./layouts/home/home.module').then(home => home.HomeModule)
}, {
  path: '',
  loadChildren: () => import('./layouts/login/login.module').then(login => login.LoginModule)
}, {
  path: 'user',
  loadChildren: () => import('./layouts/user/user.module').then(user => user.UserModule)
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
