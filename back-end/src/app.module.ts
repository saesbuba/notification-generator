import { Module } from '@nestjs/common';
import { MessageModule } from './modules/message/message.module';

@Module({
  imports: [MessageModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
