import { Controller, Post, Body, Get, Param } from '@nestjs/common';
import { UserService } from './UserService';
import { User } from './User.entity';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('register')
  async register(@Body() user: User): Promise<User> {
    return this.userService.createUser(user);
  }

  @Get(':id')
  async getUserById(@Param('id') id: number): Promise<User> {
    return this.userService.findUserById(id);
  }
}
