import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  BaseEntity,
  JoinColumn,
} from "typeorm";
//import { Point, LineString } from "wkx";
import { Point } from "typeorm";
import { PostSchema } from "./Post";

//지오코딩 주소를 1600 Amphitheatre Parkway, Mountain View, CA
//->지리적 좌표 (위도 37.423021, 경도 -122.083739)로 변환

@Entity()
export class LocationSchema extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    type: "varchar",
    length: 300,
  })
  address: string;

  @Column({
    type: "point",
    nullable: true,
  })
  coordinate: Point;
  //coordinate: "Point(-122.083 37.423021)"

  /*@OneToMany(() => PostSchema, (postSchema) => postSchema.locationSchema)
  postSchema: PostSchema[];*/
}
