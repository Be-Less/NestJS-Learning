import { Module } from '@nestjs/common';
import { Product1Controller } from './product1.controller';
import { Product1Service } from './product1.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Product1, Product1Schema } from './schemas/product.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Product1.name,
        schema: Product1Schema,
      },
    ]),
  ],
  controllers: [Product1Controller],
  providers: [Product1Service],
})
export class Product1Module {}
