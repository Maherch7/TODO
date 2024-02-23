import { useDispatch, useSelector } from "react-redux"
import { getAllTasks } from "../Redux/Actions/TaskActions"
import { useEffect, useState } from "react"
import CardTasks from "./CardTasks"
import Button from "react-bootstrap/esm/Button"
import AddTask from "./AddTask"
import Form from 'react-bootstrap/Form';
const ListTasks=()=>{
    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(getAllTasks())
    },[])
const [done,setDone] = useState('All')
const [categorie,setCategorie] = useState('All')
const tasks = useSelector(state=> state.TaskReducer.tasks)

function comparerDecroissant(a, b) {
  if (a.time > b.time) return -1;
  if (a.time < b.time) return 1;
  return 0;
}
    return(
        <div className="hela" >
    
          {
            tasks.length > 0 &&
            <>
              <>
            {/* <Button onClick={()=>setDone('All')}>All</Button>
            <Button onClick={()=>setDone('Done')}>Done</Button>
            <Button onClick={()=>setDone('Not Done')}>Not Done</Button> */}
          <div className="mahmoud">
          <div className="card-header-title font-size-lg text-capitalize font-weight-normal"><i class="fa-solid fa-filter"></i>&nbsp;Filter</div>
            <Form.Label>Progress</Form.Label>
            <Form.Select onChange={(e)=>setDone(e.target.value)}>
            <option value="All">All</option>          
              <option value="Done">Done</option>
              <option value="Not Done">Not Done</option>             
            </Form.Select>
       
            <Form.Label>Categorie</Form.Label>
            <Form.Select onChange={(e)=>setCategorie(e.target.value)}>
            <option value="All">All</option>          
              <option value="Work">Work</option>
              <option value="Daily tasks">Daily tasks</option>
              <option value="Shopping">Shopping</option>
              <option value="Ongoing projects">Ongoing projects</option>
              <option value="Gifts to buy">Gifts to buy</option>
              <option value="Places to visit">Places to visit</option>
            </Form.Select>
            </div>
          </>

          <div style={{    width: "539px"}}>
            <div className="row d-flex justify-content-center containerTO">
    <div className="col-md-8">
      <div className="card-hover-shadow-2x mb-3 card" style={{width:'522px', marginLeft:'-80px', marginTop:'23px', height:'500px'}}>
        <div className="card-header-tab card-header">
          <div className="card-header-title font-size-lg text-capitalize font-weight-normal"><i
              className="fa fa-tasks"></i>&nbsp;Task Lists</div>
          
        </div>
        <div className="scroll-area-sm" style={{height:'388px'}}>
          <perfect-scrollbar className="ps-show-limits">
            <div style={{position: "static"}} className="ps ps--active-y">
              <div className="ps-content">
                <ul className=" list-group list-group-flush">
                


                {
                done == "All" ? 
                <>
                {
                  categorie == 'All' ? 
                  
                  tasks.sort(comparerDecroissant).map((el,i,t)=> <CardTasks el ={el}/>) 
                  
                  : 
                  
                  tasks.filter((el,i,t)=>el.categorie == categorie).sort(comparerDecroissant).map((el,i,t)=> <CardTasks el ={el}/>)
                }
                </>
                
                : done == "Done" ? 
                <>
                {
                  categorie == 'All' ? 
                  
                  tasks.filter((el,i,t)=>el.status == true).sort(comparerDecroissant).map((el,i,t)=> <CardTasks el ={el}/>) 
                  
                  : 
                  
                  tasks.filter((el,i,t)=>el.status == true && el.categorie == categorie).sort(comparerDecroissant).map((el,i,t)=> <CardTasks el ={el}/>)
                }
                </>
                
                :
                <>
                {
                  categorie == 'All' ? 
                  
                  tasks.filter((el,i,t)=>el.status == false).sort(comparerDecroissant).map((el,i,t)=> <CardTasks el ={el}/>) 
                  
                  : 
                  
                  tasks.filter((el,i,t)=>el.status == false && el.categorie == categorie).sort(comparerDecroissant).map((el,i,t)=> <CardTasks el ={el}/>)
                }
                </>
                
              }


                
                </ul>
              </div>
              
            </div>
          </perfect-scrollbar>
        </div>
        <div class="d-block text-right card-footer">
          {/* <button class="mr-2 btn btn-link btn-sm">Cancel</button><button
            class="btn btn-primary">Add Task</button> */}
            {/* <AddTask/> */}
            </div>
      </div>
    </div>
    </div>
        </div>
              </>
          }
   
        
           
        </div>
    )
}

export default ListTasks