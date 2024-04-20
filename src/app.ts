import express, { NextFunction, Request, Response } from 'express';
import createHttpError, { HttpError } from 'http-errors';
import { config } from '../config/config';
import globalErrorHandler from '../middlewares/globalErrorHandler';

const app = express()


app.get('/',(req,res)=>{

    const error = createHttpError('somthing is wrong')
    throw error;  // error create kore check koralm kaj kortese kina

    return res.json({"name":"ismail"})
})


//Global error handling
app.use(globalErrorHandler)


export default app