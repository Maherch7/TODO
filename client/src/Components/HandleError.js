import {useSelector} from "react-redux"
import Alert from 'react-bootstrap/Alert';
const HandleError=()=>{

    const errorA = useSelector(state=> state.ErrorReducer)
    return(
        <div>
            {
                errorA.map((el,i,t)=>
                <Alert key='danger' variant ='danger'>
                {el.msg}
                </Alert> )
            }
        </div>
    )
}

export default HandleError