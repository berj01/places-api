/* eslint-disable prettier/prettier */
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { PlaceStatus } from './place-status.enum';

@Entity()
export class Place {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  site: string;

  @Column()
  address: string;

  @Column()
  image: string;

  @Column()
  ticket: string;

  @Column()
  description: string;

  @Column()
  status: PlaceStatus;
}
