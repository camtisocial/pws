import { Controller, Get } from '@nestjs/common';
import { CookingService } from './CookingService';

@Controller('cooking')
export class CookingController {
    constructor(private readonly cookingService: CookingService) {}
    @Get()
    getCooking(): string {
        return this.cookingService.getCooking();
    }
}

