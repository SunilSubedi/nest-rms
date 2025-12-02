import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { AuthGuard } from './auth.guard';
import { UsersModule } from 'src/users/users.module';
import { JwtModule } from '@nestjs/jwt';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { RoleGuard } from './gaurd/role.guard';
import { PasswordResetModule } from 'src/password-reset/password-reset.module';
import { EmailModule } from 'src/email/email.module';

@Module({
  imports:[
    UsersModule,
    ConfigModule,
    JwtModule.registerAsync({
      global: true,
      imports: [ConfigModule],
      useFactory: (config: ConfigService) => {
        const jwtSecret = config.get<string>('JWT_SECRET');
        console.log('JWT_SECRET from ConfigService:', jwtSecret);
        return {
          secret: jwtSecret,
          signOptions: { expiresIn: '1hr' },
        };
      },
      inject: [ConfigService],
    }),
    PasswordResetModule,
    EmailModule
  ],
  controllers: [AuthController],
  providers: [AuthService, AuthGuard, RoleGuard],
  exports: [AuthService, AuthGuard, RoleGuard],
})
export class AuthModule {}
