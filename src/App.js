import './App.css';
import TopBar from './components/topbar/TopBar';
import Home from './pages/Home/Home';
import Single from './pages/single/Single';
import Write from './pages/write/Write';
import Settings from './pages/settings/Settings';
import Login from './components/login/Login';
import Register from './components/register/Register';
import React, { Component }  from 'react';


import {
  BrowserRouter as Router,
  Routes,
  Switch,
  Route,
} from "react-router-dom";
import SinglePost from './components/singlePost/SinglePost';
import { useContext } from 'react';
import { Context } from './context/Context';
import Check from './pages/Check';
function App() {
  // const {user}=useContext(Context);
  return (
    <Router> 
      {/* <TopBar/> */}
      <Check/>
     <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/post/:id" element={<Single/>}/>
    <Route path="/cat/:id" element={<Single/>}/>
    //  <Route path="/write" element={<Write/>}/>

      {/* <Route path="/login" element={user?<Home/>:<Login/>}/>
    //  <Route path="/register" element={user ?<Home/>:<Register/>}/>
    //  <Route path="/settings" element={user?<Settings/>:<Register/>}/>
    //  <Route path="/write" element={user?<Write/>:<Register/>}/>
    //  <Route path="/post/:id" element={<Single/>}/> */}

     </Routes>
      </Router>
    // <p>AMADI</p>
  );
}

export default App;
