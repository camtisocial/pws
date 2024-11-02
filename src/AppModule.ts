import { Module } from '@nestjs/common';
import { AppController } from './AppController';
import { AppService } from './AppService';
import { AboutModule } from './about/AboutModule';
import { BlogModule } from './blog/BlogModule';
import { CookingModule } from './cooking/CookingModule';
import { GameDevModule } from './game-dev/GameDevModule';
import { WorkModule } from './work/WorkModule';
import { TypeOrmModule } from '@nestjs/typeorm';

TypeOrmModule.forRoot({
  type: 'postgres',
  host: process.env.pg_host,
  port: parseInt(process.env.pg_port, 10),
  username: process.env.pg_user,
  password: process.env.pg_password,
  database: process.env.db_name,
  autoLoadEntities: true,
  synchronize: true,
});

@Module({
  imports: [AboutModule, BlogModule, CookingModule, GameDevModule, WorkModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
