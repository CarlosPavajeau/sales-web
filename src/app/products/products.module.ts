import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RegisterProductComponent } from './components/register-product/register-product.component'
import { ProductsRoutingModule } from './products-routing.module'
import { HttpClientModule } from '@angular/common/http'
import { ReactiveFormsModule } from '@angular/forms'
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatInputModule } from '@angular/material/input'
import { MatButtonModule } from '@angular/material/button'


@NgModule({
  declarations: [
    RegisterProductComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    ProductsRoutingModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule
  ]
})
export class ProductsModule {
}
