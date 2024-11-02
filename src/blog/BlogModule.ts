import { Module } from '@nestjs/common';
import { BlogController } from './BlogController';
import { BlogService} from './BlogService';

@Module({
    controllers: [BlogController],
    providers: [BlogService]
})
export class BlogModule {}
