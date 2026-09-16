import { Module } from '@nestjs/common';
import { EmployerService } from './employer.service';
import { EmployerController } from './employer.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Employer, EmployerSchema } from './schemas/employer.schema';
import { Profile, ProfileSchema } from './schemas/profile.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Employer.name,
        schema: EmployerSchema,
      },
      { name: Profile.name, schema: ProfileSchema },
    ]),
  ],
  providers: [EmployerService],
  controllers: [EmployerController],
})
export class EmployerModule {}
