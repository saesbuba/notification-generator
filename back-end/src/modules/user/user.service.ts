import { Injectable } from '@nestjs/common';
import { User } from './model/user.schema';
import { Categories } from '../message/model/category.enum';
import { Channels } from '../notification/model/channel-enum';

@Injectable()
export class UserService {
  private readonly users: Array<User> = [
    {
      id: 1,
      name: 'Yovonnda',
      email: 'ybiaggiotti0@marketwatch.com',
      phoneNumber: '+33 959 788 8232',
      subscribed: [Categories.SPORTS, Categories.FINANCE],
      channels: [Channels.sms, Channels.push],
    },
    {
      id: 2,
      name: 'Kristos',
      email: 'kbasnett1@springer.com',
      phoneNumber: '+86 825 528 7537',
      subscribed: [Categories.SPORTS, Categories.FINANCE, Categories.MOVIES],
      channels: [Channels.email, Channels.push],
    },
    {
      id: 3,
      name: 'Maiga',
      email: 'mbracegirdle2@howstuffworks.com',
      phoneNumber: '+86 918 265 3596',
      subscribed: [Categories.SPORTS],
      channels: [Channels.sms, Channels.email],
    },
    {
      id: 4,
      name: 'Patrizio',
      email: 'pgrellis3@walmart.com',
      phoneNumber: '+62 431 897 8163',
      subscribed: [Categories.MOVIES],
      channels: [Channels.push],
    },
    {
      id: 5,
      name: 'Malia',
      email: 'msyme4@altervista.org',
      phoneNumber: '+62 640 433 7110',
      subscribed: [Categories.FINANCE],
      channels: [Channels.sms, Channels.push],
    },
    {
      id: 6,
      name: 'Rosita',
      email: 'rposselow5@cbc.ca',
      phoneNumber: '+52 459 389 5647',
      subscribed: [Categories.SPORTS],
      channels: [Channels.email],
    },
    {
      id: 7,
      name: 'Vivienne',
      email: 'vmanthorpe6@google.ca',
      phoneNumber: '+86 120 743 2998',
      subscribed: [Categories.MOVIES, Categories.SPORTS],
      channels: [Channels.sms],
    },
  ];

  async findAllBySubscriptionCategory(subscriptionCategory) {
    return this.users.filter((user) =>
      user.subscribed.includes(subscriptionCategory),
    );
  }
}
