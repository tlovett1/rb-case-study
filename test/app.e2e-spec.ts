import { Test, TestingModule } from '@nestjs/testing'
import { INestApplication } from '@nestjs/common'
import * as request from 'supertest'
import { App } from 'supertest/types'
import { OrdersModule } from '@/orders/orders.module'
import * as dotenv from 'dotenv'

dotenv.config({ path: ['.env.local', '.env'] })

describe('OrdersController (e2e)', () => {
  let app: INestApplication<App>

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [OrdersModule],
    }).compile()

    app = moduleFixture.createNestApplication()
    await app.init()
  })

  afterEach(async () => {
    await app.close()
  })

  it('/orders (GET)', () => {
    // Todo: Build out tests
    return request(app.getHttpServer()).get('/orders').expect(200)
  })
})
