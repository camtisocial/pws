import { otelSDK } from './tracing';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './AppModule';
import { Logger, LoggerErrorInterceptor } from 'nestjs-pino';
import * as dotenv from 'dotenv';

dotenv.config({ path: 'config.local.env' });

async function bootstrap() {
  if (process.env.DEBUG_MODE === 'true') {
    otelSDK.start();
  }
  const app = await NestFactory.create(AppModule, { bufferLogs: true });
  app.useLogger(app.get(Logger));
  app.useGlobalInterceptors(new LoggerErrorInterceptor());
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
