import { Injectable } from '@nestjs/common';
import { UserService } from '../../user/services/user.service';
import { CreateUserDto } from '../../shared/dto/user';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(private readonly userService: UserService) {}

  async hashPassword(password: string) {
    return await bcrypt.hash(password, 12);
  }

  async registerUser(user: CreateUserDto) {
    console.log(user);
    const registeredUser = await this.userService.getUserByEmail(user.email);

    console.log(registeredUser);
    if (registeredUser) {
      throw new Error('User already exists.');
    }
    const hashedPassword = await this.hashPassword(user.password);
    const newUser = await this.userService.createUser({
      username: user.username,
      email: user.email,
      password: hashedPassword,
    });
    return newUser;
  }
}
