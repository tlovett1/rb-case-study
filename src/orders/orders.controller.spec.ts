import { DbService } from '@/db/db.service'
import { OrdersController } from './orders.controller'
import { OrdersService } from './orders.service'
import { InventoryService } from '@/inventory/inventory.service'
import { CustomersService } from '@/customers/customers.service'

describe('OrdersController', () => {
  let dbService: DbService
  let ordersController: OrdersController
  let ordersService: OrdersService
  let inventoryService: InventoryService
  let customersService: CustomersService

  beforeEach(() => {
    dbService = new DbService()
    ordersService = new OrdersService(dbService)
    inventoryService = new InventoryService()
    customersService = new CustomersService()
    ordersController = new OrdersController(ordersService, inventoryService, customersService)
  })

  describe('findAll', () => {
    it('should return an array of orders', async () => {
      // Todo: Actually return orders from the orders service
      jest.spyOn(ordersService, 'getOrders').mockImplementation(() => Promise.resolve([]))

      expect(await ordersController.findAll()).toEqual([])
    })
  })
})
