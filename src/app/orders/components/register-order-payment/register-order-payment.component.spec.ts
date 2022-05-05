import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterOrderPaymentComponent } from './register-order-payment.component';

describe('RegisterOrderPaymentComponent', () => {
  let component: RegisterOrderPaymentComponent;
  let fixture: ComponentFixture<RegisterOrderPaymentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterOrderPaymentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterOrderPaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
