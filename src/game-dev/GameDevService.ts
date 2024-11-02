import { Injectable } from '@nestjs/common';

@Injectable()
export class GameDevService {
    getGameDev(): string {
        return 'hello gameDev';
    }
}
