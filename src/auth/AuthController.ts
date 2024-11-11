import { Controller, Get, Post, Req, Res, UseGuards } from '@nestjs/common';
import { AuthService } from './AuthService';
import { LocalGuard } from './guards/LocalGuard';
import { Request, Response } from 'express';
import { JwtAuthGuard } from './guards/JwtGuard';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('login')
  @UseGuards(LocalGuard)
  login(@Req() req: Request, @Res() res: Response) {
    return res.json(req.user);
  }

  @Post('register')
  async register(@Req() req: Request, @Res() res: Response) {
    const user = await this.authService.register(req.body);
    return res.json(user);
  }

  @Get('status')
  @UseGuards(JwtAuthGuard)
  status(@Req() req: Request) {
    console.log('Inside AuthController status method');
    console.log(req.user);
    return req.user;
  }
}
