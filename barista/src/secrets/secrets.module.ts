import { Module } from '@nestjs/common';
import { SecretsService } from './services/secrets.service';
import { SecretsController } from './controllers/secrets.controller';

@Module({
  controllers: [SecretsController],
  providers: [SecretsService],
  exports: [SecretsService]
})
export class SecretsModule {}
