import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Blog } from './Blog.entity';

@Injectable()
export class BlogService {
  constructor(
    @InjectRepository(Blog)
    private blogRepository: Repository<Blog>,
  ) {}

  async createBlog(blog: Blog): Promise<Blog> {
    return this.blogRepository.save(blog);
  }

  async getBlogs(): Promise<Blog[]> {
    return this.blogRepository.find();
  }

  getBlog(): string {
    return 'Hello Blog!!!';
  }
}
