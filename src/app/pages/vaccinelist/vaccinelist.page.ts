import { Component, OnInit } from '@angular/core';
import { VaccineInfo } from 'src/app/@core/models/vaccineinfo';
import { ApiService } from 'src/app/@core/services/api.service';

@Component({
  selector: 'app-vaccinelist',
  templateUrl: './vaccinelist.page.html',
  styleUrls: ['./vaccinelist.page.css']
})
export class VaccinelistPage implements OnInit {

  vaccineInfos: VaccineInfo[] = [];
  displayedColumns = ['DiseaseName', 'VaccineName', 'NoOfDoses', 'Location']
  constructor(public http: ApiService) {
    this.getVaccineInfo()
  }

  getVaccineInfo() {
    this.http.getVaccineAndDiseaseList().subscribe({
      next: (vacInfo) => {
        this.vaccineInfos = vacInfo;
      },
      error: (err) => {
        console.error(err)
      }
    })
  }
  ngOnInit(): void {
  }

}
