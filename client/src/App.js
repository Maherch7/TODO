import { Route, Routes } from 'react-router-dom';
import './App.css';
import NavUser from './Components/NavUser';
import Home from './Components/Home';
import Profil from './Components/Profil';
import Login from './Components/Login';
import Register from './Components/Register';
import PrivateRoute from './Components/PrivateRoute';
import HandleError from './Components/HandleError';
import EditProfil from './Components/EditProfil';
import ListUser from './Components/ListUser';
import ProfilUser from './Components/ProfilUser';
import ListTasks from './Components/ListTasks';
import { useDispatch, useSelector } from 'react-redux';
import { current } from './Redux/Actions/AuthActions';
import { useEffect } from 'react';

function App() {
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(current())
},[])
  const token = localStorage.getItem('token')
  const user = useSelector(state => state.AuthReducer.user)
  return (
    <div>
      {
        user && token &&
        <NavUser/>
      }
    
      <HandleError/>
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/Profil' element={<PrivateRoute><Profil/></PrivateRoute>}/>
        // <Route path='/Login' element={<Login/>}/>
        <Route path='/Register' element={<Register/>}/>
        <Route path='/EditProfil' element={<EditProfil/>}/>
        <Route path='/ListUser' element={<ListUser/>}/>
        <Route path='/ProfilUser/:id' element={<ProfilUser/>}/>
      </Routes>
    </div>
  );
}

export default App;
