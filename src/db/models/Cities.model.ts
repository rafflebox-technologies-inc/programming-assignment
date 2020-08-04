import {
  BaseEntity,
  Column,
  Entity,
  PrimaryGeneratedColumn
} from 'typeorm';

@Entity('cities')
export class City extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  city_name: string;

  @Column()
  time: string;

  @Column()
  temperature: number;
}
