import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
} from "typeorm";

import { LocationSchema } from "./Location";

@Entity()
export class PostSchema {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    type: "varchar",
    length: 150,
    unique: true,
  })
  title: string;

  @Column({
    type: "varchar",
    length: 150,
  })
  author: string;

  @Column({
    type: "varchar",
    length: 150,
  })
  content: string;

  @Column({
    type: "varchar",
    length: 150,
    nullable: true,
  })
  location: string;

  //relationhip 설정 PostSchemea(MANY)to Location(ONE)
  /*@ManyToOne(
    () => LocationSchema,
    (locationSchema) => locationSchema.postSchema
  )
  @JoinColumn({
    name: "location",
  })
  locationSchema: LocationSchema;*/
}
