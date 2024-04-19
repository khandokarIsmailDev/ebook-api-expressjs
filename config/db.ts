import mongoose from 'mongoose'
import { config } from './config'



const connectDb = async() =>{
    try{

        mongoose.connection.on("connected",() =>{
            console.log("connected to database successfully")
        })

        mongoose.connection.on("error",(err)=>{
            console.log("connectiong to database",err)
        })

        await mongoose.connect(config.databaseUrl as string)

        
    }catch(err){
        console.error("database is not connected")
        process.exit(1)
    }
}

export default connectDb