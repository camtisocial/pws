import { Module } from '@nestjs/common';
import { WorkService } from './WorkService';
import { WorkController } from './WorkController';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Work } from './Work.entity';
@Module({
  imports: [TypeOrmModule.forFeature([Work])],
  providers: [WorkService],
  controllers: [WorkController],
})
export class WorkModule {}
