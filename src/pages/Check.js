// import React from 'react'
import React, { useContext } from 'react'

import { Link } from 'react-router-dom'
import { Context } from '../context/Context';

export default function Check(){
  const user=false;
  const PF = "http://localhost:5000/images/"
  // const {user,dispatch}=useContext(Context);

  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container">
      <a class="navbar-brand fs-4 text-primary" href="#">AmaTech</a>
     
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item d-flex justify-content-between">
          <form class="d-flex ">
        <input class="form-control" type="search" placeholder="Search" aria-label="Search"/>
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
          </li>
            <li class="nav-item">
            {/* <li className='toplistitem'><Link className='link' to="/">HOME</Link></li> */}
            <Link className='nav-link' to="/">Home</Link>
              </li>
              <li class="nav-item">
              <Link className='nav-link' to="/Contactus">Contact Us</Link>
          </li>
          
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Categories
            </a>
            <ul class="dropdown-menu " aria-labelledby="navbarDropdownMenuLink">
              <li><a class="dropdown-item" href="#">Tech</a></li>
              <li><a class="dropdown-item" href="#">Health Living</a></li>
            </ul>
          </li>
          { 
          user?(<li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Admin
          </a>
          <ul class="dropdown-menu " aria-labelledby="navbarDropdownMenuLink">
            <li><a class="dropdown-item" href="#">Create Post</a></li>
            <li><a class="dropdown-item" href="#">Login</a></li>
          </ul>
        </li>
          ):(
            ""
          )
          }
          
          <li class="nav-item">
            
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#"><i class="fab fa-facebook-f"></i></a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#"><i class="fab fa-twitter"></i></a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#"><i class="fab fa-whatsapp"></i></a>
          </li>
          <li class="nav-item">
            {/* <li className='toplistitem'><Link className='link' to="/">HOME</Link></li> */}
            <Link className='nav-link' to="/">
           {
            user?(
            <img  
            src={PF+user.profilePic}
            className='nav-link' alt='progfile'
       />             
            ):(
              ""
            )
           }
            
              </Link>
              </li>
          {/* <li class="nav-item dropdown"> */}
        
            {/* <Link className='nav-link 'id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">Admin</Link> */}
          {/* </li> */}
        </ul>
      </div>
    </div>
  </nav>

    </div>
  )
}

// export default check
