import { Test, TestingModule } from '@nestjs/testing';
import { HiveController } from './hive.controller';
import { HiveService } from '../services/hive.service';

describe('HiveController', () => {
  let controller: HiveController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [HiveController],
      providers: [HiveService],
    }).compile();

    controller = module.get<HiveController>(HiveController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
