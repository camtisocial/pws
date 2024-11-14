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
import { GuestBookRequest } from './dto/GuestBookRequest';
import { GuestBook } from './GuestBook.entity';
import { JwtAuthGuard } from '../auth/guards/JwtGuard';
import { GuestBookService } from './GuestBookService';

@Controller('guestBook')
export class GuestBookController {
  constructor(private readonly guestBookService: GuestBookService) {}
  @Get()
  getGuestBook(): Promise<GuestBook[]> {
    return this.guestBookService.getGuestBooks();
  }

  @Post('create')
  @UseGuards(JwtAuthGuard)
  async createguestBook(
    @Body() guestBookRequest: GuestBookRequest,
  ): Promise<GuestBook> {
    return this.guestBookService.createGuestBook(guestBookRequest);
  }

  @Delete(':id')
  async deleteguestBook(@Param('id') id: number): Promise<void> {
    return this.guestBookService.deleteGuestBook(id);
  }

  @Patch(':id')
  async updateguestBook(
    @Body() guestBookRequest: GuestBookRequest,
    @Param('id') id: number,
  ): Promise<GuestBook> {
    return this.guestBookService.updateGuestBook(id, guestBookRequest);
  }
}
