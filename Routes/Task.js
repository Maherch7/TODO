const express = require('express')
const { AddTask, getAllTasks, DeleteTask, UpdateTask, GetOneTask } = require('../Controllers/Task')
const { isAuth } = require('../Middlewares/isAuth')


const taskRouter = express.Router()

taskRouter.post('/AddTask',isAuth,AddTask)

taskRouter.get('/getAllTasks',isAuth,getAllTasks)

taskRouter.delete('/deleteTask/:id',DeleteTask)

taskRouter.put('/updateTask/:id',UpdateTask) 

taskRouter.get('/getOneTask/:id',GetOneTask)

module.exports = taskRouter