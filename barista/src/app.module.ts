import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config';
import { SecretsModule } from './secrets/secrets.module';
import { HiveModule } from './hive/hive.module';

@Module({ imports: [ConfigModule.forRoot(), UserModule, AuthModule, SecretsModule, HiveModule] })
export class AppModule {}
