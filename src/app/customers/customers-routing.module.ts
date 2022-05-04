import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { RegisterCustomerComponent } from './components/register-customer/register-customer.component'
import { AuthGuard } from '@auth0/auth0-angular'
import { CustomerDetailComponent } from './components/customer-detail/customer-detail.component'

const routes: Routes = [
  {
    path: 'register',
    component: RegisterCustomerComponent,
    canActivate: [AuthGuard]
  },
  {
    path: ':id',
    component: CustomerDetailComponent,
    canActivate: [AuthGuard]
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomersRoutingModule {
}
