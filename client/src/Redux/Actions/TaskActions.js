import { GETALLTASKS } from "../ActionTypes/TaskTypes"
import axios from 'axios'


export const getAllTasks=()=>async(dispatch)=>{
    try {
        const res = await axios.get('/api/task/getAllTasks', {
            headers : {
                Authorization : localStorage.getItem('token')
            }
        })

        dispatch(
            {
                type : GETALLTASKS,
                payload : res.data.tasks
            }
        )
    } catch (error) {
        console.log(error)
    }
}

export const addTask=(newTask)=>async(dispatch)=>{
    try {
        await axios.post('/api/task/addTask',newTask, {
            headers : {
                Authorization : localStorage.getItem('token')
            }
        })

        dispatch(getAllTasks())
    } catch (error) {
        console.log(error)
    }
}

export const editTask=(id,upTask)=>async(dispatch)=>{
    try {
        await axios.put(`/api/task/updateTask/${id}`,upTask)

        dispatch(getAllTasks())

    } catch (error) {
        console.log(error)
    }
}

export const deleteTask=(id)=>async(dispatch)=>{
    try {
      
            await axios.delete(`/api/task/deleteTask/${id}`)

            dispatch(getAllTasks())
            
        
       
        
    } catch (error) {
        console.log(error)
    }
}