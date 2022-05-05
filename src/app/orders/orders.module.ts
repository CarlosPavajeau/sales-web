import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RegisterOrderComponent } from './components/register-order/register-order.component'
import { HttpClientModule } from '@angular/common/http'
import { OrdersRoutingModule } from './orders-routing.module'
import { ReactiveFormsModule } from '@angular/forms'
import { MatSelectModule } from '@angular/material/select'
import { MatInputModule } from '@angular/material/input'
import { MatButtonModule } from '@angular/material/button'
import { MatDividerModule } from '@angular/material/divider'
import { RegisterOrderItemComponent } from './components/register-order-item/register-order-item.component'
import { RegisterOrderPaymentComponent } from './components/register-order-payment/register-order-payment.component'
import { MatDialogModule } from '@angular/material/dialog'
import { MatDatepickerModule } from '@angular/material/datepicker'
import { MatNativeDateModule } from '@angular/material/core'


@NgModule({
  declarations: [
    RegisterOrderComponent,
    RegisterOrderItemComponent,
    RegisterOrderPaymentComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    OrdersRoutingModule,
    MatSelectModule,
    MatInputModule,
    MatButtonModule,
    MatDividerModule,
    MatDialogModule,
    MatDatepickerModule,
    MatNativeDateModule
  ]
})
export class OrdersModule {
}
