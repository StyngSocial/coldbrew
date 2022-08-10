import { Body, Controller, Post } from '@nestjs/common';
import { CreateUserDto } from '../../shared/dto/user';
import { AuthService } from '../services/auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}
  @Post('register')
  async registerUser(@Body() user: CreateUserDto) {
    const newUser = await this.authService.registerUser(user);
    return newUser;
  }
}
