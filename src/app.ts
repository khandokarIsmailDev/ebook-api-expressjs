import express, { NextFunction, Request, Response } from 'express';
import createHttpError, { HttpError } from 'http-errors';
import { config } from './config/config';
import globalErrorHandler from './middlewares/globalErrorHandler';
import userRouter from './user/userRouter';

const app = express()

// req.body theke json support korate ai configuretion
app.use(express.json())


app.get('/',(req,res)=>{

    const error = createHttpError('somthing is wrong')
    throw error;  // error create kore check koralm kaj kortese kina

    return res.json({"name":"ismail"})
})


//  /api/users/        router
app.use('/api/users',userRouter)


//Global error handling
app.use(globalErrorHandler)


export default app