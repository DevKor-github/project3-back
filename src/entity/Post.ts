import { EntitySchema } from "typeorm";
//import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";

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
      type: "text",
      length: 255,
    },
    author: {
      type: "varchar",
      length: 255,
    },
    //글
    content: {
      type: "text",
    },

    //위치 태그
    location: {
      type: "point",
      nullable: true,
    },
    /*
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
    */
  },
  /*relations:{
    location:{
      type:"one-to-one",
      target: "Location",  //지오 코딩 api->위치 변환 저장한 Location entity 
      joinColumn:{
        name:"location",
      },

    }

  }*/
});

export default postSchema;
