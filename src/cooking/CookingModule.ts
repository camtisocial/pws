import { Module } from '@nestjs/common';
import { CookingController } from './CookingController';
import { CookingService } from './CookingService';
import { Cooking } from './Cooking.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Cooking])],
  controllers: [CookingController],
  providers: [CookingService],
})
export class CookingModule {}
