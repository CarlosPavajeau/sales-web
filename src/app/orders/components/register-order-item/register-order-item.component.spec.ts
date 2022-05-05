import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterOrderItemComponent } from './register-order-item.component';

describe('RegisterOrderItemComponent', () => {
  let component: RegisterOrderItemComponent;
  let fixture: ComponentFixture<RegisterOrderItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterOrderItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterOrderItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
