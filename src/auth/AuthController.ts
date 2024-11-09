import { Controller, Get, Post, Req, UseGuards } from '@nestjs/common';
import { AuthService } from './AuthService';
import { LocalGuard } from './guards/LocalGuard';
import { Request } from 'express';
import { JwtAuthGuard } from './guards/JwtGuard';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('login')
  @UseGuards(LocalGuard)
  login(@Req() req: Request) {
    return req.user;
  }

  @Get('status')
  @UseGuards(JwtAuthGuard)
  status(@Req() req: Request) {
    console.log('Inside AuthController status method');
    console.log(req.user);
    return req.user;
  }
}
