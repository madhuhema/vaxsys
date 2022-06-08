import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatAutocompleteTrigger } from '@angular/material/autocomplete';
import { MatInput } from '@angular/material/input';
import { FieldType, FieldTypeConfig } from '@ngx-formly/core';
import { Observable, startWith, switchMap } from 'rxjs';

@Component({
  selector: 'app-autocomplete',
  templateUrl: './autocomplete.component.html',
  styleUrls: ['./autocomplete.component.css']
})
export class AutocompleteComponent extends FieldType<FieldTypeConfig> implements OnInit, AfterViewInit {
  @ViewChild(MatInput) formFieldControl!: MatInput;
  @ViewChild(MatAutocompleteTrigger) autocomplete!: MatAutocompleteTrigger;

  filter!: Observable<any>;

  ngOnInit() {
    // super.ngOnInit();
    this.filter = this.form.valueChanges
      .pipe(
        startWith(''),
        switchMap((term) => {
          return this.to['filter'](term)
        }),
      );
  }

  displayFn(option: { name: string, value: string | number }): string {
    return option?.name || '';
  }

  ngAfterViewInit() {
    // super.ngAfterViewInit();
    // temporary fix for https://github.com/angular/material2/issues/6728
    // (<any>this.autocomplete)._formField = this.['formField'];
  }
}