import { Request, Response, NextFunction } from 'express';
import * as postService from '../service/postService';

export const getPostList = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const postList = await postService.getPostList();
    res.status(200).json(postList);
  } catch (err) {
    next(err);
  }
};

export const createPost = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { name, author } = req.body;
    const newPost = await postService.createPost(name,author);
    res.status(200).json(newPost);
  } catch (err) {
    next(err);
  }
};
export const updatePost = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const id:number=Number(req.params);
    const { name, author } = req.body;
    const updatedPost = await postService.updatePost(id,name,author);
    res.status(200).json(updatedPost);
  } catch (err) {
    next(err);
  }
};
export const getPostById = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const id:number=Number(req.params);
    const { name, author } = req.body;
    const updatedPost = await postService.updatePost(id,name,author);
    res.status(200).json(updatedPost);
  } catch (err) {
    next(err);
  }
};
export const deletePost = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const id:number=Number(req.params);
    const deletedPost=await postService.deletePost(id);
    res.status(200).json(deletedPost);
  } catch (err) {
    next(err);
  }
};