import { Component, OnInit } from '@angular/core'
import { ActivatedRoute, Router } from '@angular/router'
import { Observable } from 'rxjs'
import { Customer } from '../../models'
import { CustomerService } from '../../services/customer.service'
import { MatDialog } from '@angular/material/dialog'
import {
  RegisterCustomerPhoneNumberComponent
} from '../register-customer-phone-number/register-customer-phone-number.component'

@Component({
  selector: 'app-customer-detail',
  templateUrl: './customer-detail.component.html',
  styleUrls: ['./customer-detail.component.css']
})
export class CustomerDetailComponent implements OnInit {

  id: string
  customer$: Observable<Customer>

  constructor(private service: CustomerService, private route: ActivatedRoute, private dialog: MatDialog) {
    this.id = route.snapshot.paramMap.get('id') as string
    this.customer$ = service.fetchById(this.id)
  }

  ngOnInit(): void {
  }

  openRegisterPhoneNumberDialog() {
    const dialogRef = this.dialog.open(RegisterCustomerPhoneNumberComponent, {
      width: '350px',
      data: {
        id: this.id
      }
    })

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.customer$ = this.service.fetchById(this.id)
      }
    })
  }
}
