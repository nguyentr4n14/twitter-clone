import express from 'express'
import dotenv from 'dotenv'
import cookieParser from 'cookie-parser'

import authRoutes from './routes/auth.routes.js'
import { connectMongoDB } from './db/connectMongoDb.js'

dotenv.config()

const app = express()
const PORT = process.env.PORT || 5000

app.use(express.json()) // to parse req.body
app.use(express.urlencoded({ extended: true })) // to parse form data (urlencoded)

app.use(cookieParser()) // to parse req.cookie

app.use('/api/auth', authRoutes)


app.listen(PORT, () => {
    console.log(`Server is up and running on port: ${PORT}`)
    connectMongoDB()
})