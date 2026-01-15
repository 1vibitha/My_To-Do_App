import express from 'express'
import mongoose from "mongoose"
import cors from 'cors'
import "dotenv/config";
import todoRoutes from './routes/todoRoutes.js'


const app = express()

const allowedOrigins = ['http://localhost:5173/','https://my-to-do-app-frontend-kappa.vercel.app/']

app.use(express.json())
app.use(cors({origin : allowedOrigins , credentials: true}))

mongoose.connect(process.env.MONGODB_URL)
.then(() => console.log("Database connected"))

app.use('/',todoRoutes)

app.listen(process.env.PORT,(req , res) => {
    console.log("Server Running");
    
})