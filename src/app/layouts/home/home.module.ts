import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeLayout } from './home.layout';
import { MaterialModule } from 'src/app/material/material.module';
import { FormVaxModule } from 'src/app/form-vax/form-vax.module';
import { PagesModule } from 'src/app/pages/pages.module';


@NgModule({
  declarations: [
    HomeLayout
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    PagesModule,
    MaterialModule
  ]
})
export class HomeModule { }
