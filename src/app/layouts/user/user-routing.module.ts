import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppointmentPage } from 'src/app/pages/appointment/appointment.page';
import { BookPage } from 'src/app/pages/book/book.page';
import { UserLayout } from './user.layout';

const routes: Routes = [{
  path: '',
  component: UserLayout,
  children: [{
    path: '',
    component: BookPage
  }, {
    path: 'appointments',
    component: AppointmentPage
  }]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
