import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Dev } from './schemas/developer.schema';
import { Model } from 'mongoose';
import { Project } from './schemas/project.schema';

@Injectable()
export class ProjectService {
  constructor(
    @InjectModel(Dev.name) private devModel: Model<Dev>,
    @InjectModel(Project.name) private projectModel: Model<Project>,
  ) {}

  async seed(): Promise<{ dev1: Dev; dev2: Dev }> {
    const [projectA, projectB] = await Promise.all([
      this.projectModel.create({
        title: 'NestJS',
      }),
      this.projectModel.create({
        title: 'MongoDB',
      }),
    ]);

    const [dev1, dev2] = await Promise.all([
      this.devModel.create({
        name: 'Bilesh',
        projects: [projectA._id, projectB._id],
      }),
      this.devModel.create({
        name: 'Beless',
        projects: [projectA._id],
      }),
    ]);

    await Promise.all([
      this.projectModel.findByIdAndUpdate(projectA._id, {
        $set: { developers: [dev1._id] },
      }),
    ]);
    return { dev1, dev2 };
  }

  async getDev(): Promise<Dev[]>{
    return this.devModel.find().populate('projects').lean();
  }
  async getProjects(): Promise<Project[]>{
    return this.projectModel.find().populate('developers').lean();
  }
}
