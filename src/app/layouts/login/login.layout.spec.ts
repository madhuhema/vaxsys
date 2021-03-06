import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginLayout } from './login.layout';

describe('LoginLayout', () => {
  let component: LoginLayout;
  let fixture: ComponentFixture<LoginLayout>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginLayout ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginLayout);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
