import { Body, Controller, Post } from "@nestjs/common";
import { UserService } from "../services/user.service";

@Controller("user")
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post("new")
  async createUser(@Body("user") user: string, @Body("email") email: string, @Body("hashedPassword") hashedPassword: string) {
    const newUser = await this.userService.createUser(user, email, hashedPassword)
    return newUser
  }

}