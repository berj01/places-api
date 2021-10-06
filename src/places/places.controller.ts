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
import { UpdatePlaceStatusDto } from './dto/update-place-status.dto';
import { Place, PlaceStatus } from './place.model';
import { PlacesService } from './places.service';

// http://localhost:3000/places
@Controller('places')
export class PlacesController {
  constructor(private placesServices: PlacesService) {}
  //QueryString
  // http://localhost:3000/places/fweiuhfewbib23423ffsd?search=chocolate&status=Funcionando
  @Get()
  getPlaces(@Query() filterDto: GetPlacesFilterDto): Place[] {
    if (Object.keys(filterDto).length) {
      return this.placesServices.getPlacesWithFilters(filterDto);
    } else {
      return this.placesServices.getAllPlaces();
    }
  }
  // http://localhost:3000/places/fweiuhfewbib23423ffsd
  @Get('/:id')
  getPlaceById(@Param('id') id: string): Place {
    return this.placesServices.getPlaceById(id);
  }

  @Post()
  createPlace(@Body() createPlaceDto: CreatePlaceDto): Place {
    // console.log('Veja no terminal do VSCode', body);
    return this.placesServices.createPlace(createPlaceDto);
  }

  @Patch('/:id/status')
  updatePlaceStatus(
    @Param('id') id: string,
    @Body() updatePlaceStatusDto: UpdatePlaceStatusDto,
  ): Place {
    //perfuratriz
    const { status } = updatePlaceStatusDto;
    return this.placesServices.updatePlaceStatus(id, status);
  }

  //@Patch('/:id/profile')
  //updatePlaceProfile

  @Delete('/:id')
  deletePlace(@Param('id') id: string): void {
    return this.placesServices.deletePlace(id);
  }
}
