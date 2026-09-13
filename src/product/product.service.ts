import { Injectable } from '@nestjs/common';

@Injectable()
export class ProductService {
  private product = [
    {
      id: 1,
      name: 'Mobile',
      price: 20000,
    },
    {
      id: 2,
      name: 'Laptop',
      price: 204000,
    },
    {
      id: 3,
      name: 'Gold',
      price: 2000000,
    },
  ];

  getAllproducts() {
    return this.product;
  }

  getProductById(id: number) {
    return this.product.find((product) => product.id === id);
  }
}
