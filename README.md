# Reebelo Case Study

## Overview

This is a NestJS-based backend service for managing orders. It uses PostgreSQL as the database with Drizzle ORM for database operations.

## Local Development

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
- Dockerfile for local Postgres

### Database Schema

The application uses a PostgreSQL database with the following main table:

- `orders` table with fields:
- `id` (Primary Key)
- `customer_id`
- `shippingAddress` (JSONB)
- `shippingCompany` (Text)
- `shippingTrackingNumber` (Text)
- `product_ids` (Array)
- `data` (JSONB)
- `order_status` (Enum: pending, completed, cancelled)
- `created_at`
- `updated_at`

## Deployment / Infrastructure

The database would utilize AWS RDS Postgres. The API would be deployed on AWS Fargate which would handle automatic scaling and would be cost efficienct given the swings in traffic. I would put a CDN (AWS CloudFront) in front of the application to cache common requests near users and protect against spam.

## Future Considerations / Todo List / Improving Scalability

* Configure AWS Fargate
* Implement CI / CD with GitHub actions
* Configure logging to AWS CloudWatch
* Configure AWS RDS with read replicas for high-traffic scenarios
* Need to handle authentication and authorization via AWS API Gateway. This API obviously cannot be publicly accessible.
* Write unit tests
* Implement customer and inventory microservices
* Improve inventory updates to be more efficient