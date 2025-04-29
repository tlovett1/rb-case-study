import { Module } from '@nestjs/common'
import { OrdersService } from './orders.service'
import { InventoryService } from '@/inventory/inventory.service'
import { CustomersService } from '@/customers/customers.service'
import { OrdersController } from './orders.controller'
import { DbModule } from '@/db/db.module'
import { CustomersModule } from '@/customers/customers.module'
import { InventoryModule } from '@/inventory/inventory.module'

@Module({
  imports: [DbModule, CustomersModule, InventoryModule],
  providers: [OrdersService, CustomersService, InventoryService],
  exports: [OrdersService],
  controllers: [OrdersController],
})
export class OrdersModule {}
