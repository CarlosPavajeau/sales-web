import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterCustomerPhoneNumberComponent } from './register-customer-phone-number.component';

describe('RegisterCustomerPhoneNumberComponent', () => {
  let component: RegisterCustomerPhoneNumberComponent;
  let fixture: ComponentFixture<RegisterCustomerPhoneNumberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterCustomerPhoneNumberComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterCustomerPhoneNumberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
