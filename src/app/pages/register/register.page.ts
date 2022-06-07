import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.css']
})
export class RegisterPage implements OnInit {

  options: FormlyFormOptions = {};
  registerForm = new FormGroup({});
  registerModel: any = {};
  registerFields: FormlyFieldConfig[] = [{
    validators: {
      validation: [
        { name: 'fieldMatch', options: { errorPath: 'ConfirmPassword' } },
      ],
    },
    fieldGroup: [{
      key: 'EmailID',
      type: 'input',
      templateOptions: {
        label: 'Email',
        type: 'email',
        placeholder: 'Email',
        required: true,
        pattern: /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/,
        patternMessage: 'example: person@gmail.com',
      }
    }, {
      key: 'Password',
      type: 'input',
      templateOptions: {
        label: 'Password',
        placeholder: 'Password',
        type: 'password',
        required: true
      }
    }, {
      key: 'ConfirmPassword',
      type: 'input',
      templateOptions: {
        label: 'Confirm Password',
        placeholder: 'Confirm Password',
        type: 'password',
        required: true,

      }
    }, {
      key: 'FirstName',
      type: 'input',
      templateOptions: {
        label: 'First Name',
        type: 'text',
        placeholder: 'First Name',
        required: true
      }
    }, {
      key: 'LastName',
      type: 'input',
      templateOptions: {
        label: 'Last Name',
        type: 'text',
        placeholder: 'Last Name',
        required: true
      }
    }, {
      key: 'PhoneNo',
      type: 'input',
      templateOptions: {
        label: 'Phone Number',
        type: 'text',
        placeholder: 'Phone Number',
        required: true
      }
    }, {
      key: 'DOB',
      type: 'input',
      templateOptions: {
        label: 'Date Of Birth',
        type: 'text',
        placeholder: 'Date Of Birth',
        required: true
      }
    }, {
      key: 'Address',
      type: 'textarea',
      templateOptions: {
        label: 'Address',
        placeholder: 'Address',
        rows: 5,
        required: true
      }
    }]
  }]

  constructor() { }

  ngOnInit(): void {
  }

  register() {
    console.log(this.registerModel);
  }

}
