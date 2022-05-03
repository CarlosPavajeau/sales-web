import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { RegisterProductComponent } from './components/register-product/register-product.component'

const routes: Routes = [
  {
    path: 'register',
    component: RegisterProductComponent,
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule {
}
