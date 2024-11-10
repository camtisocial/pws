import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { UserService } from 'src/user/UserService';
import { JwtPayload } from '../JwtAuthInterface';
import { UnauthorizedException } from '@nestjs/common';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private userService: UserService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: 'abc123',
    });
  }

  async validate(payload: JwtPayload) {
    console.log('Inside JWT Strategy Validate');
    console.log(payload);

    const user = await this.userService.findUserById(payload.sub);
    if (!user) {
      throw new UnauthorizedException();
    }
    return payload;
  }
}