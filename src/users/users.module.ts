import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UserRegisteredListener } from './users.registered.listener';
import { EmailModule } from 'src/email/email.module';
import { UsersController } from './users.controller';

@Module({
  imports:[EmailModule],
  providers: [UsersService, UserRegisteredListener],
  exports: [UsersService],
  controllers: [UsersController],
})
export class UsersModule {}
