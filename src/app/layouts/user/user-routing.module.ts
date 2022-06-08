import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserGuard } from 'src/app/@core/guard/user.guard';
import { AppointmentPage } from 'src/app/pages/appointment/appointment.page';
import { BookPage } from 'src/app/pages/book/book.page';
import { VaccinelistPage } from 'src/app/pages/vaccinelist/vaccinelist.page';
import { UserLayout } from './user.layout';

const routes: Routes = [{
  path: '',
  component: UserLayout,
  canActivate: [UserGuard],
  children: [{
    path: '',
    component: BookPage
  }, {
    path: 'appointments',
    component: AppointmentPage
  }, {
    path: 'vaccineinfo',
    component: VaccinelistPage
  }]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
