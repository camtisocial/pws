import { Module } from '@nestjs/common';
import { AboutController } from './AboutController';
import { AboutService } from './AboutService';
import { TypeOrmModule } from '@nestjs/typeorm';
import { About } from './About';

@Module({
  imports: [TypeOrmModule.forFeature([About])],
  controllers: [AboutController],
  providers: [AboutService],
})
export class AboutModule {}
