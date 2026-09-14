import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type LearnerDocument = Learner & Document;

@Schema({ timestamps: true })
export class Learner {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  age: number;

  @Prop()
  email?: string;
}

export const LearnerSchme = SchemaFactory.createForClass(Learner);
