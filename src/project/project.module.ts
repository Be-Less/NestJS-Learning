import { Module } from '@nestjs/common';
import { ProjectController } from './project.controller';
import { ProjectService } from './project.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Dev, DevSchema } from './schemas/developer.schema';
import { Project, ProjectSchema } from './schemas/project.schema';

@Module({
  controllers: [ProjectController],
  providers: [ProjectService],
  imports: [
    MongooseModule.forFeature([
      {
        name: Dev.name,
        schema: DevSchema,
      },
      {
        name: Project.name,
        schema: ProjectSchema,
      },
    ]),
  ],
})
export class ProjectModule {}
