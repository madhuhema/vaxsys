import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { LoginPage } from './login/login.page';
import { HomePage } from './home/home.page';
import { DashboardPage } from './admin/dashboard/dashboard.page';
import { AboutPage } from './about/about.page';
import { ContactPage } from './contact/contact.page';


@NgModule({
  declarations: [
    LoginPage,
    HomePage,
    DashboardPage,
    AboutPage,
    ContactPage,
  ],
  imports: [
    CommonModule,
    PagesRoutingModule
  ]
})
export class PagesModule { }
