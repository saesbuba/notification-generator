import { Test, TestingModule } from '@nestjs/testing';
import { DateTimeUtils } from './date-time';

describe('DateTimeUtilsProvider', () => {
  let provider: DateTimeUtils;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DateTimeUtils],
      exports: [DateTimeUtils],
    }).compile();

    provider = await module.resolve<DateTimeUtils>(DateTimeUtils);
  });

  it('should be defined', () => {
    expect(provider).toBeDefined();
  });
});
