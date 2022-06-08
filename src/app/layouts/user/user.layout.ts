import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/@core/services/api.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.layout.html',
  styleUrls: ['./user.layout.css']
})
export class UserLayout implements OnInit {

  constructor(private http: ApiService, private router: Router) { }

  ngOnInit(): void {
  }
  logout() {
    this.http.removeUserId();
    this.router.navigateByUrl('/');
  }

}
