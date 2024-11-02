import { Controller, Get } from '@nestjs/common';
import { GameDevService } from './GameDevService';

@Controller('game-dev')
export class GameDevController {
    constructor(private readonly gameDevService: GameDevService){}
    @Get()
    getGameDev(): string { 
        return this.gameDevService.getGameDev();
    }

}
