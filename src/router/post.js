import express from 'express';
import * as postController from '../controller/post.js';

const router = express.Router();

//Create Post
router.post('/', postController.createPost);

//Retrieve Post
router.get('/', postController.getPostList);

//Retrieve Post by condition
router.get('/search', postController.getPostByCondition);

//Update Post by ID
router.put('/:id', postController.updatePost);

//Delete Post by ID
router.delete('/:id', postController.deletePost);

export default router;
