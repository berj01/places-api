/* eslint-disable prettier/prettier*/
import { IsEnum, IsOptional, IsString } from 'class-validator';
import { PlaceStatus } from '../place.model';

export class GetPlacesFilterDto {
  @IsOptional()
  @IsEnum(PlaceStatus)
  status?: PlaceStatus;

  @IsOptional()
  @IsString()
  search?: string;
}
