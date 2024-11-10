import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { AuthPayloadDto } from './dto/AuthDto';
import { User } from '../user/User.entity';
import { UserService } from '../user/UserService';
import * as bcrypt from 'bcrypt';
import { InjectPinoLogger, PinoLogger } from 'nestjs-pino';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
    private jwtService: JwtService,
    private userService: UserService,
    @InjectPinoLogger(AuthService.name)
    private readonly logger: PinoLogger,
  ) {}

  async validateUser({ username, password }: AuthPayloadDto) {
    const user = await this.userService.findUserByUsername(username);
    if (user && (await bcrypt.compare(password, user.password))) {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { password, ...result } = user;
      return this.jwtService.sign(result);
    }
    return null;
  }

  async register(authPayloadDto: AuthPayloadDto) {
    const { username, password } = authPayloadDto;
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = this.userRepository.create({
      username,
      password: hashedPassword,
    });
    try {
      await this.userRepository.save(newUser);
    } catch (error) {
      this.logger.error('Registration failed', error);
      throw new Error('Registration failed');
    }
    return this.jwtService.sign({ username });
  }
}
