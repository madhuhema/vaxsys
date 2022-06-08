import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutoselectComponent } from './autoselect.component';

describe('AutoselectComponent', () => {
  let component: AutoselectComponent;
  let fixture: ComponentFixture<AutoselectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AutoselectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AutoselectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
