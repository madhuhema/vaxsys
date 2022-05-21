import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutPage } from './about/about.page';
import { DashboardPage } from './admin/dashboard/dashboard.page';
import { ContactPage } from './contact/contact.page';
import { HomePage } from './home/home.page';
import { LoginPage } from './login/login.page';

const routes: Routes = [{
  path: '',
  component: HomePage
},
{
  path: 'login',
  component: LoginPage
},
{
  path: 'about',
  component: AboutPage
},
{
  path: 'contact-us',
  component: ContactPage
},
{
  path: 'admin',
  component: DashboardPage
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
