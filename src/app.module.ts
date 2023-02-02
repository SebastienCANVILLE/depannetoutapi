import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { ServicesModule } from './services/services.module';
import { ReservationsModule } from './reservations/reservations.module';
import { AuthModule } from './auth/auth.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { DataSource } from 'typeorm';

@Module({
  imports: [UsersModule, ServicesModule, ReservationsModule, AuthModule,
    ConfigModule.forRoot(), 
    TypeOrmModule.forRoot({  
      type: "postgres",
      host: process.env.DB_HOST,
      port: 5432,
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      entities: [],
      synchronize: false,
      logging: false
    }),],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {constructor(private dataSource: DataSource) {}}
