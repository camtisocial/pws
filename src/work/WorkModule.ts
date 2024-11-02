import { Module } from '@nestjs/common';
import { WorkService } from './WorkService';
import { WorkController } from './WorkController';

@Module({
  providers: [WorkService],
  controllers: [WorkController]
})
export class WorkModule {}
