import { Test, TestingModule } from '@nestjs/testing';
import { NotifierModule } from '../notifier/notifier.module';
import { UserModule } from '../user/user.module';
import { LogModule } from '../log/log.module';
import { UtilsModule } from '../utils/utils.module';
import { NotificationController } from './notification.controller';
import { NotificationService } from './notification.service';

describe('NotificationService', () => {
  let notificationService: NotificationService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [NotifierModule, UserModule, LogModule, UtilsModule],
      controllers: [NotificationController],
      providers: [NotificationService],
    }).compile();

    notificationService = module.get<NotificationService>(NotificationService);
    console.log(await notificationService.getNotifications());
  });

  it('should be defined', async () => {
    expect(notificationService).toBeDefined();
  });
});
