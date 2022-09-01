import { useEffect } from "react"
import { useState } from "react"
import Header from "../../components/header/Header"
import Posts from "../../components/posts/Posts"
import Sidebar from "../../components/sidebar/Sidebar"
import React, { Component }  from 'react';

import "./home.css"
import Axios from 'axios'
import { useLocation } from "react-router-dom"
// import axios from 'axios'
export default function Home() {
  const [posts,setPosts]=useState([])
  const [nopost,setNopost]=useState(false)
  const {search}=useLocation();
      //alert("search"+search)
  useEffect(()=>{
    const fetchPosts=async ()=>{
      Axios.get("https://amapatapiv2.herokuapp.com/api/posts/"+search).then((data)=>{
        // Axios.get("http://localhost:5000/api/posts/"+search).then((data)=>{
          console.log(data)
       setPosts(data.data)
   if(data.data===""){
    setNopost(true)

   }
      }).catch((err=>{
        console.log("jet "+err)
        setNopost(true)
      }))
      }
      fetchPosts();
  },[search])
//  console.log(posts.length)

  return (
    <>
        <Header/>
       {
        nopost ?  <p style={{color:"red",textAlign:"center",marginTop:"30px"}}>NO POST</p>: ""
       }
        
      <div className="home">
     
       
      <Posts posts={posts}/>
        
       
        <Sidebar/>
        </div>
    </>
  )
}
