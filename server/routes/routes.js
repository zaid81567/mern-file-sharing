import { uploadImage } from "../controller/image-controller.js";
import express from "express";
import upload from "../middleware/upload-middleware.js";
import { downloadImage } from "../controller/image-controller.js";

const router = express.Router();

//middleware -> upload.single("file"), will process the req. before going for uploadImage controller.
router.post("/upload", upload.single("file"), uploadImage);

//to download the img -> using get api [here file is the endpoint]
// localhost:8000/file/6655fb01639b7ff87129514d [example]
http: router.get("/file/:fileId", downloadImage);

export default router;
