const express = require('express')
const ConnectDB = require('./Config/ConnectDB')
const userRouter = require('./Routes/User')
const taskRouter = require('./Routes/Task')

const app = express()

require('dotenv').config()

ConnectDB()

app.use(express.json())

app.use('/api/user',userRouter)

app.use('/api/task',taskRouter)

app.listen(process.env.port,console.log(`Server is running on the port ${process.env.port}`))