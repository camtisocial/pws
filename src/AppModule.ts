import { Module } from '@nestjs/common';
import { AppController } from './AppController';
import { AppService } from './AppService';
import { AboutModule } from './about/AboutModule';
import { BlogModule } from './blog/BlogModule';
import { CookingModule } from './cooking/CookingModule';
import { LoggerModule } from 'nestjs-pino';
import { GameDevModule } from './game-dev/GameDevModule';
import { WorkModule } from './work/WorkModule';
import { TypeOrmModule } from '@nestjs/typeorm';
import * as dotenv from 'dotenv';
import { ConfigModule, ConfigService } from '@nestjs/config';
import databaseConfig from './database/database.config';
import AppConfig from './AppConfig';

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
    CookingModule,
    GameDevModule,
    WorkModule,
  ],
  controllers: [AppController],
  providers: [AppService],
  exports: [],
})
export class AppModule {}
