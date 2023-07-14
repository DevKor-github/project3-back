import typeorm ,{ DataSource } from 'typeorm';
import dotenv from 'dotenv';
import { join } from 'path';

dotenv.config();


const dataSource = new DataSource({
  type: 'postgres',
  host: process.env.DB_HOST || 'localhost',
  port: Number(process.env.DB_PORT) || 5433,
  username: process.env.DB_USER || 'postgres',
  password: process.env.DB_PASSWORD || '0129',
  database: process.env.DB_NAME || 'naromaro',
  synchronize: true,
  entities: [join(__dirname, '../entity/Post.ts'), './entity/User']
});

export default dataSource;