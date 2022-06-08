import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VaccinelistPage } from './vaccinelist.page';

describe('VaccinelistPage', () => {
  let component: VaccinelistPage;
  let fixture: ComponentFixture<VaccinelistPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VaccinelistPage ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VaccinelistPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
