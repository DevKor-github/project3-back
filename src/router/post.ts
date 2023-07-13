import express from 'express';
import * as postController from '../controller/post.ts';

const postRouter = express.Router();

postRouter.get('/', postController.getPostList);
postRouter.get('/:id',postController.getPostById);
postRouter.post('/',postController.createPost);
postRouter.put('/:id',postController.updatePost);
postRouter.delete('/:id',postController.deletePost);
export default postRouter;