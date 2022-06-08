import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { LoginLayout } from './login.layout';
import { MaterialModule } from 'src/app/material/material.module';


@NgModule({
  declarations: [
    LoginLayout
  ],
  imports: [
    CommonModule,
    LoginRoutingModule,
    MaterialModule
  ]
})
export class LoginModule { }
