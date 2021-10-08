import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PlacesController } from './places.controller';
import { PlacesRepository } from './places.repository';
import { PlacesService } from './places.service';

@Module({
  imports: [TypeOrmModule.forFeature([PlacesRepository])],
  controllers: [PlacesController],
  providers: [PlacesService],
})
export class PlacesModule {}
