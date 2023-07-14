import express, { Request, Response, Router } from 'express';
import postRouter from './post.ts';

const router = express.Router();

router.use('/post', postRouter);

router.get('/', (req, res) => {
	res.send('Hello World!');
});

export default router;