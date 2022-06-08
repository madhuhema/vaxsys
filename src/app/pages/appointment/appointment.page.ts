import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, of, switchMap, tap } from 'rxjs';
import { Appointment, AppointmentResponse } from 'src/app/@core/models/appointment';
import { ApiService } from 'src/app/@core/services/api.service';
import { ToastService } from 'src/app/@core/services/toast.service';

@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.page.html',
  styleUrls: ['./appointment.page.css']
})
export class AppointmentPage implements OnInit {

  appointments: AppointmentResponse[] = [];

  displayedColumns = ['patientSlotId', 'supplierLocation', 'vacDate', 'slotTime', 'vaccineName', 'actions']

  loadAppointments: BehaviorSubject<any> = new BehaviorSubject('');

  constructor(private http: ApiService, private toast: ToastService) {
    this.loadAppointments.subscribe(() => this.getAppointments())
    this.loadAppointments.next('');
  }

  ngOnInit(): void {

  }

  getAppointments() {
    this.http.myAppointments().subscribe(appointments => this.appointments = appointments);
  }
  deleteAppointment(id: number) {
    this.toast.prompt('Are you sure you want to cancel your appointment').pipe(switchMap((result) => {
      if (result) {
        return this.http.cancelAppointment(id)
      }
      return of(-1)
    })).subscribe({
      next: (id) => {
        if (id > 0) {
          this.toast.showSuccess('successfully Cancelled your appointment');
          this.loadAppointments.next('');
        }
      },
      error: (err) => {
        this.toast.showError('Unable to cancel your appointment');
        console.error(err);
      }
    })
  }
}
