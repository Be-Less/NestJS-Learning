import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductService } from './product/product.service';
import { ProductController } from './product/product.controller';
import { EmployeeModule } from './employee/employee.module';
import { CategoryController } from './category/category.controller';
import { CategoryService } from './category/category.service';
import { CategoryModule } from './category/category.module';
import { StudentModule } from './student/student.module';
import { CustomerModule } from './customer/customer.module';
import { MynameController } from './myname/myname.controller';
import { UserRolesController } from './user-roles/user-roles.controller';
import { ExceptionController } from './exception/exception.controller';
import { LoggerMiddleware } from './middleware/logger/logger.middleware';
import { DatabaseService } from './database/database.service';
import { DatabaseController } from './database/database.controller';
import { ConfigModule } from '@nestjs/config';
import { EnvService } from './env/env.service';
import { EnvController } from './env/env.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { LearnerModule } from './learner/learner.module';
import { UserModule } from './user/user.module';
import { EmployerModule } from './employer/employer.module';

import { Product1Module } from './product1/product1.module';
import { LibraryModule } from './library/library.module';



@Module({
  imports: [
    EmployeeModule,
    CategoryModule,
    StudentModule,
    CustomerModule,
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    MongooseModule.forRoot(process.env.MONGO_URI!),
    LearnerModule,
    UserModule,
    EmployerModule,
    Product1Module,
    LibraryModule,
  ],

  // PREFRERRED in PRODUCTION..
  //   MongooseModule.forRootAsync({
  //   imports: [ConfigModule],
  //   inject: [ConfigService],
  //   useFactory: (configService: ConfigService) => ({
  //     uri: configService.getOrThrow<string>('MONGO_URI'),
  //   }),
  // }),
  controllers: [
    AppController,
    ProductController,
    CategoryController,
    MynameController,
    UserRolesController,
    ExceptionController,
    DatabaseController,
    EnvController,
    
  ],
  providers: [
    AppService,
    ProductService,
    CategoryService,
    DatabaseService,
    EnvService,
    
  ],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('*');
  }
}
