import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { FormlyFieldConfig, FormlyModule } from '@ngx-formly/core';
import { FormlyMaterialModule } from '@ngx-formly/material';
import { MaterialModule } from '../material/material.module';
import { AboutPage } from './about/about.page';
import { DashboardPage } from './admin/dashboard/dashboard.page';
import { ContactPage } from './contact/contact.page';
import { HomePage } from './home/home.page';
import { LoginPage } from './login/login.page';
import { RegisterPage } from './register/register.page';
import { AppointmentPage } from './appointment/appointment.page';
import { BookPage } from './book/book.page';
import { CoreModule } from '../@core/core.module';
import { ApiService } from '../@core/services/api.service';
import { ToastService } from '../@core/services/toast.service';



export function patternValidation(err: any, field: FormlyFieldConfig) {
  return `${field.templateOptions?.label} should match the required field pattern`;
}

@NgModule({
  declarations: [
    LoginPage,
    HomePage,
    DashboardPage,
    AboutPage,
    ContactPage,
    RegisterPage,
    AppointmentPage,
    BookPage,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
    FormlyModule.forChild({
      validationMessages: [
        { name: 'required', message: 'This field is required' },
        { name: 'pattern', message: patternValidation }
      ],
    }),
    FormlyMaterialModule,
    RouterModule
  ],
  providers: [
    ApiService,
    ToastService
  ]
})
export class PagesModule { }
