import "./post.css"
import {Link} from "react-router-dom"
import Comment from "../comments/Comment"
import React, { Component }  from 'react';

export default function Post({post}) {
  // const PF="http://localhost:5000/images/"
  const PF="https://amapatapiv2.herokuapp.com/images/"
  return (
    // <>
          <div class="col-md-6 col-lg-4">
                    <div class="card mb-3">
                        <div class="card-header">
                        {post.title}
                          </div>
                          <img src={require('../assets/img/vid-1.png')} class="card-img-top" alt="..."/>
                        <div class="card-body">
                          <p class="card-text">What is Coding Money? 3 Ways of Making Money</p>
                          <div class="row mb-4">
                            <div class="col">
                                <a href="#" class="text-primary">2 minutes ago</a>
                            </div>
                            <div class="col justify-content-end">
                                <a href="#" class="d-flex justify-content-end ">Read more</a>
                            </div>
                          </div>

                          <div class="row mb-0">
                           
                            <div class="col justify-content-between">
                               <span> 
                                <a href="#" class="text-primary"><i class="fab fa-facebook-f"></i></a>
                                <span> <a href="#" class="text-primary"><i class="fab fa-twitter"></i></a></span>
                                <span> <a href="#" class="text-primary"><i class="fab fa-whatsapp"></i></a></span>
                            </span>
                            </div>
                            
                            <div class="col justify-content-end">
                                <a href="#" class="d-flex justify-content-end ">2 comment</a>
                            </div>
                          </div>
                        </div>
                      </div>      
                </div>
                
  )
}
