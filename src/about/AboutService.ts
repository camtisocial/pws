import { Injectable } from '@nestjs/common';

@Injectable()
export class AboutService {
  getAbout(): string {
    return 'Hello About';
  }
}
