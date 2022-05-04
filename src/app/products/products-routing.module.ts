import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { RegisterProductComponent } from './components/register-product/register-product.component'
import { AuthGuard } from '@auth0/auth0-angular'

const routes: Routes = [
  {
    path: 'register',
    component: RegisterProductComponent,
    canActivate: [AuthGuard]
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule {
}
