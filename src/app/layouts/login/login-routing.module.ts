import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPage } from 'src/app/pages/login/login.page';
import { LoginLayout } from './login.layout';

const routes: Routes = [{
  path: 'login',
  component: LoginLayout,
  children: [{
    path: '',
    component: LoginPage
  }]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule { }
