import path from "node:path"
import { Request,Response,NextFunction } from "express";
import cloudinary from "../config/cloudnary";
import createHttpError from "http-errors";


const createBook =async (req:Request,res:Response,next:NextFunction) =>{

    // console.log("files",req.files)

    const files = req.files as { [filedname:string]:Express.Multer.File[]};

    const coverImgMimeType = files.coverImg[0].mimetype.split("/").at(-1)  // image/png   ai fomat theke sodo last file type ta ber korlam and coverImg[0] mane array return kore tai
    
    //filename for coverImg
    const fileName = files.coverImg[0].filename

    const filePath = path.resolve(__dirname,'../../public/data/uploads',fileName)

    //upload image in clouldnary
    const uploadResult = await cloudinary.uploader.upload(filePath,{
        filename_override:fileName,
        folder:"book-covers",
        format:coverImgMimeType
    })

    console.log("upload Result",uploadResult)

    //filename for file
    const bookFileName = files.file[0].filename

    const bookFilePath = path.resolve(__dirname,'../../public/data/uploads',bookFileName)

    try{
        const bookFileUploadResult = await cloudinary.uploader.upload(bookFilePath,{
            resource_type:'raw',
            filename_override:bookFileName,
            folder:'book-pdfs',
            format:"pdf"  // ai pdf clouldnary support kore na initially, tai er jonno settin=>security=>pdf and zip file delivery check mark kore dite hobe, tahole kaj korbe
        })
    
        console.log(bookFileUploadResult)
    }catch(err){
        console.log(err)
        next(createHttpError(500,"Error while file uploading"))
    }

    

    res.json({name:"okk book"})
}

export {
    createBook
}