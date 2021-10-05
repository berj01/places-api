/* eslint-disable prettier/prettier */
export interface Place {
  id: string;
  name: string;
  site: string;
  address: string;
  image: string;
  ticket: string;
  description: string;
  status: PlaceStatus;
}

export enum PlaceStatus {
  ACTIVE = 'Funcionando',
  INACTIVE = 'Fechado',
  DISABLED = 'Fechado Permanentemente',
}
