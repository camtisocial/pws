import { Module } from '@nestjs/common';
import { GameDevController } from './GameDevController';
import { GameDevService } from './GameDevService';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GameDev } from './Game-dev';

@Module({
  imports: [TypeOrmModule.forFeature([GameDev])],
  controllers: [GameDevController],
  providers: [GameDevService],
})
export class GameDevModule {}
