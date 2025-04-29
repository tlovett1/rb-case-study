import { Injectable } from '@nestjs/common'

type Customer = {
  id: number
  name: string
  email: string
  address: string
  phone: string
}

@Injectable()
export class CustomersService {
  async getCustomer(id: number): Promise<Customer> {
    // Simulate API call with Promise
    const customer = await Promise.resolve({
      id,
      name: 'John Doe',
      email: 'john.doe@example.com',
      address: '123 Main St, Anytown, USA',
      phone: '123-456-7890',
    })
    return customer
  }
}
