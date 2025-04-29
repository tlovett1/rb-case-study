import { Module } from '@nestjs/common'
import { OrdersService } from './orders.service'
import { InventoryService } from 'src/inventory/inventory.service'
import { CustomersService } from 'src/customers/customers.service'
import { OrdersController } from './orders.controller'
import { DbModule } from 'src/db/db.module'
import { CustomersModule } from 'src/customers/customers.module'
import { InventoryModule } from 'src/inventory/inventory.module'

@Module({
  imports: [DbModule, CustomersModule, InventoryModule],
  providers: [OrdersService, CustomersService, InventoryService],
  exports: [OrdersService],
  controllers: [OrdersController],
})
export class OrdersModule {}
