import {  MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
//import { CatsModule } from './cats/cats.module';
//import {  LoggerMiddleware } from './cats/middleware/logger.middleware';
import { ConfigModule } from '@nestjs/config';
//import { RateLimitMiddleware } from './cats/middleware/rate.limit.middleware';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [ConfigModule.forRoot( { isGlobal: true}), AuthModule, UsersModule, PrismaModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule  {}
