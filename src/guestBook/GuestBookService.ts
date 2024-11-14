import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { GuestBookRequest } from './dto/GuestBookRequest';
import { Repository } from 'typeorm';
import { GuestBook } from './GuestBook.entity';
@Injectable()
export class GuestBookService {
  constructor(
    @InjectRepository(GuestBook)
    private guestBookRepository: Repository<GuestBook>,
  ) {}

  async createGuestBook(
    guestBookRequest: GuestBookRequest,
  ): Promise<GuestBook> {
    const newGuestBook = this.guestBookRepository.create(guestBookRequest);
    return this.guestBookRepository.save(newGuestBook);
  }

  async getGuestBooks(): Promise<GuestBook[]> {
    return this.guestBookRepository.find();
  }

  async deleteGuestBook(id: number): Promise<void> {
    await this.guestBookRepository.delete(id);
  }

  async updateGuestBook(
    id: number,
    guestBookRequest: GuestBookRequest,
  ): Promise<GuestBook> {
    await this.guestBookRepository.update(id, guestBookRequest);
    return this.guestBookRepository.findOneBy({ id });
  }
}
