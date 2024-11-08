import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Cooking {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column('text')
  ingredients: string;

  @Column('text')
  instructions: string;

  @Column()
  createdAt: Date;
}
