import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Blog {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  summary: string;

  @Column('text')
  content: string;

  @Column()
  createdAt: Date;

  @Column()
  updatedAt: Date;
}
