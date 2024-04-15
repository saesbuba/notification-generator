import { NotifierConfiguration } from '../../../model/configuration.schema';
import { Notification } from '../../../model/schemas/notification.schema';

export interface Notifier {
  send(configuration: NotifierConfiguration): Promise<Notification>;
}
