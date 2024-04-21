import express from "express";
import { createBook } from "./bookController";
import multer from "multer";
import path from "node:path";

const bookRouter = express.Router();

//file store local
const uploads = multer({

  dest: path.resolve(__dirname, "../../public/data/uploads"),

  limits: { fileSize: 3e7 }, //30mb = 1024*1024*1024*..

});

bookRouter.post("/",uploads.fields([
    {name: "converImg", maxCount:1},
    {name: "file", maxCount:1}
]), createBook);

export default bookRouter;
