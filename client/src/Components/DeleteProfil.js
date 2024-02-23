import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { current, deleteUser } from '../Redux/Actions/AuthActions';
import { useDispatch, useSelector } from 'react-redux';

const DeleteProfil=({id})=>{
   
    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(current())
    },[])
    const user = useSelector(state=> state.AuthReducer.user)

    const navigate = useNavigate()
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const location = useLocation()
    console.log(location)
    const idToDelete = location.pathname == '/Profil' ? user._id : id
  
    return (
      <>
        <Button variant="danger" onClick={handleShow} style={{width:"142px"}}>
        <i class="fa-solid fa-user-minus"></i> Delete Profil
        </Button>
  
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Delete Profil</Modal.Title>
          </Modal.Header>
          <Modal.Body>Are you sure you want to delete your profile?</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={()=>{dispatch(deleteUser(idToDelete,navigate,location));handleClose()}}>
              Confirm
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
}

export default DeleteProfil