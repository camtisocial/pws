import { Module } from '@nestjs/common';
import { AppController } from './AppController';
import { AppService } from './AppService';
import { AboutModule } from './about/AboutModule';
import { AuthModule } from './auth/AuthModule';
import { BlogModule } from './blog/BlogModule';
import { LoggerModule } from 'nestjs-pino';
import { TypeOrmModule } from '@nestjs/typeorm';
import * as dotenv from 'dotenv';
import { ConfigModule, ConfigService } from '@nestjs/config';
import databaseConfig from './database/database.config';
import AppConfig from './AppConfig';
import { UserModule } from './user/UserModule';

dotenv.config({ path: 'config.local.env' });

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      cache: true,
      load: [databaseConfig, AppConfig],
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => ({
        ...configService.get('database'),
      }),
      inject: [ConfigService],
    }),
    LoggerModule.forRoot({
      pinoHttp: {
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        customProps: (_req, _res) => ({ context: 'HTTP' }),
        transport: {
          target: 'pino-pretty',
          options: { colorize: true, singleLine: true },
        },
      },
    }),
    AboutModule,
    BlogModule,
    UserModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
  exports: [],
})
export class AppModule {}
