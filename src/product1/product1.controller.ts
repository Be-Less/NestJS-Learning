import { Controller, Get, Post } from '@nestjs/common';
import { Product1Service } from './product1.service';

@Controller('product1')
export class Product1Controller {
  constructor(private readonly product1Service: Product1Service) {}

  @Post()
  create() {
    return this.product1Service.createProduct1();
  }
  @Get()
  getAll() {
    return this.product1Service.getAllProducts();
  }
}
