import express from "express";

import postRouter from "./post";

import locationRouter from "./location";

const router = express.Router();

router.use("/post", postRouter);

//0721
router.use("/where", locationRouter);

router.get("/", (req, res) => {
  res.send("Hello world !");
});

export default router;
