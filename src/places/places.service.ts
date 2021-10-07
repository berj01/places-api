import { Injectable, NotFoundException } from '@nestjs/common';
import { Place, PlaceStatus } from './place.model';
import { v4 as uuid } from 'uuid';
import { CreatePlaceDto } from './dto/create-place.dto';
import { GetPlacesFilterDto } from './dto/get-places-filter.dto';
import { UpdatePlaceProfileDto } from './dto/update-place-profile.dto';
@Injectable()
export class PlacesService {
  //id, name, address, site, description etc...
  private places: Place[] = [];

  getAllPlaces(): Place[] {
    return this.places;
  }

  getPlacesWithFilters(filterDto: GetPlacesFilterDto): Place[] {
    const { status, search } = filterDto;

    let places = this.getAllPlaces();

    if (status) {
      places = places.filter((p) => p.status === status);
    }

    if (search) {
      places = places.filter((place) => {
        const s: string = search.toLocaleLowerCase();
        if (
          place.name.toLowerCase().includes(s) ||
          place.description.toLowerCase().includes(s) ||
          place.address.toLowerCase().includes(s) ||
          place.site.toLowerCase().includes(s)
        ) {
          return true;
        }
        return false;
      });
    }
    return places;
  }
  getPlaceById(id: string): Place {
    const found = this.places.find((place) => place.id === id);

    if (!found) {
      throw new NotFoundException(`Lugar com o ID ${id} não encontrado`);
    }
    return found;
  }

  createPlace(createPlaceDto: CreatePlaceDto): Place {
    const { name, site, address, image, ticket, description } = createPlaceDto;

    const place: Place = {
      id: uuid(),
      name,
      site,
      address,
      image,
      ticket,
      description,
      status: PlaceStatus.ACTIVE,
    };
    //cadastrei o local na lista de locais
    this.places.push(place);
    return place;
  }

  deletePlace(id: string): void {
    //DRY - Don't repeat yourself - Não repista a si mesmo.
    // sempre que um trecho de código for igual, deve ser uma subrotina, ou método ou função.
    const found = this.getPlaceById(id);
    this.places = this.places.filter((place) => place.id !== found.id);
  }

  updatePlaceStatus(id: string, status: PlaceStatus): Place {
    const place = this.getPlaceById(id);
    place.status = status;
    return place;
  }

  updatePlaceProfile(
    id: string,
    updatePlaceProfileDto: UpdatePlaceProfileDto,
  ): Place {
    const place = this.getPlaceById(id);
    const { name, site, address, image, ticket, description } =
      updatePlaceProfileDto;

    //place.atual = novovalor
    if (name) {
      place.name = name;
    }
    place.site = site;
    place.address = address;
    place.image = image;
    place.ticket = ticket;
    place.description = description;

    return place;
  }
}
//yarn add uuid
