import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { current } from "../Redux/Actions/AuthActions"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from "react-router-dom";
import DeleteProfil from "./DeleteProfil";
const CardUser=({el})=>{

  
    return(
        <div>
            <Card style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Title as={Link} to={`/ProfilUser/${el._id}`}>{el.name}</Card.Title>                    
                    <Card.Text>
                    {el.email}
                    </Card.Text>
                    {/* <Card.Link as={Link} to='/EditCardUser'>Edit</Card.Link>
                    <DeleteCardUser/> */}
                </Card.Body>
                </Card>
            
        </div>
    )
}

export default CardUser