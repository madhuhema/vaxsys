import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Appointment, AppointmentResponse } from '../models/appointment';
import { Slot } from '../models/slot';
import { Supplier } from '../models/supplier';
import { User } from '../models/user';
import { Vaccine } from '../models/vaccine';
import { VaccineInfo } from '../models/vaccineinfo';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  url: string = '/api';

  constructor(private http: HttpClient) { }

  login(emailId: string, password: string): Observable<number> {
    return this.http.post<number>(this.url + "/login", { emailId, password });
  }

  register(user: User) {
    return this.http.post<number>(this.url + "/register", user);
  }

  bookAnAppointment(appointment: Appointment) {
    const userId = this.getUserId();
    return this.http.post<number>(`${this.url}/patient/${userId}/slot`, appointment);
  }

  cancelAppointment(slotID: number) {
    let userId = this.getUserId();
    return this.http.delete(`${this.url}/patient/${userId}/slot/${slotID}`)
  }

  myAppointments() {
    let userId = this.getUserId();
    return this.http.get<Array<AppointmentResponse>>(`${this.url}/patient/${userId}/slot`)
  }

  getVaccines(): Observable<Array<Vaccine>> {
    return this.http.get<Array<Vaccine>>(`${this.url}/dashboard/vaccines`);
  }

  getHospitals(vaccineId: number): Observable<Array<Supplier>> {
    return this.http.post<Array<Supplier>>(`${this.url}/dashboard/hospitalByVacId?vaccineId=${vaccineId}`, vaccineId);
  }

  getSlotsByFilters(date: string, vaccineSupplierId: string) {
    debugger;
    return this.http.get<Slot[]>(`${this.url}/dashboard/slotsByFilters?selectedDate=${date}&patientId=${this.getUserId()}&vaccineSupplierId=${vaccineSupplierId}`)
  }

  getVaccineAndDiseaseList() {
    return this.http.get<VaccineInfo[]>(`${this.url}/dashboard/vaccineInfo`)
  }

  getUserId(): number {
    return parseInt(localStorage.getItem('userId') || '');
  }

  setUserId(userId: number) {
    localStorage.setItem('userId', userId.toString());
  }
  removeUserId() {
    localStorage.removeItem('userId')
  }
}
