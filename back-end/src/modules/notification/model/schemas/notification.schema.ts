import { Categories } from '../categories.enum';
import { Channels } from '../channels-enum';

export interface UserNotification {
  id?: number;
  name: string;
  email: string;
  phoneNumber: string;
  subscriptions?: Array<Categories>;
  channels?: Array<Channels>;
}

export interface Notification {
  subscriber: UserNotification;
  typeOfMessage: Categories;
  typeOfNotification: Channels;
  successfulDelivery: boolean;
  thirdPartyResponse: string;
  details?: any;
  deliveryMessage?: string;
  creationDate: string | Date;
  creationTime: string | Date;
}
