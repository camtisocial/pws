import { Controller, Get, Post } from '@nestjs/common';
import { AboutService } from './AboutService';

@Controller('about')
export class AboutController {
  constructor(private readonly aboutService: AboutService) {}
  @Get()
  getAbout(): string {
    return this.aboutService.getAbout();
  }

  @Post()
  createAbout(): string {
    return 'Create About';
  }
}
