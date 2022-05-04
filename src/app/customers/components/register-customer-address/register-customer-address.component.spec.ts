import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterCustomerAddressComponent } from './register-customer-address.component';

describe('RegisterCustomerAddressComponent', () => {
  let component: RegisterCustomerAddressComponent;
  let fixture: ComponentFixture<RegisterCustomerAddressComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterCustomerAddressComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterCustomerAddressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
