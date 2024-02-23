import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import {useDispatch} from 'react-redux'
import { editTask } from '../Redux/Actions/TaskActions';
const  EditTask=({el})=>{

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [description,setDescription] = useState(el.description)
  const dispatch = useDispatch()
  const handleEdit=(e)=>{
    e.preventDefault()
    dispatch(editTask(el._id, {description}))
    handleClose()
  }
  return (
    <>
      {/* <Button variant="primary" >
        Edit
      </Button> */}

      <button onClick={handleShow} className="border-0 btn-transition btn btn-outline-warning">
                       <i class="fa-solid fa-pen-to-square"></i>
                      </button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form>
       

        <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Description</Form.Label>
            <Form.Control value={description} onChange={(e)=> setDescription(e.target.value)} type="text" placeholder="Description" />
        </Form.Group>
      
        </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={(e)=>handleEdit(e)}>
            Confirm
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default EditTask;