import express from "express";
import * as locationController from "../controller/location";

const router = express.Router();

router.post("/", locationController.getLocation);

//router.get("/:id", locationController.geclosePost);

export default router;
