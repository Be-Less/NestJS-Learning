import { Body, Controller, Get, Post, Put } from '@nestjs/common';
import { CustomerService } from './customer.service';
import { CreateCustomerDTO } from './dto/create-customer.dto';

@Controller('customer')
export class CustomerController {
  constructor(private readonly customerService: CustomerService) {}

  @Get()
  getAllCustomer() {
    return this.customerService.getAllCustomers();
  }

  @Post()
  addNewCustomer(@Body() createCustomerDTO: CreateCustomerDTO) {
    return this.customerService.addCustomer(createCustomerDTO);
  }
}
