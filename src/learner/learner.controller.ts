import { Body, Controller, Param, Post } from '@nestjs/common';
import { LearnerService } from './learner.service';
import { Learner } from './learner.schema';

@Controller('learner')
export class LearnerController {
  constructor(private readonly learnerService: LearnerService) {}

  @Post()
  async addLearner(@Body() data: Partial<Learner>) {
    return this.learnerService.createLearner(data);
  }
}
