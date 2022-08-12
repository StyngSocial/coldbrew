import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { UserService } from '../../user/services/user.service';
import { CreateUserDto, LoginUserDto } from '../../types/dto/user';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { User } from 'src/types/models/User';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private readonly jwtService: JwtService,
  ) {}

  async hashPassword(password: string) {
    return await bcrypt.hash(password, 12);
  }

  async registerUser(user: CreateUserDto): Promise<User> {
    const registeredUser = await this.userService.getUserByEmail(user.email);

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

  async doesPasswordMatch(
    password: string,
    hashedPassword: string,
  ): Promise<boolean> {
    return await bcrypt.compare(password, hashedPassword);
  }

  async validateUser(email: string, password: string): Promise<User | null> {
    const user: User = await this.userService.getUserByEmail(email);

    const doesUserExist = !!user;

    if (!doesUserExist) return null;

    const doesPasswordMatch = await this.doesPasswordMatch(
      password,
      user.hashedPassword,
    );

    if (!doesPasswordMatch) return null;

    return user;
  }

  async login(existingUser: LoginUserDto) {
    const { email, password } = existingUser;

    const user = await this.validateUser(email, password);

    if (!user)
      throw new HttpException('Credentials invalid!', HttpStatus.UNAUTHORIZED);

    const jwt = await this.jwtService.signAsync({ user });
    return { token: jwt };
  }
}
