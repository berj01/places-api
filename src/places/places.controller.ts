import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { CreatePlaceDto } from './dto/create-place.dto';
import { GetPlacesFilterDto } from './dto/get-places-filter.dto';
import { UpdatePlaceProfileDto } from './dto/update-place-profile.dto';
import { UpdatePlaceStatusDto } from './dto/update-place-status.dto';
import { PlaceStatus } from './place-status.enum';
import { Place } from './place.entity';
import { PlacesService } from './places.service';

// http://localhost:3000/places
@Controller('places')
export class PlacesController {
  constructor(private placesServices: PlacesService) {}
  //QueryString
  // http://localhost:3000/places/fweiuhfewbib23423ffsd?search=chocolate&status=Funcionando
  @Get()
  getPlaces(@Query() filterDto: GetPlacesFilterDto): Promise<Place[]> {
    return this.placesServices.getPlaces(filterDto);
  }
  // // http://localhost:3000/places/fweiuhfewbib23423ffsd
  @Get('/:id')
  getPlaceById(@Param('id') id: string): Promise<Place> {
    return this.placesServices.getPlaceById(id);
  }

  @Post()
  createPlace(@Body() createPlaceDto: CreatePlaceDto): Promise<Place> {
    return this.placesServices.createPlace(createPlaceDto);
  }

  @Patch('/:id/status')
  updatePlaceStatus(
    @Param('id') id: string,
    @Body() updatePlaceStatusDto: UpdatePlaceStatusDto,
  ): Promise<Place> {
    //perfuratriz
    const { status } = updatePlaceStatusDto;
    return this.placesServices.updatePlaceStatus(id, status);
  }

  // @Patch('/:id/profile')
  // updatePlaceProfile(
  //   @Param('id') id: string,
  //   @Body() updatePlaceProfileDto: UpdatePlaceProfileDto,
  // ): Place {
  //   return this.placesServices.updatePlaceProfile(id, updatePlaceProfileDto);
  // }

  @Delete('/:id')
  deletePlace(@Param('id') id: string): Promise<void> {
    return this.placesServices.deletePlace(id);
  }
}
