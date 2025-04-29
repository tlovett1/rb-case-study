import { NestFactory } from '@nestjs/core'
import * as dotenv from 'dotenv'
import { AppModule } from './app.module'

dotenv.config({ path: ['.env.local', '.env'] })

async function bootstrap() {
  const app = await NestFactory.create(AppModule)
  await app.listen(process.env.PORT ?? 3000)
}

void bootstrap()
