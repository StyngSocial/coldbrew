import { Controller } from '@nestjs/common';
import { HiveService } from './hive.service';

@Controller('hive')
export class HiveController {
  constructor(private readonly hiveService: HiveService) {}
}
