import { Component, OnInit } from '@angular/core';
import { VaccineInfo } from 'src/app/@core/models/vaccineinfo';
import { ApiService } from 'src/app/@core/services/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.css']
})
export class HomePage {

  constructor(public http: ApiService) { }
}
