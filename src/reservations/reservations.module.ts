import { Module } from '@nestjs/common';
import { ReservationService } from './reservations.service';
import { ReservationsController } from './reservations.controller';

@Module({
  controllers: [ReservationsController],
  providers: [ReservationService]
})
export class ReservationsModule {}
