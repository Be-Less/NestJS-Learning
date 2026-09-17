import { Module } from '@nestjs/common';
import { LibraryService } from './library.service';
import { LibraryController } from './library.controller';
import { Mongoose } from 'mongoose';
import { MongooseModule } from '@nestjs/mongoose';
import { Library, LibrarySchema } from './schemas/library.schema';
import { Book, BookSchema } from './schemas/book.schema';

@Module({
  providers: [LibraryService],
  controllers: [LibraryController],
  imports: [
    MongooseModule.forFeature([
      {
        name: Library.name,
        schema: LibrarySchema,
      },
      {
        name: Book.name,
        schema: BookSchema,
      },
    ]),
  ],
})
export class LibraryModule {}
