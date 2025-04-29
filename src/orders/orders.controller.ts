import { Controller, Get, Param, Post, Body, Put, Delete } from '@nestjs/common'
import { OrdersService } from './orders.service'
import { Order, OrderInsert } from 'src/db/schema'

@Controller('orders')
export class OrdersController {
  constructor(private readonly ordersService: OrdersService) {}

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
    return this.ordersService.createOrder(order)
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() order: Order) {
    return this.ordersService.updateOrder(parseInt(id), order)
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    return this.ordersService.deleteOrder(parseInt(id))
  }
}
