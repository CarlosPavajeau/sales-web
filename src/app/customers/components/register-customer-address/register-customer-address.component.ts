import { Component, Inject, OnInit } from '@angular/core'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { CustomerService } from '../../services/customer.service'
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog'

@Component({
  selector: 'app-register-customer-address',
  templateUrl: './register-customer-address.component.html',
  styleUrls: ['./register-customer-address.component.css']
})
export class RegisterCustomerAddressComponent implements OnInit {

  form: FormGroup

  constructor(
    private service: CustomerService,
    private builder: FormBuilder,
    public dialogRef: MatDialogRef<RegisterCustomerAddressComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { id: string }
  ) {
    this.form = this.builder.group({
      state: ['', [Validators.required]],
      city: ['', [Validators.required]],
      street: ['', [Validators.required]],
      zip: ['']
    })
  }

  ngOnInit(): void {
  }

  onSubmit() {
    if (this.form.valid) {
      this.service.addAddress(this.data.id, this.form.value)
        .subscribe((response) => {
          if (response) {
            this.dialogRef.close(this.form.value)
          }
        })
    }
  }
}
