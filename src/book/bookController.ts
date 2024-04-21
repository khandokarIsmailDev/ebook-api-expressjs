import path from "node:path"
import { Request,Response,NextFunction } from "express";
import cloudinary from "../config/cloudnary";


const createBook =async (req:Request,res:Response,next:NextFunction) =>{

    // console.log("files",req.files)

    const files = req.files as { [filedname:string]:Express.Multer.File[]};

    const coverImgMimeType = files.coverImg[0].mimetype.split("/").at(-1)  // image/png   ai fomat theke sodo last file type ta ber korlam and coverImg[0] mane array return kore tai
    
    const fileName = files.coverImg[0].filename

    const filePath = path.resolve(__dirname,'../../public/data/uploads',fileName)

    //upload image in clouldnary
    const uploadResult = await cloudinary.uploader.upload(filePath,{
        filename_override:fileName,
        folder:"book-covers",
        format:coverImgMimeType
    })

    console.log("upload Result",uploadResult)

    res.json({name:"okk book"})
}

export {
    createBook
}