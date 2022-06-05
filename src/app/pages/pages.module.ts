import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginPage } from './login/login.page';
import { HomePage } from './home/home.page';
import { DashboardPage } from './admin/dashboard/dashboard.page';
import { AboutPage } from './about/about.page';
import { ContactPage } from './contact/contact.page';
import { FormVaxModule } from '../form-vax/form-vax.module';
import { MaterialModule } from '../material/material.module';


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
    MaterialModule,
    FormVaxModule
  ]
})
export class PagesModule { }
