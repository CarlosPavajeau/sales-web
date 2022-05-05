import { Product } from '../../products/models/product'
import { Address, Customer } from '../../customers/models'

export enum PaymentType {
  Cash = 'CASH',
  CreditCard = 'CREDIT_CARD',
  DebitCard = 'DEBIT_CARD',
}

export type Payment = {
  id?: number

  type: PaymentType
  amount: number
}

export type OrderItem = {
  id?: number

  product?: Product
  productCode?: string

  quantity: number
}

export type Order = {
  id?: number

  customer?: Customer
  customerId?: string

  deliveryAddress?: Address
  deliveryAddressId?: number

  items?: OrderItem[]
  payments?: Payment[]

  createdAt?: Date
  deliveredAt?: Date
}
