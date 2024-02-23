import { useState } from "react"
import { useDispatch } from "react-redux"
import { addTask } from "../Redux/Actions/TaskActions"
import Form from 'react-bootstrap/Form';
import Button from "react-bootstrap/esm/Button";
const AddTask=()=>{
    const [description,setDescription] = useState('')
    const [categorie,setCategorie] = useState('Work')
    const dispatch = useDispatch()

    const handleAdd=(e)=>{
        e.preventDefault()
        dispatch(addTask({description,categorie}))
    }
return(
    <div id="dropdown" className="maher">
           <div className="card-header-title font-size-lg text-capitalize font-weight-normal"><i class="fa-solid fa-plus"></i>&nbsp;Add new task</div>
         <Form.Label>Categories</Form.Label>
          <Form.Select onChange={(e)=>setCategorie(e.target.value)}>
          <option value="Work">Work</option>
            <option value="Daily tasks">Daily tasks</option>
            <option value="Shopping">Shopping</option>
            <option value="Ongoing projects">Ongoing projects</option>
            <option value="Gifts to buy">Gifts to buy</option>
            <option value="Places to visit">Places to visit</option>            
            </Form.Select>
    
         <Form.Label>Description</Form.Label>
         <Form.Control type="text" placeholder="Enter Task" onChange={(e)=>setDescription(e.target.value)} />  
         <Button variant="outline-success" onClick={(e)=>handleAdd(e)} style={{margin :"4px"}}>Add Task</Button>
    </div>                          
)    
}

export default AddTask