import { integer, pgTable, timestamp, index, jsonb, pgEnum } from 'drizzle-orm/pg-core'

export const orderStatusEnum = pgEnum('order_status', ['pending', 'completed', 'cancelled'])

export const ordersTable = pgTable(
  'orders',
  {
    id: integer('id').primaryKey().generatedByDefaultAsIdentity(),
    customerId: integer('customer_id').notNull(),
    productIds: integer('product_ids').array(),
    data: jsonb(),
    status: orderStatusEnum('order_status').default('pending').notNull(),
    createdAt: timestamp('created_at', { withTimezone: true }).notNull().defaultNow(), // Always store in UTC
    updatedAt: timestamp('updated_at', { withTimezone: true }).notNull().defaultNow(), // Always store in UTC
  },
  (table) => [index('customer_id_idx').on(table.customerId), index('status_idx').on(table.status)], // We want fast querying on these columns
)

export type Order = typeof ordersTable.$inferSelect
export type OrderInsert = typeof ordersTable.$inferInsert
export type OrderStatus = (typeof orderStatusEnum.enumValues)[number]
