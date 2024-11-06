import { NestFactory } from '@nestjs/core';
import { AppModule } from './AppModule';
import { WinstonLogger } from './Winston.service';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const logger = app.get('LoggerService');
  logger.log('info', 'logger has started');
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
