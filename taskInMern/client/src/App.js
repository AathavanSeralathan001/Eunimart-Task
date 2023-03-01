
import './App.css';
import {Route, Routes, Navigate} from 'react-router-dom'
import Main from './components/Main';
import Signup from './components/Signup';
import Login from './components/Login';
import Profile from './components/Display/Profile';

function App() {

  const user = localStorage.getItem("token")
  return (
    <Routes>
     { user && <Route path='/' exact element={<Main/>}/>}
     <Route path='/signup' exact element={<Signup/>}/>
     <Route path='/login' exact element={<Login/>}/>
     <Route path='/profile/:id' exact element={<Profile/>}/>
     <Route path='/' exact element={<Navigate replace to="/login"/>}/>
    </Routes>
  );
}

export default App;
