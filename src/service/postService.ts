import { getRepository } from 'typeorm';
import dataSource from '../config/dataSource';

export const createPost = async (name: string): Promise<void> => {
  // 구현부
};

export const getPostList = async (): Promise<any[]> => {
  try {
    const connection = await dataSource; // dataSource의 반환 값을 대기
    const postRepository = connection.getRepository('post'); // connection에서 getRepository 호출
    const postList = await postRepository.find();
    return postList;
  } catch (err) {
    console.error(err);
    throw err;
  }
};
