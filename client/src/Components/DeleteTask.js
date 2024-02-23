import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useDispatch } from 'react-redux';
import { deleteTask } from '../Redux/Actions/TaskActions';

const DeleteTask=({el})=>{
   
    const dispatch = useDispatch()

    
  

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    
  
    return (
      <>
        {/* <Button variant="danger" onClick={handleShow}>
          Delete Task
        </Button> */}
        <button onClick={handleShow} className="border-0 btn-transition btn btn-outline-danger">
                         <i className="fa fa-trash"></i>
                         
                        </button>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>Woohoo, you are reading this text in a modal!</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={()=>{dispatch(deleteTask(el._id));handleClose()}}>
              Confirm
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
}

export default DeleteTask