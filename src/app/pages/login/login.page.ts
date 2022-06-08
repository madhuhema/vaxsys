import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink, RouterState } from '@angular/router';
import { FormlyFieldConfig, FormlyFormOptions } from '@ngx-formly/core';
import { firstValueFrom } from 'rxjs';
import { ApiService } from 'src/app/@core/services/api.service';
import { ToastService } from 'src/app/@core/services/toast.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.css']
})
export class LoginPage implements OnInit {
  options: FormlyFormOptions = {};

  form = new FormGroup({});
  model: any = {};
  fields: FormlyFieldConfig[] = [
    {
      key: 'email',
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

  constructor(private http: ApiService, private toast: ToastService, private router: Router) { }

  ngOnInit(): void {
  }

  loginUser() {
    console.log(this.model);
    this.http.login(this.model.email, this.model.password).subscribe({
      next: (id) => {
        if (!id) {
          this.toast.showError('Login Failed, Please check credentials');
          return;
        }
        this.http.setUserId(id);
        this.toast.showSuccess('Login Successful');
        this.router.navigateByUrl('/user');
      }, error: (err) => {
        this.toast.showError('Login Failed, Please try again later');
      }
    });
  }

}
