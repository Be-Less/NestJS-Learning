import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Put,
} from '@nestjs/common';
import { LearnerService } from './learner.service';
import { Learner } from './learner.schema';

@Controller('learner')
export class LearnerController {
  constructor(private readonly learnerService: LearnerService) {}

  @Post()
  async addLearner(@Body() data: Partial<Learner>) {
    return this.learnerService.createLearner(data);
  }

  @Get()
  async getLearners() {
    return this.learnerService.getAllLearners();
  }

  @Get(':id')
  async getLearnerById(@Param('id') id: string) {
    return this.learnerService.getLearnerById(id);
  }

  @Put(':id')
  async updateLearner(@Param('id') id: string, @Body() data: Partial<Learner>) {
    return this.learnerService.updateLearner(id, data);
  }
  @Patch(':id')
  async patchLearner(@Param('id') id: string, @Body() data: Partial<Learner>) {
    return this.learnerService.patchLearner(id, data);
  }
  @Delete(':id')
  async deleteLearner(@Param('id') id: string) {
    return this.learnerService.deleteLearner(id);
  }
}
