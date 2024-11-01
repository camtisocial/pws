import { Module } from '@nestjs/common';
import { WorkService } from './workService';
import { WorkController } from './workController';

@Module({
  providers: [WorkService],
  controllers: [WorkController]
})
export class WorkModule {}
