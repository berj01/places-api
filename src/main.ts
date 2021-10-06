import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

//asynchronous waiting
async function bootstrap() {
  //Usando o pattern Factory para criar o módulo raiz.
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());
  await app.listen(3000);
}

//a função bootstrap, significa ponto de início. É o começo da nossa aplicação
bootstrap();
