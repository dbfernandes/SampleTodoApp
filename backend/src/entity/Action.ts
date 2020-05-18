import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
} from "typeorm";

@Entity()
export class Action {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  description: string;

  @Column()
  completed: boolean;

  @CreateDateColumn({ name: "createdAt", type: "datetime" })
  createdAt: Date;

  @UpdateDateColumn({ name: "updatedAt", type: "datetime" })
  updatedAt: Date;
}
