import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { RegisterOrderComponent } from './components/register-order/register-order.component'
import { AuthGuard } from '@auth0/auth0-angular'

const routes: Routes = [
  {
    path: 'register',
    component: RegisterOrderComponent,
    canActivate: [AuthGuard]
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrdersRoutingModule {
}
