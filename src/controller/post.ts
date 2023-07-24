import { Request, Response, NextFunction } from "express";
import * as postService from "../service/postService";
import { PostSchema } from "../entity/Post";

//actual function implementation of CRUD Posts
export const getPostList = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const postList = await postService.getPostList();
    res.status(200).json(postList);
    res.send("my post");
  } catch (err) {
    next(err);
  }
};

export const createPost = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { content, author, title } = req.body;
    const newPost = await postService.createPost(content, author, title);
    res.status(201).json(newPost);
  } catch (err) {
    next(err);
  }
};

export const getPostID = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const postID = parseInt(req.params.id, 10);
    const post = await postService.getbyPostID(postID);
    if (post) {
      res.status(200).json(post);
    } else {
      res.status(404).json({ error: "Post not found" });
    }
  } catch (err) {
    next(err);
  }
};

export const updatePostID = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const postID = parseInt(req.params.id, 10);
    const { content, title } = req.body;
    const updatedPost = await postService.updatePostID(postID, content, title);
    if (updatedPost) {
      res.status(200).json(updatedPost);
    } else {
      res.status(404).json({ error: "Post not found" });
    }
  } catch (err) {
    next(err);
  }
};

export const deletePostID = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const postID = parseInt(req.params.id, 10);
    const deletionsuccess = await postService.deletePostID(postID);
    if (deletionsuccess) {
      //res.status(204).end();
      res.status(204).json({ message: "Sucessufully deleted" });
    } else {
      res.status(404).json({ error: "Post not found" });
    }
  } catch (err) {
    next(err);
  }
};
