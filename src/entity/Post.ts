import { EntitySchema } from 'typeorm';
interface Post {
  id: number;
  name: string;
  author?: string | null;
}

const postSchema = new EntitySchema<Post>({
  name: 'post',
  tableName: 'post',
  columns: {
    id: {
      type: 'int',
      primary: true,
      generated: true,
    },
    name: {
      type: 'varchar',
      length: 255,
    },
    author: {
      type: 'varchar',
      length: 255,
      nullable: true,
    },
  },
});

export default postSchema;