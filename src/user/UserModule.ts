import { Module } from '@nestjs/common';
import { UserController } from './UserController';
import { UserService } from './UserService';
import { User } from './User.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  controllers: [UserController],
  providers: [UserService],
  exports: [UserService, TypeOrmModule],
})
export class UserModule {}
