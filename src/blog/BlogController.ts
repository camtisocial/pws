import {
  Controller,
  Get,
  Post,
  Body,
  UseGuards,
  Delete,
  Patch,
  Param,
} from '@nestjs/common';
import { JwtAuthGuard } from '../auth/guards/JwtGuard';
import { BlogRequest } from './dto/BlogRequest';
import { Blog } from './Blog.entity';
import { BlogService } from './BlogService';

@Controller('blog')
export class BlogController {
  constructor(private readonly blogService: BlogService) {}
  @Get()
  getBlog(): Promise<Blog[]> {
    return this.blogService.getBlogs();
  }

  @Post('create')
  @UseGuards(JwtAuthGuard)
  async createBlog(@Body() blogRequest: BlogRequest): Promise<Blog> {
    return this.blogService.createBlog(blogRequest);
  }

  @Delete(':id')
  async deleteBlog(@Param('id') id: number): Promise<void> {
    return this.blogService.deleteBlog(id);
  }

  @Patch(':id')
  async updateAbout(
    @Body() blogRequest: BlogRequest,
    @Param('id') id: number,
  ): Promise<Blog> {
    return this.blogService.updateBlog(id, blogRequest);
  }
}
