import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFieldConfig, FormlyFormOptions } from '@ngx-formly/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.css']
})
export class LoginPage implements OnInit {
  form = new FormGroup({});
  model: any = {};
  options: FormlyFormOptions = {};
  fields: FormlyFieldConfig[] = [
    {
      key: 'user',
      type: 'input',
      templateOptions: {
        label: 'Email Address',
        placeholder: 'Email Address',
        required: true,
        type: 'email',
        pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/
      },
    },
    {
      key: 'password',
      type: 'input',
      templateOptions: {
        label: 'Password',
        placeholder: 'Password',
        type: 'password',
        required: true,
      },
    },
  ];
  constructor() { }

  ngOnInit(): void {
  }

  loginUser() {
    console.log(this.model);
  }

}
