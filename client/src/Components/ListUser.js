import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getAllUsers } from "../Redux/Actions/AuthActions"
import Profil from "./Profil"
import CardUser from "./CardUser"


const ListUser=()=>{

    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(getAllUsers())
    },[])

const users = useSelector(state=> state.AuthReducer.users)

return(
    <div>
        {
            users.map((el,i,t)=> <CardUser el ={el}/>)
        }
    </div>
)
}

export default ListUser