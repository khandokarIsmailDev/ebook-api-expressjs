import path from "node:path";
import express from "express";
import { createBook } from "./bookController";
import multer from "multer";

const bookRouter = express.Router();

// File storage configuration
// file store local ->
const upload = multer({
  dest: path.resolve(__dirname, "../../public/data/uploads"),

  limits: { fileSize: 3e7 }, // 30mb 30 * 1024 * 1024
});

// routes
// /api/books
bookRouter.post("/",
  upload.fields([         //postman kaj kore na, thundar client kaj kore
    { name: "file"},
    { name: "coverImg" }
  ]),
  createBook
);

export default bookRouter;
