import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiService } from './services/api.service';
import { MaterialModule } from '../material/material.module';
import { ToastService } from './services/toast.service';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MaterialModule
  ],
  providers: [
    ApiService,
    ToastService
  ]
})
export class CoreModule { }
