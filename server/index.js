import express from 'express'
import dotenv from 'dotenv'
import { connectDB } from './db/dbConn.js'

dotenv.config()

const app = express()
const port = process.env.PORT

app.use(express.json())
app.use('/auth', authRoutes)

app.listen(port, () => {
    connectDB()
    console.log(`Server is listening on port ${port}`)
})  