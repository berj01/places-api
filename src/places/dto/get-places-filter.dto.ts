/* eslint-disable prettier/prettier*/
import { IsEnum, IsOptional, IsString } from 'class-validator';
import { PlaceStatus } from '../place-status.enum';

export class GetPlacesFilterDto {
  @IsOptional()
  @IsEnum(PlaceStatus)
  status?: PlaceStatus;

  @IsOptional()
  @IsString()
  search?: string;
}
