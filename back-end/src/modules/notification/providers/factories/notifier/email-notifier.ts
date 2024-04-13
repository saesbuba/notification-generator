import { Injectable } from '@nestjs/common';
import { Notifier } from './notifier';
import { NotifierConfiguration } from '../../../model/configuration-schema';
import { LogService } from 'src/modules/log/log.service';

@Injectable()
export class EmailNotifier implements Notifier {
  constructor(private logService: LogService) {}

  async send(configuration: NotifierConfiguration) {
    const { name, email } = configuration.subscriber;

    //external API call simulation
    await new Promise((resolve) => {
      setTimeout(() => {
        resolve(
          `The notification was received by the external API successfully`,
        );
      }, 3000);
    }).catch((error) =>
      console.log(
        'There was an error requesting services from the external API',
      ),
    );

    this.logService.create();
    return `The notification was successfully sent to ${name} to the ${email} email address`;
  }
}
