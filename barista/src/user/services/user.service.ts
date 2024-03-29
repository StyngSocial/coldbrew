import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateUserDto } from '../../types/dto/user';
import { User } from '../../types/models/User';

@Injectable()
export class UserService {
  constructor(@InjectModel('User') private readonly user: Model<User>) {}

  async createUser(user: CreateUserDto) {
    const newUser = new this.user({
      username: user.username,
      email: user.email,
      hashedPassword: user.password,
    });
    const result = await newUser.save();
    return result;
  }

  async getUserByEmail(email: string): Promise<User> {
    const user = await this.user.findOne({ email: email });
    return user;
  }

  async updateUser(userId: string, query: Partial<User>) {
    const user = await this.user.findOneAndUpdate({userId: userId}, query)
    return user
  }
}
