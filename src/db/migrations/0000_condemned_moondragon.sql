CREATE TYPE "public"."order_status" AS ENUM('pending', 'completed', 'cancelled');--> statement-breakpoint
CREATE TABLE "orders" (
	"id" integer PRIMARY KEY NOT NULL,
	"customer_id" integer NOT NULL,
	"product_ids" integer[],
	"data" jsonb,
	"order_status" "order_status" DEFAULT 'pending' NOT NULL,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL,
	"updated_at" timestamp with time zone DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE INDEX "customer_id_idx" ON "orders" USING btree ("customer_id");--> statement-breakpoint
CREATE INDEX "status_idx" ON "orders" USING btree ("order_status");