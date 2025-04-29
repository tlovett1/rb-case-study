import { integer, pgTable, timestamp, index, jsonb, pgEnum, text } from 'drizzle-orm/pg-core'

export const orderStatusEnum = pgEnum('order_status', ['pending', 'completed', 'cancelled'])

export const ordersTable = pgTable(
  'orders',
  {
    id: integer('id').primaryKey().generatedByDefaultAsIdentity(),
    customerId: integer('customer_id').notNull(),
    productIds: jsonb('product_ids').$type<Array<{ id: number; quantity: number; variantId: number }>>().notNull(), // Stores products like [ { id: 1, quantity: 1, variantId: 1 }, { id: 2, quantity: 1, variantId: 2 } ]
    data: jsonb(),
    shippingAddress: jsonb(),
    shippingCompany: text('shipping_company'),
    shippingTrackingNumber: text('shipping_tracking_number'),
    status: orderStatusEnum('order_status').default('pending').notNull(),
    createdAt: timestamp('created_at', { withTimezone: true }).notNull().defaultNow(), // Always store in UTC
    updatedAt: timestamp('updated_at', { withTimezone: true }).notNull().defaultNow(), // Always store in UTC
  },
  (table) => [index('customer_id_idx').on(table.customerId), index('status_idx').on(table.status)], // We want fast querying on these columns
)

export type Order = typeof ordersTable.$inferSelect
export type OrderInsert = typeof ordersTable.$inferInsert
export type OrderStatus = (typeof orderStatusEnum.enumValues)[number]
