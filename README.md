# Reebelo Case Study

## Overview

This is a NestJS-based backend service for managing orders. It uses PostgreSQL as the database with Drizzle ORM for database operations.

### Tech Stack

- **Framework**: NestJS
- **Database**: PostgreSQL
- **ORM**: Drizzle ORM
- **Language**: TypeScript

### Key Dependencies

- `@nestjs/*` - Core NestJS packages for building the application
- `drizzle-orm` - TypeScript ORM for database operations
- `pg` - PostgreSQL client for Node.js

### Development Tools

- `drizzle-kit` - CLI tools for Drizzle ORM
- `jest` - Testing framework
- `typescript` - Programming language
- `eslint/prettier` - Code formatting and linting

### Database Schema

The application uses a PostgreSQL database with the following main table:

- `orders` table with fields:
  - `id` (Primary Key)
  - `customer_id`
  - `product_ids` (Array)
  - `data` (JSONB)
  - `order_status` (Enum: pending, completed, cancelled)
  - `created_at`
  - `updated_at`

### Available Scripts

- `npm run build` - Build the application
- `npm run start:dev` - Start in development mode
- `npm run test` - Run tests
- `npm run db:generate` - Generate database migrations
- `npm run db:migrate` - Run database migrations
- `npm run db:studio` - Launch Drizzle Studio
