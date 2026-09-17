import { Controller, Get, Post } from '@nestjs/common';
import { LibraryService } from './library.service';

@Controller('library')
export class LibraryController {
  constructor(private readonly libService: LibraryService) {}

  @Post()
  createLibrary() {
    return this.libService.createLib();
  }

  @Get()
  getLibraries() {
    return this.libService.getLibraries();
  }
}
