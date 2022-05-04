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
import { MatCardModule } from '@angular/material/card'


@NgModule({
  declarations: [
    RegisterCustomerComponent,
    CustomerDetailComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    CustomersRoutingModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule
  ]
})
export class CustomersModule {
}
