import { Component, OnInit } from '@angular/core'
import { ProductService } from '../../services/product.service'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { Product } from '../../models/product'

@Component({
  selector: 'app-register-product',
  templateUrl: './register-product.component.html',
  styleUrls: ['./register-product.component.css']
})
export class RegisterProductComponent implements OnInit {

  form: FormGroup

  constructor(
    private service: ProductService,
    private builder: FormBuilder,
  ) {
    this.form = this.builder.group({
      code: ['', [Validators.required]],
      name: ['', [Validators.required]],
      price: ['', [Validators.required, Validators.min(0)]],
      tax: ['', [Validators.required, Validators.min(0), Validators.max(1)]],
    })
  }

  ngOnInit(): void {

  }

  onSubmit(product: Product) {
    if (product && this.form.valid) {
      this.service.save(product)
        .subscribe((response) => {
          if (response) {
            this.form.reset()
          }
        })
    }
  }
}
