import { Injectable } from '@nestjs/common';

@Injectable()
export class CookingService {
    getCooking(): string {
        return 'hello cooking';
    }
}

