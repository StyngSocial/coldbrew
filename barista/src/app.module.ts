import { Module } from '@nestjs/common';
import { MongoModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';

@Module({imports: [MongoModule, AuthModule]})
export class AppModule {}
