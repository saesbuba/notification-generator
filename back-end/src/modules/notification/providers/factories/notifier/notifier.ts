import { NotifierConfiguration } from '../../../model/configuration-schema';

export interface Notifier {
  send(configuration: NotifierConfiguration): void;
}
