import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Learner, LearnerSchme } from './learner.schema';

@Module({
    imports:[
        MongooseModule.forFeature([{ name: Learner.name, schema: LearnerSchme}])
    ]
})
export class LearnerModule {}
