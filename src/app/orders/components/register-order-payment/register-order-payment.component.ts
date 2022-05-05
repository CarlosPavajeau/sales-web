import { Component, OnInit } from '@angular/core'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { MatDialogRef } from '@angular/material/dialog'
import { PaymentType } from '../../models'

@Component({
  selector: 'app-register-order-payment',
  templateUrl: './register-order-payment.component.html',
  styleUrls: ['./register-order-payment.component.css']
})
export class RegisterOrderPaymentComponent implements OnInit {

  form: FormGroup

  types = [PaymentType.CreditCard, PaymentType.Cash, PaymentType.DebitCard]

  constructor(
    private builder: FormBuilder,
    public dialogRef: MatDialogRef<RegisterOrderPaymentComponent>,
  ) {
    this.form = this.builder.group({
      type: ['', [Validators.required]],
      amount: ['', [Validators.required]],
    })
  }

  ngOnInit(): void {
  }

  onSubmit() {
    if (this.form.valid) {
      this.dialogRef.close(this.form.value)
    }
  }
}
