import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('about')
export class AboutController {
    @Get()
    async getHello(): string {
        return this.appService.getHello();
    }
}
