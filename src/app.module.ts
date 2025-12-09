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
import { CustomerModule } from './customer/customer.module';
import { TableModule } from './table/table.module';
import { MenuItemsModule } from './menu-items/menu-items.module';
import { PasswordResetModule } from './password-reset/password-reset.module';
import { EmailModule } from './email/email.module';
import { EventEmitterModule } from '@nestjs/event-emitter';

@Module({
  imports: [ConfigModule.forRoot( { isGlobal: true}), EventEmitterModule.forRoot(), AuthModule, UsersModule, PrismaModule, CustomerModule, TableModule, MenuItemsModule, PasswordResetModule, EmailModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule  {}
