import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';

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
  }, {
    key: 'Vaccine',
    type: 'input',
    templateOptions: {
      label: 'Vaccine',
      placeholder: 'Vaccine',
    }
  }];
  constructor() { }

  ngOnInit(): void {
  }

  bookAppointment() {
    console.log(this.model);
  }

}
