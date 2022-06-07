import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Appointment } from '../models/appointment';
import { Supplier } from '../models/supplier';
import { User } from '../models/User';
import { Vaccine } from '../models/vaccine';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  url: string = 'http://localhost:8080';

  constructor(private http: HttpClient) { }

  login(emailid: string, password: string): Observable<number> {
    return this.http.post<number>(this.url + "/login", { emailid, password });
  }

  register(user: User) {
    return this.http.post<number>(this.url + "/register", user);
  }

  bookAnAppointment(appointment: Appointment) {
    appointment.patientId = this.getUserId();
    return this.http.post<number>(this.url, appointment);
  }

  cancelAppointment(slotID: number) {
    let userId = this.getUserId();
    return this.http.delete(`${this.url}/patient/${userId}/slot/${slotID}`)
  }

  myAppointments() {
    let userId = this.getUserId();
    return this.http.get(`${this.url}/patient/${userId}/slot`)
  }

  getVaccines(): Observable<Array<Vaccine>> {
    return this.http.get<Array<Vaccine>>(`${this.url}/dashboard/vaccines`);
  }

  getHospitals(): Observable<Array<Supplier>> {
    return this.http.get<Array<Supplier>>(`${this.url}/dashboard/hospitalByVacId`);
  }

  getVaccineAndDiseaseList() {

  }

  getUserId(): number {
    return parseInt(localStorage.getItem('userId') || '');
  }

  setUserId(userId: string) {
    localStorage.setItem('userId', userId);
  }

}
