import { otelSDK } from './tracing';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './AppModule';
import { Logger, LoggerErrorInterceptor } from 'nestjs-pino';
import * as dotenv from 'dotenv';
import * as fs from 'fs';

dotenv.config({ path: 'config.local.env' });

async function bootstrap() {
  if (process.env.DEBUG_MODE === 'true') {
    otelSDK.start();
  }
  const httpsOptions = {
    key: fs.readFileSync(process.env.CERTS_KEY_PATH),
    cert: fs.readFileSync(process.env.CERTS_CERT_PATH),
  };
  const app = await NestFactory.create(AppModule, {
    httpsOptions,
    bufferLogs: true,
  });
  app.useLogger(app.get(Logger));
  app.useGlobalInterceptors(new LoggerErrorInterceptor());
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
