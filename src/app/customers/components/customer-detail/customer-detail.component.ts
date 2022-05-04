import { Component, OnInit } from '@angular/core'
import { ActivatedRoute, Router } from '@angular/router'
import { Observable } from 'rxjs'
import { Customer } from '../../models'
import { CustomerService } from '../../services/customer.service'

@Component({
  selector: 'app-customer-detail',
  templateUrl: './customer-detail.component.html',
  styleUrls: ['./customer-detail.component.css']
})
export class CustomerDetailComponent implements OnInit {

  customer$: Observable<Customer>

  constructor(private service: CustomerService, private route: ActivatedRoute) {
    const id = route.snapshot.paramMap.get('id') as string
    this.customer$ = service.fetchById(id)
  }

  ngOnInit(): void {
  }
}
