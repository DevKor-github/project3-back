import * as postService from '../service/postService.js';

//Create Post
export const createPost = async (req, res, next) => {
	if(!req.body.name || !req.body.place || !req.body.description || !req.body.author) {
		res.status(400).json({message: req.body.name});
		return;
	};

	const post = {
		name: req.body.name,
		place: req.body.place,
		description: req.body.description,
		author: req.body.author,
	};

	try{
		await postService.insertPost(post);
		res.status(200).json({message: 'Successfully created'});
	} catch(err){
		next(err);
	}

};

//Retrieve Post
export const getPostList = async (req, res, next) => {
	try {
		const postList = await postService.getPostList();
		res.status(200).json(postList);
	} catch (err) {
		next(err);
	}
};

//Retrieve Post by condition
export const getPostByCondition = async (req, res, next) => {
	const id = req.body.id ? req.body.id : null;
	const place = req.body.place ? req.body.place : null;
	const author = req.body.author ? req.body.author : null;
	const name = req.body.name ? req.body.name : null;

	const condition = {
		id: id,
		place: place,
		author: author,
		name: name,
	};

	try{
		const post = await postService.getPostByCondition(condition);
		res.status(200).json(post);
	}catch(err){
		next(err);	
	}
};

//Update Post
export const updatePost = async (req, res, next) => {
	const id = req.params.id;
	const post = {
		name: req.body.name,
		place: req.body.place,
		description: req.body.description,
		author: req.body.author,
	};

	try{
		await postService.updatePost(id, post);
		res.status(200).json({message: 'Successfully updated'});
	}catch(err){
		next(err);
	}
};

//Delete Post
export const deletePost = async (req, res, next) => {
	const id = req.params.id;

	try{
		await postService.deletePost(id);
		res.status(200).json({message: 'Successfully deleted'});
	}catch(err){
		next(err);
	}
};

