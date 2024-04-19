import express from 'express';

const app = express()


app.get('/',(req,res)=>{
    return res.json({"name":"ismail"})
})


export default app