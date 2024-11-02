import { Injectable } from '@nestjs/common';

@Injectable()
export class BlogService {
    getBlog(): string {
        return 'Hello Blog!!!';
    }
}
