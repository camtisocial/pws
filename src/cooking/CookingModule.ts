import { Module } from '@nestjs/common';
import { CookingController } from './CookingController';
import { CookingService } from './CookingService';

@Module({
    controllers: [CookingController],
    providers: [CookingService]

})
export class CookingModule {}
