import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class GameDev {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column('text')
  description: string;

  @Column()
  releaseDate: Date;

  @Column()
  features: string;
}
