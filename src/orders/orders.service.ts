import { Injectable } from '@nestjs/common'
import { DbService } from '@/db/db.service'
import { ordersTable, Order, OrderInsert } from '@/db/schema'
import { eq } from 'drizzle-orm'

@Injectable()
export class OrdersService {
  constructor(private readonly dbService: DbService) {}

  async createOrder(order: OrderInsert) {
    // Process order. Update shipping info

    const [createdOrder] = await this.dbService.db.insert(ordersTable).values(order).returning()
    return createdOrder
  }

  async getOrder(id: number) {
    const order = await this.dbService.db.select().from(ordersTable).where(eq(ordersTable.id, id))
    return order
  }

  async updateOrder(id: number, order: Order) {
    const [updatedOrder] = await this.dbService.db
      .update(ordersTable)
      .set(order)
      .where(eq(ordersTable.id, id))
      .returning()
    return updatedOrder
  }

  async deleteOrder(id: number) {
    await this.dbService.db.delete(ordersTable).where(eq(ordersTable.id, id))
  }

  async getOrders() {
    const orders = await this.dbService.db.select().from(ordersTable)
    return orders
  }
}
