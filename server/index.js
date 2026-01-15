import express from 'express'
import mongoose from "mongoose"
import cors from 'cors'
import "dotenv/config";
import todoRoutes from './routes/todoRoutes.js'


const app = express()


app.use(express.json())
app.use(cors())

mongoose.connect(process.env.MONGODB_URL)
.then(() => console.log("Database connected"))

app.use('/',todoRoutes)

app.listen(process.env.PORT,(req , res) => {
    console.log("Server Running");
    
})