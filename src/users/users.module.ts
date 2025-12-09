import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UserRegisteredListener } from './users.registered.listener';
import { EmailModule } from 'src/email/email.module';

@Module({
  imports:[EmailModule],
  providers: [UsersService, UserRegisteredListener],
  exports: [UsersService],
})
export class UsersModule {}
