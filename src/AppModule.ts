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

dotenv.config({ path: 'config.local.env' });

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.POSTGRES_HOST,
      port: parseInt(process.env.POSTGRES_PORT, 10),
      username: process.env.POSTGRES_USER,
      password: process.env.POSTGRES_PASSWORD,
      database: process.env.POSTGRES_DB,
      autoLoadEntities: true,
      synchronize: false,
    }),
    AboutModule,
    BlogModule,
    CookingModule,
    GameDevModule,
    WorkModule,
    LoggerModule.forRoot({
      pinoHttp: {
        customProps: (req, res) => ({ context: 'HTTP' }),
        transport: {
          target: 'pino-pretty',
          options: { colorize: true, singleLine: true },
        },
      },
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
  exports: [],
})
export class AppModule {}
