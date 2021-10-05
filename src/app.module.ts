import { Module } from '@nestjs/common';
import { PlacesModule } from './places/places.module';

//Decorator é sempre identificado com um sinal de @
//dependency injection.
@Module({
  imports: [PlacesModule],
})
export class AppModule {}
