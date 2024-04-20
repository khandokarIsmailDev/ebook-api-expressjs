import { config as conf } from "dotenv"

conf() //support now .env file

const _config ={
    port : process.env.PORT,
    databaseUrl:process.env.MONGOOSE_CONNECTION_STRING,
    env:process.env.NODE_ENV,
    jwt:process.env.JWT_SECRET
}

export const config = Object.freeze(_config)  //freeze readonly kore dibe