/* eslint-disable prettier/prettier */
import { IsFQDN, IsNotEmpty } from 'class-validator';

export class CreatePlaceDto {
  @IsNotEmpty({ message: 'O campo nome é obrigatório' })
  name: string;

  @IsNotEmpty({ message: 'O campo site é obrigatório' })
  @IsFQDN()
  site: string;

  @IsNotEmpty({ message: 'O campo endereço é obrigatório' })
  address: string;

  image: string;
  ticket: string;

  @IsNotEmpty({ message: 'O campo descrição é obrigatório' })
  description: string;
}
