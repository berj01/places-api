/* eslint-disable prettier/prettier */
import { IsEnum } from 'class-validator';
import { PlaceStatus } from '../place.model';

export class UpdatePlaceStatusDto {
  //Pipe Validator. Ele só permite valores que estejam dentro deste Enum
  @IsEnum(PlaceStatus)
  status: PlaceStatus;
}
