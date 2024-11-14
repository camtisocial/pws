import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class GuestBook {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('text')
  content: string;
}
