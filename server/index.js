import express from 'express'
import {config} from 'dotenv'

config()


const app = express()



app.listen(process.env.PORT,()=> {
    console.log(`server running on port ${process.env.PORT}`);
})