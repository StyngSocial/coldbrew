import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { User } from "../../../../shared/models/User";

@Injectable()
export class UserService {
  constructor(@InjectModel('User') private readonly user: Model<User>) {}

  async createUser(username: string, email: string, hashedPassword: string) {
    const user = new this.user({username: username, email: email, hashedPassword: hashedPassword})
    const result = await user.save()
    return result
  }
}