import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Work {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  company: string;

  @Column('text')
  description: string;

  @Column()
  startDate: Date;

  @Column({ nullable: true })
  endDate: Date;

  @Column()
  isPersonalProject: boolean;
}
