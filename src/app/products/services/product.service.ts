import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Product } from '../models/product'
import { environment } from '../../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) {
  }

  save(product: Product) {
    return this.http.post<Product>(`${environment.apiUrl}/products`, product)
  }

  fetchAll() {
    return this.http.get<Product[]>(`${environment.apiUrl}/products`)
  }
}
