import { Module } from '@nestjs/common';
import { GuestBookController } from './GuestBookController';
import { GuestBookService } from './GuestBookService';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GuestBook } from './GuestBook.entity';

@Module({
  imports: [TypeOrmModule.forFeature([GuestBook])],
  controllers: [GuestBookController],
  providers: [GuestBookService],
})
export class GuestBookModule {}
