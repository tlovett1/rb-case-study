import { Injectable } from '@nestjs/common'

/**
 * This communicates with the inventory microservice.
 */

type Product = {
  id: number
  name: string
  price: number
  availableQuantity: number
  variantId: number
}

@Injectable()
export class InventoryService {
  async getProduct(id: number): Promise<Product> {
    // Simulate API call with Promise
    const product = await Promise.resolve({
      id,
      name: 'Product Name',
      price: 100,
      availableQuantity: 10,
      variantId: 1,
    })
    return product
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async updateProductQuantity(id: number, quantity: number, variantId?: number): Promise<boolean> {
    // API call to the inventory service to sell the product. The inventory service would
    // use a queue to process the order and update the inventory to ensure that there are no
    // race conditions. If by chance the product is sold out, the order would be rejected.
    return await Promise.resolve(true)
  }
}
