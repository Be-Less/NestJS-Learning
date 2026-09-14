import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Learner, LearnerSchme } from './learner.schema';
import { LearnerService } from './learner.service';
import { LearnerController } from './learner.controller';

@Module({
    imports:[
        MongooseModule.forFeature([{ name: Learner.name, schema: LearnerSchme}])
    ],
    providers: [LearnerService],
    controllers: [LearnerController]
})
export class LearnerModule {}
