import { Categories } from '../../message/model/category.enum';
import { Channels } from '../../notification/model/channel-enum';

export interface User {
  id?: number;
  name: string;
  email: string;
  phoneNumber: string;
  subscribed: Array<Categories>;
  channels: Array<Channels>;
}
