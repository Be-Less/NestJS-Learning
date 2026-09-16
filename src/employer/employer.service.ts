import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Employer } from './schemas/employer.schema';
import { Model } from 'mongoose';
import { Profile } from './schemas/profile.schema';

@Injectable()
export class EmployerService {
  constructor(
    @InjectModel(Employer.name) private employerModel: Model<Employer>,
    @InjectModel(Profile.name) private profileModel: Model<Employer>,
  ) {}

  async createEmployer(): Promise<Employer> {
    const profile = await new this.profileModel({
      age: 21,
      qualification: 'Masters',
    }).save();
    const employer = new this.employerModel({
      name: 'Bilesh',
      profile: profile._id,
    });

    return employer.save();
  }

  async findAll(): Promise<Employer[]> {
    return this.employerModel.find().populate('profile').exec();
  }
}
