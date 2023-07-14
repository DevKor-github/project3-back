import { getRepository } from 'typeorm';
import dataSource from '../config/dataSource';
import postSchema from '../entity/Post';


export const getPostList = async (): Promise<any[]> => {
  try {
    const connection = await dataSource; // dataSource의 반환 값을 대기
    const postRepository = connection.getRepository(postSchema); // connection에서 getRepository 호출
    const postList = await postRepository.find();
    return postList;
  } catch (err) {
    console.error(err);
    throw err;
  }
};
export const getPostById = async (postId:number): Promise<any> => {
  try {
    const connection = await dataSource; // dataSource의 반환 값을 대기
    const postRepository = connection.getRepository(postSchema); // connection에서 getRepository 호출
    const foundPost = await postRepository.findOne({where:{id:postId}});
    if (!foundPost) {
      throw new Error(`Post with ID: ${postId} not found.`);
    }
    return foundPost;
  } catch (err) {
    console.error(err);
    throw err;
  }
};
let currentPostId=1;
export const createPost = async (name:string, author:string): Promise<any> => {
  try {
    const connection = await dataSource; // dataSource의 반환 값을 대기
    const postRepository = connection.getRepository(postSchema);
    const newPost=await postRepository.create({id:currentPostId++,name,author});
    await postRepository.save(newPost);
    return newPost;
  } catch (err) {
    console.error(err);
    throw err;
  }
};
export const updatePost = async (postId: number,name:string, author:string): Promise<any> => {
    try {
      const connection = await dataSource; // dataSource의 반환 값을 대기
      const postRepository = connection.getRepository(postSchema);
      const postToUpdate=await postRepository.findOne({where:{id:postId}});
      if (!postToUpdate) {
        throw new Error(`Post with ID: ${postId} not found.`);
      }
      postToUpdate.name=name;
      postToUpdate.author=author;
      const updatedPost=await postRepository.save(postToUpdate);
      return updatedPost;
    } catch (err) {
      console.error(err);
      throw err;
    }
  };
  export const deletePost = async (postId: number): Promise<any> => {
    try {
      const connection = await dataSource; // dataSource의 반환 값을 대기
      const postRepository = connection.getRepository(postSchema);
      const postToDelete=await postRepository.findOne({where:{id:postId}});
      if (!postToDelete) {
        throw new Error(`Post with ID: ${postId} not found.`);
      }
      postRepository.remove(postToDelete);
      return postToDelete;
    } catch (err) {
      console.error(err);
      throw err;
    }
  };