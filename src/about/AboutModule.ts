import { Module } from '@nestjs/common';
import { AboutController } from './AboutController';
import { AboutService } from './AboutService';

@Module({
  controllers: [AboutController],
  providers: [AboutService],
})
export class AboutModule {}
