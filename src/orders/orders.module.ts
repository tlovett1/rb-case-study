import { Module } from '@nestjs/common'
import { OrdersService } from './orders.service'
import { OrdersController } from './orders.controller'
import { DbModule } from 'src/db/db.module'

@Module({
  imports: [DbModule],
  providers: [OrdersService],
  exports: [OrdersService],
  controllers: [OrdersController],
})
export class OrdersModule {}
