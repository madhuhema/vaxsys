import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFieldConfig, FormlyFormOptions } from '@ngx-formly/core';
import { firstValueFrom, from, of } from 'rxjs';
import { ApiService } from 'src/app/@core/services/api.service';

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
    key: 'VaccineSupplierId',
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
      required: true
    }
  }, {
    key: 'Slot',
    type: 'select',
    templateOptions: {
      label: 'Slot Time',
      placeholder: 'Slot Time',
      options: [
        { value: 1, label: '09:00' },
        { value: 2, label: '10:00' },
        { value: 3, label: '11:00' },
        { value: 4, label: '12:00' }
      ]
    }
  }];
  constructor(private http: ApiService) { }

  ngOnInit(): void {
  }

  bookAppointment() {
    console.log(this.model);
  }

  async filterHospital(name: string) {
    if (!this.model?.Vaccine) return [];
    const hospitals = await firstValueFrom(this.http.getHospitals(this.model.Vaccine.value));
    const options = hospitals.reduce((acc, vac) => {
      acc.push({ value: vac.ID, name: vac.name })
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


}
