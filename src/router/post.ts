import express from 'express';
import * as postController from '../controller/post.ts';

const router = express.Router();

router.get('/', postController.getPostList);

export default router;