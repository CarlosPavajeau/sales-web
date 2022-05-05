import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Order } from '../models'
import { environment } from '../../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private http: HttpClient) {
  }

  save(order: Order) {
    return this.http.post<Order>(`${environment.apiUrl}/orders`, order)
  }
}
