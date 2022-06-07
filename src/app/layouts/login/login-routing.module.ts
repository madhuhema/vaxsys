import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPage } from 'src/app/pages/login/login.page';
import { RegisterPage } from 'src/app/pages/register/register.page';
import { LoginLayout } from './login.layout';

const routes: Routes = [{
  path: '',
  component: LoginLayout,
  children: [{
    path: 'login',
    component: LoginPage
  }, {
    path: 'register',
    component: RegisterPage
  }]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule { }
