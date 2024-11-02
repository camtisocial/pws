import { Controller, Get } from '@nestjs/common';
import { BlogService } from './BlogService';

@Controller('blog')
export class BlogController {
    constructor(private readonly blogService: BlogService){}
    @Get()
    getBlog(): string {
        return this.blogService.getBlog();
    }
}

