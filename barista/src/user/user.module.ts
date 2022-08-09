import { Module } from '@nestjs/common';
import { UserController } from './controllers/user.controller';
import { UserService } from './services/user.service';
import { MongooseModule } from '@nestjs/mongoose';
import { User } from './schemas/User';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://coldbrew:coldbrew@barista.bbhri.mongodb.net/barista?retryWrites=true&w=majority',
    ),
    MongooseModule.forFeature([{ name: 'User', schema: User }]),
  ],
  controllers: [UserController],
  providers: [UserService],
})
export class MongoModule {}
