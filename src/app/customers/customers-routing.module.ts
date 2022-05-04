import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { RegisterCustomerComponent } from './components/register-customer/register-customer.component'
import { AuthGuard } from '@auth0/auth0-angular'

const routes: Routes = [
  {
    path: 'register',
    component: RegisterCustomerComponent,
    canActivate: [AuthGuard]
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomersRoutingModule {
}
