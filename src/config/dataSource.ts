import { createConnection, Connection } from 'typeorm';
import dotenv from 'dotenv';
import path from 'path';

dotenv.config();

const __dirname = path.resolve();

const dataSource: Promise<Connection> = createConnection({
  type: 'postgres',
  host: process.env.DB_HOST || 'localhost',
  port: Number(process.env.DB_PORT) || 5432,
  username: process.env.DB_USER || 'naeromaro',
  password: process.env.DB_PASSWORD || '1234',
  database: process.env.DB_NAME || 'naeromaro',
  synchronize: true,
  //entities: [path.join(__dirname, 'entity', 'Post.ts'), path.join(__dirname, 'entity', 'User.ts')],
  entities: ['./entity/Post', './entity/User']
});

export default dataSource;