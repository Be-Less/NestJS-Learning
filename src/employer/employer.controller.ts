import { Controller, Get, Post } from '@nestjs/common';
import { EmployerService } from './employer.service';

@Controller('employer')
export class EmployerController {
  constructor(private readonly employerService: EmployerService) {}

  @Post()
  create() {
    return this.employerService.createEmployer();
  }

  @Get()
  getAll() {
    return this.employerService.findAll();
  }
}
