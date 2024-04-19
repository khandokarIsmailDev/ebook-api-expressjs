import app from "./src/app";
import { config } from "./config/config";
import connectDb from "./config/db";







const startServer = async() =>{

    //connect database
    await connectDb()

    const port = config.port || 3000

    app.listen(port,()=>{
        console.log(`Listening port ${port}`)
    })
}

startServer()