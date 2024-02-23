import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate} from 'react-router-dom';
import { current, editUser } from '../Redux/Actions/AuthActions';
const EditProfil=()=>{
  
    const dispatch = useDispatch()

    useEffect(()=>{
      dispatch(current())
    },[])

    const user = useSelector(state=> state.AuthReducer.user)

    const [name,setName] = useState(user.name)
    const [email,setEmail] = useState(user.email)

    useEffect(()=>{
      setName(user.name)   
      setEmail(user.email)
    },[user])

    const navigate = useNavigate()


    const handleEdit=(e)=>{
      e.preventDefault()
      dispatch(editUser(user._id,{name,email},navigate))
    }
    return(
      <>
      <div className="wrapper">
    <form action="#">
      <h2>Edit</h2>
        <div className="input-field">
        <input value={name} onChange={(e)=>setName(e.target.value)} type="text" required/>
        <label>Enter your name</label>
      </div>
      <div className="input-field">
        <input value={email} onChange={(e)=>setEmail(e.target.value)} type="email" required/>
        <label>Enter your email</label>
      </div>

      <button onClick={(e)=>handleEdit(e)} variant="primary" type="submit">Submit</button>
     
    </form>
  </div>
      </>
      //   <Form>
      //   <Form.Group className="mb-3" controlId="formBasicEmail">
      //     <Form.Label>Name</Form.Label>
      //     <Form.Control value={name} onChange={(e)=>setName(e.target.value)} type="text" placeholder="Enter name" />          
      //   </Form.Group>

      //   <Form.Group className="mb-3" controlId="formBasicEmail">
      //     <Form.Label>Email address</Form.Label>
      //     <Form.Control value={email} onChange={(e)=>setEmail(e.target.value)} type="email" placeholder="Enter email" />          
      //   </Form.Group>
  
      //   <Button onClick={(e)=>handleEdit(e)} variant="primary" type="submit">
      //     Submit
      //   </Button>
      // </Form>
    )
}

export default EditProfil