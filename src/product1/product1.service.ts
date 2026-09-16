import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Product1 } from './schemas/product.schema';

@Injectable()
export class Product1Service {
  constructor(
    @InjectModel(Product1.name) private product1Model: Model<Product1>,
  ) {}

  async createProduct1(): Promise<Product1> {
    const product1 = new this.product1Model({
      title: 'Gaming Laptop',
      tags: [
        { name: 'Electronics' },
        { name: 'Gaming' },
        { name: 'Laptop' },
      ],
    });

    return product1.save();
  }

  async getAllProducts(): Promise<Product1[]> {
    return this.product1Model.find().exec();
  }
}
