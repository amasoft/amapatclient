// import React from 'react'
// import { useState } from 'react'
// import { Link, useLocation } from "react-router-dom"

// // import { Form } from 'react-bootstrap'
// import "./comment.css"
// import { useContext } from "react"
// import {Context} from "../../context/Context"
// import axios from "axios"
// function Comment({postdetails}) {
//     const location=useLocation()
//     const[name,setName]=useState("")
//     const[comment,setComment]=useState("")
//     const{user}=useContext(Context)
//     const path=location.pathname.split("/")[2]

//     const handleComment=(e)=>{

//         e.preventDefault()
//        const data={
//          name:name,
//          comment:comment,
//          postid:postdetails._id
//         //  postid:"292929292"
//         }
//         axios.post("http://localhost:5000/api/comments/",data)
//         //alert("alert clicked"+"post id"+postdetails._id+"post "+name+" comment"+comment)
//     }
//   return (
//     <div>
//       {/* <Form onSubmit={handleComment}>
//         <input type="text" placeholder="Enter Your Name"
//          onChange={(e)=>{
//             setName(e.target.value)
//         }}
//         />
//         <div className="writeFormGroup">
//             <textarea placeholder="Tell your story" type="text" className=""
//              onChange={(e)=>{
//                 setComment(e.target.value)
//             }}
//             ></textarea>
//         </div>
//         <button type="submit">Comment</button>
//       </Form> */}

//       <p>commentsssss</p>
//     </div>
//   )
// }

// export default Comment

import React from 'react'

export default function Comment() {
  return (
    <div>
      <p>commnetdvdv</p>
    </div>
  )
}
