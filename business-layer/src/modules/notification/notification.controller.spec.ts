import { Test, TestingModule } from '@nestjs/testing';
import { NotifierModule } from '../notifier/notifier.module';
import { UserModule } from '../user/user.module';
import { LogModule } from '../log/log.module';
import { UtilsModule } from '../utils/utils.module';
import { NotificationController } from './notification.controller';
import { NotificationService } from './notification.service';

describe('NotificationController', () => {
  let notificationController: NotificationController;

  beforeEach(async () => {
    const moduleRef: TestingModule = await Test.createTestingModule({
      imports: [NotifierModule, UserModule, LogModule, UtilsModule],
      controllers: [NotificationController],
      providers: [NotificationService],
    }).compile();

    notificationController = moduleRef.get<NotificationController>(
      NotificationController,
    );
  });

  it('should be defined', () => {
    expect(notificationController).toBeDefined();
  });
});
