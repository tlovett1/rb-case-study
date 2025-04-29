import * as dotenv from 'dotenv'
import { defineConfig } from 'drizzle-kit'

// Try loading .env.local first, then fall back to .env
dotenv.config({ path: ['.env.local', '.env'] })

export default defineConfig({
  out: './src/db/migrations',
  schema: './src/db/schema.ts',
  dialect: 'postgresql',
  dbCredentials: {
    url: process.env.DATABASE_URL!,
  },
})
