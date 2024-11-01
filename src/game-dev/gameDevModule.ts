import { Module } from '@nestjs/common';
import { GameDevController } from './gameDevController';
import { GameDevService } from './gameDevService';

@Module({
  controllers: [GameDevController],
  providers: [GameDevService]
})
export class GameDevModule {}
