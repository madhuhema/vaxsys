import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Appointment } from '../models/appointment';
import { Supplier } from '../models/supplier';
import { User } from '../models/user';
import { Vaccine } from '../models/vaccine';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  url: string = '/api';

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

  getHospitals(vaccineId: number): Observable<Array<Supplier>> {
    return this.http.post<Array<Supplier>>(`${this.url}/dashboard/hospitalByVacId?vaccineId=${vaccineId}`, vaccineId);
  }

  getVaccineAndDiseaseList() {

  }

  getUserId(): number {
    return parseInt(localStorage.getItem('userId') || '');
  }

  setUserId(userId: number) {
    localStorage.setItem('userId', userId.toString());
  }

}
