import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AboutRequest } from './dto/AboutRequest';
import { Repository } from 'typeorm';
import { About } from './About.entity';
@Injectable()
export class AboutService {
  constructor(
    @InjectRepository(About)
    private aboutRepository: Repository<About>,
  ) {}

  async createAbout(aboutRequest: AboutRequest): Promise<About> {
    const newAbout = this.aboutRepository.create(aboutRequest);
    return this.aboutRepository.save(newAbout);
  }

  async getAbouts(): Promise<About[]> {
    return this.aboutRepository.find();
  }

  async deleteAbout(id: number): Promise<void> {
    await this.aboutRepository.delete(id);
  }

  async updateAbout(id: number, aboutRequest: AboutRequest): Promise<About> {
    await this.aboutRepository.update(id, aboutRequest);
    return this.aboutRepository.findOneBy({ id });
  }
}
