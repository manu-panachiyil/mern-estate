import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import userRouter from './routes/user.route.js'
import authRouter from './routes/auth.route.js'
import cookieParser from 'cookie-parser'

dotenv.config()

mongoose.connect(process.env.MONGO).then(() => {
    console.log('Connected to the MongoDB');
}).catch((err) => {
    console.log(err);
})


const app = express()

app.use(express.json())

app.use(cookieParser())

app.listen(4000, () => {
    console.log('Server is running at 4000 !!!');
})

app.use("/api/user",userRouter)
app.use("/api/auth",authRouter)

//middleware
app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500
    const message = err.message || 'Internal server Error'
    return res.status(statusCode).json({
        success: false,
        statusCode,
        message,
    })
})