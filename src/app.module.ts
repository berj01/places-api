import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PlacesModule } from './places/places.module';

//Decorator é sempre identificado com um sinal de @
//dependency injection.
@Module({
  imports: [
    PlacesModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'user_berj01',
      password: 'user_berj01',
      autoLoadEntities: true,
      synchronize: true,
    }),
  ],
})
export class AppModule {}
