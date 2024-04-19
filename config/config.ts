import { config as conf } from "dotenv"

conf() //support now .env file

const _config ={
    port : process.env.PORT
}

export const config = Object.freeze(_config)  //freeze readonly kore dibe