import { Component, OnInit } from '@angular/core';
import { Appointment } from 'src/app/@core/models/appointment';
import { ApiService } from 'src/app/@core/services/api.service';

@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.page.html',
  styleUrls: ['./appointment.page.css']
})
export class AppointmentPage implements OnInit {

  appointments: Appointment[] = [];
  
  constructor(private http: ApiService) {

  }

  ngOnInit(): void {
    this.http.myAppointments().subscribe(appointments => this.appointments = appointments);
  }

}
