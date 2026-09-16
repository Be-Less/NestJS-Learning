import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './schemas/user.shema';
import { Model } from 'mongoose';

@Injectable()
export class UserService {
  constructor(@InjectModel(User.name) private userModel: Model<User>) {}

  async createUser(): Promise<User> {
    const user = new this.userModel({
      name: 'Bilesh Bhasinka',
      address: {
        street: 'Gaurighat',
        city: 'Kathmandu',
      },
    });
    return user.save();
  }

  async findAll(): Promise<User[]> {
    return this.userModel.find();
  }
}
