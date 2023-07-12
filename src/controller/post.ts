import { Request, Response, NextFunction } from 'express';
import * as postService from '../service/postService';

export const getPostList = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const postList = await postService.getPostList();
    res.status(200).json(postList);
  } catch (err) {
    next(err);
  }
};