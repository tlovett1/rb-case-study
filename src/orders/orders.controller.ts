import { Controller, Get, Param, Post, Body, Put, Delete } from '@nestjs/common'
import { OrdersService } from './orders.service'
import { Order, OrderInsert } from '@/db/schema'
import { CustomersService } from '@/customers/customers.service'
import { InventoryService } from '@/inventory/inventory.service'

@Controller('orders')
export class OrdersController {
  constructor(
    private readonly ordersService: OrdersService,
    private readonly inventoryService: InventoryService,
    private readonly customerService: CustomersService,
  ) {}

  @Get()
  async findAll() {
    return this.ordersService.getOrders()
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.ordersService.getOrder(parseInt(id))
  }

  @Post()
  async create(@Body() order: OrderInsert) {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const customer = await this.customerService.getCustomer(order.customerId)

    const products: boolean[] = []

    // Todo: Group with Promise.all to make faster
    for (const { id, quantity, variantId } of order.productIds) {
      const result = await this.inventoryService.updateProductQuantity(id, quantity, variantId)
      products.push(result)
    }

    products.forEach((product) => {
      if (!product) {
        throw new Error('Product is out of stock')
      }
    })

    // Update order with customer info

    // Update order with product info

    return await this.ordersService.createOrder(order)
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() order: Order) {
    return this.ordersService.updateOrder(parseInt(id), order)
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    // Update products to be available again

    return this.ordersService.deleteOrder(parseInt(id))
  }
}
