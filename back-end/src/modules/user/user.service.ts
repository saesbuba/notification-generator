import { Injectable } from '@nestjs/common';


@Injectable()
export class UserService {
  private readonly users = [
    {
      id: 73838,
      name: 'Rapahael',
      email: '',
      phoneNumber: '',
      suscribed: ['sports', 'finance'],
      channels: ['sms', 'e-mail', 'movies'],
    },
    {
      id: 73838,
      name: 'Rapahael',
      email: '',
      phoneNumber: '',
      suscribed: ['sports', 'finance',"movies"],
      channels: ['sms', 'e-mail', 'movies'],
    },
    {
      id: 73838,
      name: 'Rapahael',
      email: '',
      phoneNumber: '',
      suscribed: ['sports',],
      channels: ['sms', 'e-mail', 'movies'],
    },
    {
      id: 73838,
      name: 'Rapahael',
      email: '',
      phoneNumber: '',
      suscribed: ['movies'],
      channels: ['sms', 'e-mail', 'movies'],
    },
  ];

  async findAllBySubscriptionCategory(subscriptionCategory) {
    return this.users.filter((user) =>
      user.suscribed.includes(subscriptionCategory),
    );
  }
}
