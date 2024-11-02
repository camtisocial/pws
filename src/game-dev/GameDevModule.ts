import { Module } from '@nestjs/common';
import { GameDevController } from './GameDevController';
import { GameDevService } from './GameDevService';

@Module({
  controllers: [GameDevController],
  providers: [GameDevService]
})
export class GameDevModule {}
