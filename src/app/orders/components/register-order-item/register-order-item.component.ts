import { Component, OnInit } from '@angular/core'
import { ProductService } from '../../../products/services/product.service'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { MatDialogRef } from '@angular/material/dialog'
import { Product } from '../../../products/models/product'

@Component({
  selector: 'app-register-order-item',
  templateUrl: './register-order-item.component.html',
  styleUrls: ['./register-order-item.component.css']
})
export class RegisterOrderItemComponent implements OnInit {

  form: FormGroup
  products: Product[] = []

  constructor(
    private productService: ProductService,
    private builder: FormBuilder,
    public dialogRef: MatDialogRef<RegisterOrderItemComponent>,
  ) {
    this.form = this.builder.group({
      product: ['', [Validators.required]],
      quantity: [1, [Validators.required, Validators.min(1)]]
    })
  }

  ngOnInit(): void {
    this.productService.fetchAll().subscribe(products => this.products = products)
  }

  onSubmit() {
    if (this.form.valid) {
      this.dialogRef.close(this.form.value)
    }
  }
}
