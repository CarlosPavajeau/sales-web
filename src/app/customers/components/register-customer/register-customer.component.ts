import { Component, OnInit } from '@angular/core'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { CustomerService } from '../../services/customer.service'
import { Router } from '@angular/router'

@Component({
  selector: 'app-register-customer',
  templateUrl: './register-customer.component.html',
  styleUrls: ['./register-customer.component.css']
})
export class RegisterCustomerComponent implements OnInit {

  form: FormGroup

  constructor(
    private service: CustomerService,
    private builder: FormBuilder,
    private router: Router) {
    this.form = builder.group({
      id: ['', [Validators.required]],
      name: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
    })
  }

  ngOnInit(): void {
  }

  onSubmit() {
    if (this.form.valid) {
      this.service.save(this.form.value)
        .subscribe((response) => {
          if (response) {
            this.router.navigate(['/customers', this.form.get('id')?.value])
              .then(() => {
              })
          }
        })
    }
  }
}
