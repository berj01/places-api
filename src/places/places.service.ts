import { Injectable, NotFoundException } from '@nestjs/common';
import { PlaceStatus } from './place-status.enum';
import { CreatePlaceDto } from './dto/create-place.dto';
import { GetPlacesFilterDto } from './dto/get-places-filter.dto';
import { UpdatePlaceProfileDto } from './dto/update-place-profile.dto';
import { PlacesRepository } from './places.repository';
import { InjectRepository } from '@nestjs/typeorm';
import { Place } from './place.entity';
@Injectable()
export class PlacesService {
  constructor(
    @InjectRepository(PlacesRepository)
    private placesRepository: PlacesRepository,
  ) {}

  async getPlaceById(id: string): Promise<Place> {
    const found = await this.placesRepository.findOne(id);

    if (!found) {
      throw new NotFoundException(`Lugar com o ID ${id} não encontrado`);
    }
    return found;
  }
  //SOD - SOLID - Singularity| Open Closed Principle |Depency Inversion
  async createPlace(createPlaceDto: CreatePlaceDto): Promise<Place> {
    return this.placesRepository.createPlace(createPlaceDto);
  }
  getPlaces(filterDto: GetPlacesFilterDto): Promise<Place[]> {
    return this.placesRepository.getPlaces(filterDto);
  }

  async deletePlace(id: string): Promise<void> {
    const result = await this.placesRepository.delete(id);

    if (result.affected === 0) {
      throw new NotFoundException(`Lugar com o id ${id} não encontrado`);
    }
  }
  async updatePlaceStatus(id: string, status: PlaceStatus): Promise<Place> {
    const place = await this.getPlaceById(id);
    place.status = status;

    await this.placesRepository.save(place);
    return place;
  }
  // updatePlaceProfile(
  //   id: string,
  //   updatePlaceProfileDto: UpdatePlaceProfileDto,
  // ): Place {
  //   const place = this.getPlaceById(id);
  //   const { name, site, address, image, ticket, description } =
  //     updatePlaceProfileDto;
  //   //place.atual = novovalor
  //   if (name) {
  //     place.name = name;
  //   }
  //   place.site = site;
  //   place.address = address;
  //   place.image = image;
  //   place.ticket = ticket;
  //   place.description = description;
  //   return place;
  // }
}
