import { Categories } from '../../notification/model/categories.enum';
import { Channels } from '../../notification/model/channels-enum';

export interface User {
  id?: number;
  name: string;
  email: string;
  phoneNumber: string;
  subscriptions: Array<Categories>;
  channels: Array<Channels>;
}
