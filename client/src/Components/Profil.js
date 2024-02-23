import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { current } from "../Redux/Actions/AuthActions"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from "react-router-dom";
import DeleteProfil from "./DeleteProfil";
import ListTasks from "./ListTasks";
import AddTask from "./AddTask";
import GfGWeatherApp from "./GfGWeatherApp";
const Profil=()=>{

    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(current())
    },[])
    const user = useSelector(state=> state.AuthReducer.user)
    return(
        <div class="cardtask">
            {user &&<>
                <div>
            <Card style={{ width: '22rem' }}>
               
                <Card.Body>
                    <Card.Title>{user.name}</Card.Title>                    
                    <Card.Text>
                    {user.email}
                    </Card.Text>
                   <div className="contProf">
                    <Card.Link as={Link} to='/EditProfil'><Button variant="outline-dark"><i class="fa-solid fa-user-pen"></i> Edit Profil</Button></Card.Link>
                    <DeleteProfil/>
                    </div>
                </Card.Body>
                </Card>
                <GfGWeatherApp/>
                </div>
                <ListTasks class="list"/>
                <AddTask/>
                </>}
        </div>
    )
}

export default Profil