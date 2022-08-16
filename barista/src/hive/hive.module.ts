import { Module } from '@nestjs/common';
import { HiveService } from './services/hive.service';
import { HiveController } from './controllers/hive.controller';
import { HiveClientService } from './services/client.service';
import { SecretsModule } from 'src/secrets/secrets.module';
import { UserModule } from 'src/user/user.module';

@Module({
  imports: [SecretsModule, UserModule],
  controllers: [HiveController],
  providers: [HiveService, HiveClientService]
})
export class HiveModule {}
