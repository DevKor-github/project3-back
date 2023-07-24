import dataSource from "../config/dataSource";

import { PostSchema } from "../entity/Post";

const postRepository = dataSource.getRepository(PostSchema);

export const getPostList = async () => {
  try {
    const postList = await postRepository.find();
    return postList;
  } catch (err) {
    console.error(err);
  }
};

//0713 CRUD implementation
export const createPost = async (
  content: string,
  author: string,
  title: string
) => {
  try {
    const post = await postRepository.create({ content, author, title });
    const newPost = await postRepository.save(post);
    return newPost;
  } catch (err) {
    console.error(err);
    throw err;
  }
};
//create

export const getbyPostID = async (id: number): Promise<any | undefined> => {
  try {
    const post = await postRepository.findOne(<any>id);
    return post;
  } catch (err) {}
};

export const updatePostID = async (
  id: number,
  content: string,
  title: string
) => {
  try {
    var post_updated = await postRepository.findOne({ where: { id: id } });
    if (post_updated) {
      post_updated.content = content;
      post_updated.title = title;
      post_updated = await postRepository.save(post_updated);
      return post_updated;
    } else {
      throw new Error("no post to be updated");
    }
  } catch (err) {
    console.error(err);
    throw err;
  }
};

export const deletePostID = async (postID: number): Promise<boolean> => {
  try {
    //const delete_post = await postRepository.findOne({ where: { id: postID } });
    //if (delete_post) {
    const con = await dataSource;

    await postRepository.delete(postID);
    return true;
    //} else {
    //return false;
    //}
  } catch (err) {
    console.error(err);
    throw err;
  }
};
