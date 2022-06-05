import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutPage } from 'src/app/pages/about/about.page';
import { DashboardPage } from 'src/app/pages/admin/dashboard/dashboard.page';
import { ContactPage } from 'src/app/pages/contact/contact.page';
import { HomePage } from 'src/app/pages/home/home.page';
import { LoginPage } from 'src/app/pages/login/login.page';
import { HomeLayout } from './home.layout';

const routes: Routes = [{
  path: '',
  component: HomeLayout,
  children: [{
    path: '',
    component: HomePage
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
  }]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
