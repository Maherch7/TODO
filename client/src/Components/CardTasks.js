import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { current } from "../Redux/Actions/AuthActions"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from "react-router-dom";
import DeleteTask from "./DeleteTask";
import EditTask from "./EditTask";
import { editTask } from "../Redux/Actions/TaskActions";
const CardTasks=({el})=>{
    const dispatch = useDispatch()
  
    return(
    
           
             <li className="list-group-item">
                 {/* <Card style={{ width: '20rem' }}>
                <Card.Body>
                    
                    <Card.Title>{el.description}</Card.Title>                    
                    <Card.Text>
                    {el.status ? "Done" : "Not Done"}
                    <br/>
                    {el.categorie}
                    <br/>
                    {el.time}
                    </Card.Text>
                   
                    <EditTask el={el}/>
                    <Button onClick={()=> dispatch(editTask(el._id,{status : !el.status}))} > {el.status ? "Not Done" : "Done"}</Button>
                    
                </Card.Body>
                </Card> */}
        
                    <div className={el.categorie == "Work" ? "todo-indicator bg-primary":  el.categorie == "Daily tasks" ? "todo-indicator bg-secondary": el.categorie == "Shopping" ? "todo-indicator bg-success": el.categorie == "Ongoing projects" ? "todo-indicator bg-warning" : el.categorie == "Gifts to buy" ?"todo-indicator bg-danger" : "todo-indicator bg-info" } ></div>
                    <div className="widget-content p-0">
                      <div className="widget-content-wrapper">
                        {
                            el.categorie == "Work" ?
                            <i style={{padding : "10px"}} class="fa-solid fa-briefcase"></i>
                            :
                            el.categorie == "Daily tasks" ?
                            <i style={{padding : "10px"}} class="fa-solid fa-list-check"></i>
                            :
                            el.categorie == "Shopping" ?
                            <i style={{padding : "10px"}} class="fa-solid fa-shop"></i>
                            :
                            el.categorie == "Ongoing projects" ?
                            <i style={{padding : "10px"}} class="fa-solid fa-diagram-project"></i>
                            :
                            el.categorie == "Gifts to buy" ?
                            <i style={{padding : "10px"}} class="fa-solid fa-gift"></i>
                            :
                            <i style={{padding : "10px"}} class="fa-solid fa-location-dot"></i>
                        }
                      
                      
                     
                      
                     
                      
                        {/* <div className="widget-content-left mr-2">
                          <div className="custom-checkbox custom-control">
                            <input className="custom-control-input"
                              id="exampleCustomCheckbox12" type="checkbox"/><label className="custom-control-label"
                              for="exampleCustomCheckbox12">&nbsp;</label>
                            </div>
                        </div> */}
                        <div className="widget-content-left">
                          <div className="widget-heading">{el.description}<div className="badge badge-danger ml-2">Rejected</div>
                          </div>
                          {/* <div className="widget-subheading"><i>By Bob</i></div> */}
                        </div>
                      <div className="widget-content-right">
                      <EditTask el={el}/>
                        {
                            el.status ?
                            <button onClick={()=> dispatch(editTask(el._id,{status : !el.status}))} className="border-0 btn-transition btn btn-outline-danger">
                        <i class="fa-solid fa-xmark"></i>
                         
                        </button>
                        :
                        <button onClick={()=> dispatch(editTask(el._id,{status : !el.status}))} className="border-0 btn-transition btn btn-outline-success">
                        <i className="fa fa-check"></i>
                      </button>
                        }
                      
                      

                        

                       

                          <DeleteTask el={el}/>
                          
                      </div>
                      </div>
                    </div>
                  </li>

    )
}

export default CardTasks