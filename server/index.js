import express from 'express';
import dotenv from 'dotenv'
import cors from 'cors';
import router from './routes/api.js';
dotenv.config();


const app = express();
const PORT = process.env.PORT || 8000
app.use(cors())
app.use(express.json());
app.use(express.urlencoded({extended:false}))

app.use(router) 
app.listen(PORT, ()=>{
    console.log(`Server running at port ${PORT}`)
}) 