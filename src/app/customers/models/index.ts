export type Address = {
  id?: number
  city: string
  state: string
  street: string
  zip?: string
}

export type PhoneNumber = {
  id?: number
  number: string
}

export type Customer = {
  id: string
  name: string
  lastName: string
  email: string

  addresses: Address[]
  phoneNumbers: PhoneNumber[]
}
