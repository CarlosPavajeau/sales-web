import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Address, Customer, PhoneNumber } from '../models'

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private http: HttpClient) {
  }

  save(customer: Customer) {
    return this.http.post('/api/customers', customer)
  }

  addPhoneNumber(customerId: string, phoneNumber: PhoneNumber) {
    return this.http.post(`/api/customers/${customerId}/phone_numbers`, phoneNumber)
  }

  addAddress(customerId: string, address: Address) {
    return this.http.post(`/api/customers/${customerId}/addresses`, address)
  }

  fetchById(id: string) {
    return this.http.get<Customer>(`/api/customers/${id}`)
  }
}
