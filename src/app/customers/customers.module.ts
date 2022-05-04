import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RegisterCustomerComponent } from './components/register-customer/register-customer.component'
import { ReactiveFormsModule } from '@angular/forms'
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatInputModule } from '@angular/material/input'
import { MatButtonModule } from '@angular/material/button'
import { HttpClientModule } from '@angular/common/http'
import { CustomersRoutingModule } from './customers-routing.module'


@NgModule({
  declarations: [
    RegisterCustomerComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    CustomersRoutingModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule
  ]
})
export class CustomersModule {
}
