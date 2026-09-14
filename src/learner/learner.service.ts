import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Learner, LearnerDocument } from './learner.schema';
import { Model } from 'mongoose';

@Injectable()
export class LearnerService {
  constructor(
    @InjectModel(Learner.name) private learnerModel: Model<LearnerDocument>,
  ) {}

  async createLearner(data: Partial<Learner>): Promise<Learner> {
    const newLearner = new this.learnerModel(data);
    return newLearner.save();
  }
}
