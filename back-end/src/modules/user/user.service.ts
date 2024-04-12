import { Injectable } from '@nestjs/common';

type categories = 'finance' | 'sports' | 'movies';

@Injectable()
export class UserService {
  #users = [{}];
  async findAllBySubscriptionCategory(subscriptionCategory: categories) {
    this.#users.filter((user) =>
      user.categories.contains(subscriptionCategory),
    );
  }
}
