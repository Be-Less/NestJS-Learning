import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Learner, LearnerDocument } from './learner.schema';
import { Model, Types } from 'mongoose';

@Injectable()
export class LearnerService {
  constructor(
    @InjectModel(Learner.name) private learnerModel: Model<LearnerDocument>,
  ) {}

  async createLearner(data: Partial<Learner>): Promise<Learner> {
    const newLearner = new this.learnerModel(data);
    return newLearner.save();
  }

  async getAllLearners(): Promise<Learner[]> {
    return this.learnerModel.find().exec();
  }

  async getLearnerById(id: string): Promise<Learner | null> {
    return this.learnerModel.findById(id).exec();
  }

  async updateLearner(
    id: string,
    data: Partial<Learner>,
  ): Promise<Learner | null> {
    // return this.learnerModel.findByIdAndUpdate(id, data, { new: true }).exec();

    const updated = await this.learnerModel.findByIdAndUpdate(
      id,
      {
        name: data.name ?? null,
        age: data.age ?? null,
        email: data.email ?? null,
      },
      { overwrite: true, new: true },
    );
    return updated;
  }

  async patchLearner(
    id: string,
    data: Partial<Learner>,
  ): Promise<Learner | null> {
    return this.learnerModel.findByIdAndUpdate(id, data, { new: true }).exec();
  }

  async deleteLearner(id: string): Promise<Learner> {
  if (!id) {
    throw new BadRequestException('Learner ID is required');
  }

  if (!Types.ObjectId.isValid(id)) {
    throw new BadRequestException('Invalid learner ID');
  }

  const deletedLearner = await this.learnerModel
    .findByIdAndDelete(id)
    .exec();

  if (!deletedLearner) {
    throw new NotFoundException('Learner not found');
  }

  return deletedLearner;
}
}
