import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Work } from './Work.entity';
@Injectable()
export class WorkService {
  constructor(
    @InjectRepository(Work)
    private workRepository: Repository<Work>,
  ) {}

  async createWork(work: Work): Promise<Work> {
    return this.workRepository.save(work);
  }

  async getWorks(): Promise<Work[]> {
    return this.workRepository.find();
  }

  getWork(): string {
    return 'hello work';
  }
}
