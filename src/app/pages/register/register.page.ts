import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';
import { User } from 'src/app/@core/models/user';
import { ApiService } from 'src/app/@core/services/api.service';
import { ToastService } from 'src/app/@core/services/toast.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.css']
})
export class RegisterPage implements OnInit {

  options: FormlyFormOptions = {};
  registerForm = new FormGroup({});
  registerModel: User | any = {};
  registerFields: FormlyFieldConfig[] = [{
    validators: {
      validation: [
        { name: 'fieldMatch', options: { errorPath: 'confirmPassword' } },
      ],
    },
    fieldGroup: [{
      key: 'emailID',
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
      key: 'password',
      type: 'input',
      templateOptions: {
        label: 'Password',
        placeholder: 'Password',
        type: 'password',
        required: true
      }
    }, {
      key: 'confirmPassword',
      type: 'input',
      templateOptions: {
        label: 'Confirm Password',
        placeholder: 'Confirm Password',
        type: 'password',
        required: true,
      }
    }, {
      key: 'firstName',
      type: 'input',
      templateOptions: {
        label: 'First Name',
        type: 'text',
        placeholder: 'First Name',
        required: true
      }
    }, {
      key: 'lastName',
      type: 'input',
      templateOptions: {
        label: 'Last Name',
        type: 'text',
        placeholder: 'Last Name',
        required: true
      }
    }, {
      key: 'phoneNo',
      type: 'input',
      templateOptions: {
        label: 'Phone Number',
        type: 'text',
        placeholder: 'Phone Number',
        required: true
      }
    }, {
      key: 'dob',
      type: 'datepicker',
      templateOptions: {
        label: 'Date Of Birth',
        placeholder: 'Date Of Birth',
        required: true
      }
    }, {
      key: 'address',
      type: 'textarea',
      templateOptions: {
        label: 'Address',
        placeholder: 'Address',
        rows: 5,
        required: true
      }
    }]
  }]

  constructor(private http: ApiService, private toast: ToastService, private router: Router) { }

  ngOnInit(): void { }

  register() {
    console.log(this.registerModel);
    debugger;
    this.http.register(this.registerModel).subscribe({
      next: (id) => {
        debugger;
        if (!id) {
          this.toast.showError('Registration Failed');
          return;
        }
        this.toast.showSuccess('Registration Successful, Login now');
        this.router.navigateByUrl('/login');
      }, error: (err) => {
        console.error(err);
        this.toast.showError('Registration Failed, Please try again later');
      }
    });
  }

}
