import { Injectable } from '@nestjs/common';
import { User } from './model/user.schema';
import { Categories } from '../notification/model/categories.enum';
import { Channels } from '../notification/model/channels-enum';

@Injectable()
export class UserService {
  private readonly users: Array<User> = [
    {
      id: 1,
      name: 'Yovonnda',
      email: 'ybiaggiotti0@marketwatch.com',
      phoneNumber: '+33 959 788 8232',
      subscriptions: [Categories.sports, Categories.finance],
      channels: [Channels.sms, Channels.push],
    },
    {
      id: 2,
      name: 'Kristos',
      email: 'kbasnett1@springer.com',
      phoneNumber: '+86 825 528 7537',
      subscriptions: [Categories.sports, Categories.finance, Categories.movies],
      channels: [Channels.email, Channels.push],
    },
    {
      id: 3,
      name: 'Maiga',
      email: 'mbracegirdle2@howstuffworks.com',
      phoneNumber: '+86 918 265 3596',
      subscriptions: [Categories.sports],
      channels: [Channels.sms, Channels.email],
    },
    {
      id: 4,
      name: 'Patrizio',
      email: 'pgrellis3@walmart.com',
      phoneNumber: '+62 431 897 8163',
      subscriptions: [Categories.movies],
      channels: [Channels.push],
    },
    {
      id: 5,
      name: 'Malia',
      email: 'msyme4@altervista.org',
      phoneNumber: '+62 640 433 7110',
      subscriptions: [Categories.finance],
      channels: [Channels.sms, Channels.push],
    },
    {
      id: 6,
      name: 'Rosita',
      email: 'rposselow5@cbc.ca',
      phoneNumber: '+52 459 389 5647',
      subscriptions: [Categories.sports],
      channels: [Channels.email],
    },
    {
      id: 7,
      name: 'Vivienne',
      email: 'vmanthorpe6@google.ca',
      phoneNumber: '+86 120 743 2998',
      subscriptions: [Categories.movies, Categories.sports],
      channels: [Channels.sms],
    },
  ];

  async findAllBySubscriptionCategory(subscriptionCategory: Categories) {
    return this.users.filter((user) =>
      user.subscriptions.includes(Categories[subscriptionCategory]),
    );
  }
}
