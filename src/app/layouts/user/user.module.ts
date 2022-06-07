import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserLayout } from './user.layout';
import { FormVaxModule } from 'src/app/form-vax/form-vax.module';
import { MaterialModule } from 'src/app/material/material.module';


@NgModule({
  declarations: [
    UserLayout
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    FormVaxModule,
    MaterialModule
  ]
})
export class UserModule { }
