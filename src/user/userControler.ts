import { NextFunction, Request, Response } from "express";
import createHttpError from "http-errors";
import userModal from './userModal'
import bcrypt from "bcrypt"
import { sign } from "jsonwebtoken";
import { config } from "../config/config";
import { User } from "./userTypes";


const createUser = async (req:Request,res:Response,next:NextFunction) =>{

    const {name,email,password} = req.body

    //validation
    if(!name || !email || !password){
        const error = createHttpError(400,"All field are required!")
        return next(error)
    }


    try{
        //database call
    const user = await userModal.findOne({email:email})

    if(user){
        const error = createHttpError(400,"user already exits with this email")
        return next(error)
    }
    }catch(err){
        return next(createHttpError(500,'Error while getting user'))
    }

    let newUser:User;

    try{
        //password hash
        const hashedPassword = await bcrypt.hash(password,10)

        newUser = await userModal.create({
            name,
            email,
            password:hashedPassword
        })

    }catch(err){
        return next(createHttpError(500,'Error while hased password'))
    }


    try{
         //token generation - jwt
    const token = sign({sub:newUser._id},config.jwt as string,{expiresIn:'7d'})


    //response
    res.status(201).json({access_token:token})
    }catch(err){
        return next(createHttpError(500,'Error while generate jwt token'))
    }

    
}


export {
    createUser
}