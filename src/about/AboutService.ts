import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { About } from './About.entity';
@Injectable()
export class AboutService {
  constructor(
    @InjectRepository(About)
    private aboutRepository: Repository<About>,
  ) {}

  async createAbout(about: About): Promise<About> {
    return this.aboutRepository.save(about);
  }

  async getAbouts(): Promise<About[]> {
    return this.aboutRepository.find();
  }

  getAbout(): string {
    return 'Hello About';
  }
}
