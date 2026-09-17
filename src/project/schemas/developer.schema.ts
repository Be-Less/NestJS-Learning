import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { type } from 'os';
import { ref } from 'process';

@Schema({ timestamps: true })
export class Dev extends Document {
  @Prop({ required: true })
  name: string;
  @Prop({ type: [{ type: Types.ObjectId, ref: 'Project' }] })
  projects: Types.ObjectId[];
}
export const DevSchema = SchemaFactory.createForClass(Dev);
