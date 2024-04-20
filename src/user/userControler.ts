import { NextFunction, Request, Response } from "express";
import createHttpError from "http-errors";
import userModal from './userModal'

const createUser = async (req:Request,res:Response,next:NextFunction) =>{

    const {name,email,password} = req.body

    //validation
    if(!name || !email || !password){
        const error = createHttpError(400,"All field are required!")
        return next(error)
    }

    //database call
    const user = await userModal.findOne({email:email})

    if(user){
        const error = createHttpError(400,"user already exits with this email")
        return next(error)
    }


    res.json({name:"User Created"})
}


export {
    createUser
}