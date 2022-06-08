import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserLayout } from './user.layout';
import { FormVaxModule } from 'src/app/form-vax/form-vax.module';
import { MaterialModule } from 'src/app/material/material.module';
import { MomentModule } from 'ngx-moment';


@NgModule({
  declarations: [
    UserLayout
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    FormVaxModule,
    MaterialModule,
    MomentModule
  ]
})
export class UserModule { }
