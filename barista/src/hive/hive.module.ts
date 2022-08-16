import { Module } from '@nestjs/common';
import { HiveService } from './hive.service';
import { HiveController } from './hive.controller';

@Module({
  controllers: [HiveController],
  providers: [HiveService]
})
export class HiveModule {}
