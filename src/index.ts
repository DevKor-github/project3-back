import express from 'express';
import { Pool } from 'pg';
import postRouter from'./router/post.ts';
const app = express();
const port = 3000;

// PostgreSQL 연결 설정
const pool = new Pool({
  host: 'localhost',
  port: 5432,
  database: 'naeromaro',
  user: 'naeromaro',
  password: '1234',
});

// 미들웨어 및 라우트 설정
app.use(express.json());
app.use('/posts',postRouter);

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/users', async (req, res) => {
  try {
    const client = await pool.connect();
    const result = await client.query('SELECT * FROM users');
    const users = result.rows;
    res.json(users);
    client.release();
  } catch (err) {
    console.error(err);
    res.status(500).send('Error retrieving users');
  }
});

// 서버 시작
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});