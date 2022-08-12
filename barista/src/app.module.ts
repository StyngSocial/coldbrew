import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config';
import { SecretsModule } from './secrets/secrets.module';

@Module({ imports: [ConfigModule.forRoot(), UserModule, AuthModule, SecretsModule] })
export class AppModule {}
