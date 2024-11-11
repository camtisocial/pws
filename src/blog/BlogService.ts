import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BlogRequest } from './dto/BlogRequest';
import { Repository } from 'typeorm';
import { Blog } from './Blog.entity';

@Injectable()
export class BlogService {
  constructor(
    @InjectRepository(Blog)
    private blogRepository: Repository<Blog>,
  ) {}

  async createBlog(blogRequest: BlogRequest): Promise<Blog> {
    const newBlog = this.blogRepository.create(blogRequest);
    return this.blogRepository.save(newBlog);
  }

  async getBlogs(): Promise<Blog[]> {
    return this.blogRepository.find();
  }

  async deleteBlog(id: number): Promise<void> {
    await this.blogRepository.delete(id);
  }

  async updateBlog(id: number, blogRequest: BlogRequest): Promise<Blog> {
    await this.blogRepository.update(id, blogRequest);
    return this.blogRepository.findOneBy({ id });
  }
}
