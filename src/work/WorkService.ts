import { Injectable } from '@nestjs/common';

@Injectable()
export class WorkService {
    getWork(): string {
        return 'hello work';
    }
}
