import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useDispatch } from 'react-redux';
import { register } from '../Redux/Actions/AuthActions';
import { Link, useNavigate } from 'react-router-dom';

const Register=()=>{

    const [name,setName] = useState('')
    const [email,setEmail] = useState('')
    const [password, setPassword] = useState('')
    
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleRegister=(e)=>{
        e.preventDefault()
        dispatch(register({name,email,password},navigate))
    }
    return(
      <>
      <div className="wrapper">
    <form action="#">
      <h2>Register</h2>
        <div className="input-field">
        <input onChange={(e)=>setName(e.target.value)} type="text" required/>
        <label>Enter your name</label>
      </div>
      <div className="input-field">
        <input onChange={(e)=>setEmail(e.target.value)} type="text" required/>
        <label>Enter your email</label>
      </div>
      <div className="input-field">
        <input onChange={(e)=> setPassword(e.target.value)} type="password" required/>
        <label>Enter your password</label>
      </div>

      <button onClick={(e)=>handleRegister(e)} type="submit">Submit</button>
      <Link to={'/'}> <p>Login</p></Link>
    </form>
  </div>
      </>
        // <Form>
        // <Form.Group className="mb-3" controlId="formBasicEmail">
        //   <Form.Label>Name</Form.Label>
        //   <Form.Control onChange={(e)=>setName(e.target.value)} type="text" placeholder="Enter name" />
        // </Form.Group>

        // <Form.Group className="mb-3" controlId="formBasicEmail">
        //   <Form.Label>Email address</Form.Label>
        //   <Form.Control onChange={(e)=>setEmail(e.target.value)} type="email" placeholder="Enter email" />
        // </Form.Group>

        // <Form.Group className="mb-3" controlId="formBasicEmail">
        //   <Form.Label>Password</Form.Label>
        //   <Form.Control onChange={(e)=> setPassword(e.target.value)} type="password" placeholder="Enter password" />
        // </Form.Group>

        // <Button onClick={(e)=>handleRegister(e)} variant="primary" type="submit">
        // Submit
        // </Button>
        // </Form>
    )
}

export default Register