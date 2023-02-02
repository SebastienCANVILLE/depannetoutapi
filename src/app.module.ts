import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { ServicesModule } from './services/services.module';
import { ReservationsModule } from './reservations/reservations.module';
import { AuthModule } from './auth/auth.module';

@Module({
  
  imports: [UsersModule, ServicesModule, ReservationsModule, AuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
