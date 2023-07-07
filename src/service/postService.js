import dataSource from '../config/dataSource.js';

const postRepository = dataSource.getRepository('post');

//Create Post
export const insertPost = async (post) => {
	try {
		await postRepository.save(post);
	} catch (err) {
		console.error(err);
	}
};

//Retrieve Post
export const getPostList = async () => {
	try {
		const postList = await postRepository.find();
		return postList;
	} catch (err) {
		console.error(err);
	}
};

//Retrieve Post by condition
export const getPostByCondition = async (condition) => {

	try{
		const postList = await postRepository.find({where: condition});
		return postList;
	}catch(err){
		console.error(err);
	}
};

//Update Post
export const updatePost = async (id, post) => {
	try{
		await postRepository.update(id, post);
	}catch(err){
		console.error(err);
	}
};

//Delete Post
export const deletePost = async (id) => {
	try{
		await postRepository.delete(id);
	}catch(err){
		console.error(err);
	}
};