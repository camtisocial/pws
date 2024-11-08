import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Cooking } from './Cooking.entity';
@Injectable()
export class CookingService {
  constructor(
    @InjectRepository(Cooking)
    private cookingRepository: Repository<Cooking>,
  ) {}

  async createCooking(cooking: Cooking): Promise<Cooking> {
    return this.cookingRepository.save(cooking);
  }

  async getCookings(): Promise<Cooking[]> {
    return this.cookingRepository.find();
  }

  getCooking(): string {
    return 'hello cooking';
  }
}
