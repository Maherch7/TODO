const Task = require("../Models/Task")

exports.AddTask = async (req,res) => {
    try {
        
        const foundTask = await Task.findOne({description : req.body.description})

        if (foundTask) {
            return res.status(400).send('Task already exists')
        }

        const newTask = new Task({...req.body,owner : req.user._id})

        await newTask.save()

        res.status(200).send({Msg : "Task added", newTask})
    } catch (error) {
        res.status(500).send('Could not add task')
    }
}

exports.getAllTasks = async(req,res)=>{
    // req.user
    try {
        const tasks = await Task.find({owner : req.user._id}).populate('owner')

        res.status(200).send({Msg : "Tasks", tasks})
    } catch (error) {
        res.status(500).send('Could not get tasks')
    }
}

exports.DeleteTask= async(req,res)=>{
    try {
        const {id} = req.params

        await Task.findByIdAndDelete(id)

        res.status(200).send("Task deleted")
    } catch (error) {
        res.status(500).send('Could not delete task')
    }
}

exports.UpdateTask = async(req,res)=>{
    try {
        const {id} = req.params

        await Task.findByIdAndUpdate(id,{$set : req.body}) 

        res.status(200).send("Task updated")
    } catch (error) {
        res.status(500).send('Could not update Task')
    }
}

exports.GetOneTask = async(req,res)=>{
    try {
        const {id} = req.params

        const task = await Task.findById(id)

        res.status(200).send({Msg : "Task",task})
    } catch (error) {
        res.status(500).send('Could not get task')
    }
}
