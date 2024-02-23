import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import { getOneUser } from "../Redux/Actions/AuthActions"
import DeleteProfil from "./DeleteProfil"
const ProfilUser=()=>{
    const {id} = useParams()

    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(getOneUser(id))
    },[])
    const oneUser = useSelector(state=> state.AuthReducer.oneUser)

    return(
        <div>
            <h2>{oneUser.name}</h2>
            <h3>{oneUser.email}</h3>
            <DeleteProfil id={id}/>
        </div>
    )
}

export default ProfilUser

