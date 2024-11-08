import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { GameDev } from './Game-dev.entity';
@Injectable()
export class GameDevService {
  constructor(
    @InjectRepository(GameDev)
    private gameDevRepository: Repository<GameDev>,
  ) {}

  async createGameDev(gameDev: GameDev): Promise<GameDev> {
    return this.gameDevRepository.save(gameDev);
  }

  async getGameDevs(): Promise<GameDev[]> {
    return this.gameDevRepository.find();
  }

  getGameDev(): string {
    return 'hello gameDev';
  }
}
