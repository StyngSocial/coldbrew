import { Body, Controller, Post } from '@nestjs/common';
import { CreateUserDto, LoginUserDto } from '../../types/dto/user';
import { AuthService } from '../services/auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}
  @Post('register')
  async registerUser(@Body() user: CreateUserDto) {
    const newUser = await this.authService.registerUser(user);
    return newUser;
  }

  @Post('login')
  async login(@Body() login: LoginUserDto) {
    const user = await this.authService.login(login);
    return user;
  }
}
