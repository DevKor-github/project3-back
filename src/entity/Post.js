import { EntitySchema } from "typeorm";

const postSchema = new EntitySchema({
  name: "post",
  tableName: "post",
  columns: {
    id: {
      type: "int",
      primary: true,
      generated: true,
    },
    title: {
      type: "varchar",
      length: 255,
    },
    author: {
      type: "varchar",
      length: 255,
    },
    //글
    content: {
      type: "type",
      nullable: false,
    },
    //사진
    pic: {
      type: "xml",
      length: 1000,
      nullable: true,
    },
    //작성시간
    postdate: {
      type: "date",
      nullable: false,
    },
    //위치 태그
    location: {
      type: "point",
      foreign: true,
    },
    //좋아요
    like: {
      type: "int",
      nullable: true,
    },
    //답글
    comment: {
      type: "varchar",
      length: 50,
      nullable: true,
    },
  },
});

export default postSchema;
