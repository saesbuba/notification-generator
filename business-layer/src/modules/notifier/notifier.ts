import { NotifierConfiguration } from '../notification/model/schemas/configuration.schema';
import { Notification } from '../notification/model/schemas/notification.schema';

export interface Notifier {
  send(configuration: NotifierConfiguration): Promise<Notification>;
}
