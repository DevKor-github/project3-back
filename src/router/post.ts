import express from "express";
import * as postController from "../controller/post";

//router file define the routes for application
const router = express.Router();

router.get("/", postController.getPostList);

//0713 CRUD path implementation
router.post("/", postController.createPost);
//retrieve using ID
router.get("/:id", postController.getPostID);
//update
router.put("/:id", postController.updatePostID);
//delete
router.delete("/:id", postController.deletePostID);

export default router;
