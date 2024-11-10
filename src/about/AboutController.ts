import {
  Controller,
  Get,
  Post,
  UseGuards,
  Body,
  Delete,
  Patch,
  Param,
} from '@nestjs/common';
import { AboutRequest } from './dto/AboutRequest';
import { About } from './About.entity';
import { JwtAuthGuard } from '../auth/guards/JwtGuard';
import { AboutService } from './AboutService';

@Controller('about')
export class AboutController {
  constructor(private readonly aboutService: AboutService) {}
  @Get()
  getAbout(): string {
    return this.aboutService.getAbout();
  }

  @Post('create')
  @UseGuards(JwtAuthGuard)
  async createAbout(@Body() aboutRequest: AboutRequest): Promise<About> {
    return this.aboutService.createAbout(aboutRequest);
  }

  @Delete(':id')
  async deleteAbout(id: number): Promise<void> {
    return this.aboutService.deleteAbout(id);
  }

  @Patch(':id')
  async updateAbout(
    @Body() aboutRequest: AboutRequest,
    @Param('id') id: number,
  ): Promise<About> {
    return this.aboutService.updateAbout(id, aboutRequest);
  }
}
