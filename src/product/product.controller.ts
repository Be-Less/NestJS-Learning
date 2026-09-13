import { Controller, Get, Param } from '@nestjs/common';
import { ProductService } from './product.service';

@Controller('product')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Get()
  getProducts() {
    return this.productService.getAllproducts();
  }
  @Get(':id')
  getProductsById(@Param('id') id: string) {
    return this.productService.getProductById(Number(id));
  }
}
