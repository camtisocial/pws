import { Controller, Get } from '@nestjs/common';
import { WorkService } from './WorkService';

@Controller('work')
export class WorkController {
    constructor(private readonly workService: WorkService){}
    @Get()
    getWork(): string {
        return this.workService.getWork();
    }
}
