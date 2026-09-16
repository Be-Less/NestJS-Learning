import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { Tag, TagSchema } from './tag.schema';

@Schema()
export class Product1 extends Document {
  @Prop()
  title: string;

  @Prop({ type: [TagSchema], default: [] })
  tags: Tag[];
}

export const Product1Schema = SchemaFactory.createForClass(Product1);
