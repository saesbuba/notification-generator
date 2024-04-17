import { Test, TestingModule } from '@nestjs/testing';
import { LogService } from './log.service';

describe('LogService', () => {
  let logService: LogService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LogService],
    }).compile();

    logService = module.get<LogService>(LogService);
  });

  it('should be defined', () => {
    expect(logService).toBeDefined();
  });
});
