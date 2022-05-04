import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RegisterCustomerComponent } from './components/register-customer/register-customer.component'
import { ReactiveFormsModule } from '@angular/forms'
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatInputModule } from '@angular/material/input'
import { MatButtonModule } from '@angular/material/button'
import { HttpClientModule } from '@angular/common/http'
import { CustomersRoutingModule } from './customers-routing.module';
import { CustomerDetailComponent } from './components/customer-detail/customer-detail.component'
import { MatCardModule } from '@angular/material/card';
import { RegisterCustomerAddressComponent } from './components/register-customer-address/register-customer-address.component';
import { RegisterCustomerPhoneNumberComponent } from './components/register-customer-phone-number/register-customer-phone-number.component';
import { MatDialogModule } from '@angular/material/dialog'


@NgModule({
  declarations: [
    RegisterCustomerComponent,
    CustomerDetailComponent,
    RegisterCustomerAddressComponent,
    RegisterCustomerPhoneNumberComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    CustomersRoutingModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatDialogModule
  ]
})
export class CustomersModule {
}
