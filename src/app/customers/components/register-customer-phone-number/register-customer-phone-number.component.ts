import { Component, Inject, OnInit } from '@angular/core'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { CustomerService } from '../../services/customer.service'
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog'

@Component({
  selector: 'app-register-customer-phone-number',
  templateUrl: './register-customer-phone-number.component.html',
  styleUrls: ['./register-customer-phone-number.component.css']
})
export class RegisterCustomerPhoneNumberComponent implements OnInit {

  form: FormGroup

  constructor(
    private service: CustomerService,
    private builder: FormBuilder,
    public dialogRef: MatDialogRef<RegisterCustomerPhoneNumberComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { id: string }) {
    this.form = this.builder.group({
      number: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(10)]]
    })
  }

  ngOnInit(): void {
  }

  onSubmit() {
    if (this.form.valid) {
      this.service.addPhoneNumber(this.data.id, this.form.value)
        .subscribe((response) => {
          if (response) {
            this.dialogRef.close(this.form.value)
          }
        })
    }
  }
}
