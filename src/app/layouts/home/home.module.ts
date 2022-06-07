import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeLayout } from './home.layout';
import { MaterialModule } from 'src/app/material/material.module';
import { PagesModule } from 'src/app/pages/pages.module';
import { ReactiveFormsModule } from '@angular/forms';
import { FormlyModule } from '@ngx-formly/core';
import { FormlyMaterialModule } from '@ngx-formly/material';
import { FormVaxModule } from 'src/app/form-vax/form-vax.module';


@NgModule({
  declarations: [
    HomeLayout
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    PagesModule,
    MaterialModule,
    FormVaxModule
  ]
})
export class HomeModule { }
