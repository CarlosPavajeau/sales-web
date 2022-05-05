import { Component, OnInit } from '@angular/core'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { OrderService } from '../../services/order.service'
import { CustomerService } from '../../../customers/services/customer.service'
import { Address } from '../../../customers/models'
import { MatDialog } from '@angular/material/dialog'
import { RegisterOrderItemComponent } from '../register-order-item/register-order-item.component'
import { OrderItem } from '../../models'
import { RegisterOrderPaymentComponent } from '../register-order-payment/register-order-payment.component'

@Component({
  selector: 'app-register-order',
  templateUrl: './register-order.component.html',
  styleUrls: ['./register-order.component.css']
})
export class RegisterOrderComponent implements OnInit {

  form: FormGroup
  addresses: Address[] = []

  constructor(
    private service: OrderService,
    private builder: FormBuilder,
    private customerService: CustomerService,
    private dialog: MatDialog
  ) {
    this.form = this.builder.group({
      customerId: ['', [Validators.required]],
      deliveryAddressId: ['', [Validators.required]],
      items: [[], [Validators.required]],
      payments: [[], [Validators.required]],
      deliveredAt: ['', [Validators.required]]
    })
  }

  ngOnInit(): void {
  }

  onSubmit() {
    if (this.form.valid) {
      this.service.save(this.form.value).subscribe(result => {
        if (result) {
          console.log(result)
          this.form.reset()
        }
      })
    }
  }

  searchClient() {
    const customerId = this.form.get('customerId')?.value
    if (customerId) {
      this.customerService.fetchById(customerId)
        .subscribe(customer => {
          this.addresses = customer.addresses
        })
    }
  }

  openRegisterItemDialog() {
    const dialogRef = this.dialog.open(RegisterOrderItemComponent, {
      width: '400px',
    })

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        const item = {
          productCode: result.product.code,
          product: result.product,
          quantity: result.quantity,
        }
        const items = this.form.get('items')?.value
        this.form.get('items')?.setValue([...items, item])
      }
    })
  }

  openRegisterPaymentDialog() {
    const dialogRef = this.dialog.open(RegisterOrderPaymentComponent, {
      width: '400px',
    })

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        const payments = this.form.get('payments')?.value
        this.form.get('payments')?.setValue([...payments, result])
      }
    })
  }
}
