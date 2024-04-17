import { UserNotification } from './notification.schema';
import { Categories } from '../categories.enum';

export interface NotifierConfiguration {
  subscriber: UserNotification;
  category: Categories;
}
