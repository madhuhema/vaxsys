import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { FormlyFieldConfig, FormlyFormOptions } from '@ngx-formly/core';
import { firstValueFrom, from, of } from 'rxjs';
import { Appointment } from 'src/app/@core/models/appointment';
import { ApiService } from 'src/app/@core/services/api.service';
import { ToastService } from 'src/app/@core/services/toast.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.page.html',
  styleUrls: ['./book.page.css']
})
export class BookPage implements OnInit {
  options: FormlyFormOptions = {};

  form = new FormGroup({});
  model: any = {};
  fields: FormlyFieldConfig[] = [{
    key: 'Vaccine',
    type: 'autocomplete',
    templateOptions: {
      label: 'Vaccine',
      placeholder: 'Vaccine',
      filter: async (name: string) => {
        const vaccines = await this.filterVaccines(name);
        return vaccines;
      }
    }
  }, {
    key: 'VaccineSupplier',
    type: 'autocomplete',
    templateOptions: {
      label: 'Hospital',
      placeholder: 'Hospital',
      filter: (name: string) => {
        return from(this.filterHospital(name));
      }
    },
    hideExpression: '!model?.Vaccine'
  }, {
    key: 'Date',
    type: 'datepicker',
    templateOptions: {
      label: 'Appointment Date',
      required: true,
      datepickerOptions: {
        startView: 'month',
        datepickerTogglePosition: 'prefix',
        min: new Date()
      }
    },


  }, {
    key: 'Slot',
    type: 'autocomplete',
    templateOptions: {
      label: 'Slot Time',
      placeholder: 'Slot Time',
      filter: (name: string) => {
        return from(this.getSlots());
      }
    },
    hideExpression: '!(model?.Vaccine && model?.VaccineSupplier && model?.Date)'
  }];
  constructor(private http: ApiService, private toast: ToastService, private router: Router) { }

  ngOnInit(): void {
  }

  bookAppointment() {
    console.log(this.model);
    const appointment: Appointment = {
      vaccineSupplierId: this.model.VaccineSupplier.value,
      vacDate: this.model.Date.toUTCString(),
      slotID: this.model.Slot.value
    };
    this.http.bookAnAppointment(appointment).subscribe({
      next: (id) => {
        this.toast.showSuccess('Your Appointment is created successfully');
        return this.router.navigateByUrl('/user/appointments');
      },
      error: (err) => { this.toast.showError('Unable to create appointment'); console.error(err); }
    });
  }

  async filterHospital(name: string) {
    if (!this.model?.Vaccine) return [];
    const hospitals = await firstValueFrom(this.http.getHospitals(this.model.Vaccine.value));
    const options = hospitals.reduce((acc, vac) => {
      acc.push({ value: vac.id, name: vac.name })
      return acc;
    }, new Array<{ value: string | number, name: string }>())
    return options;
  }

  async filterVaccines(name: string) {
    const vaccines = await firstValueFrom(this.http.getVaccines());
    const options = vaccines.reduce((acc, vac) => {
      acc.push({ value: vac.id, name: vac.name })
      return acc;
    }, new Array<{ value: string | number, name: string }>())
    return options;
  }

  async getSlots() {
    if (!(this.model?.Vaccine && this.model.VaccineSupplier && this.model.Date)) return [];
    debugger;
    const slots = await firstValueFrom(this.http.getSlotsByFilters(this.model.Date.toLocaleDateString(), this.model.VaccineSupplier.value));
    const options = slots.reduce((acc, slot) => {
      acc.push({ value: slot.id, name: slot.time })
      return acc;
    }, new Array<{ value: string | number, name: string }>());
    return options;
  }

}
