import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import{FacebookShareButton,TwitterIcon,TwitterShareButton,FacebookIcon,WhatsappShareButton,WhatsappIcon} from "react-share"
// import {FacebookIcon,WhatsappIcon} from "react-share"
// import Form from 'react-bootstrap/Form';
// import Form from "react-bootstrap/Form";
import Comment from "../comments/Comment";
import "./comment.css";

import "./singlePost.css";
import axios from "axios";
import React, { Component }  from 'react';

import { useContext } from "react";
import { Context } from "../../context/Context";
export default function SinglePost() {
  const location = useLocation();
  console.log(location);
  const path = location.pathname.split("/")[2];
  console.log("url "+path);
  const [post, setPost] = useState({});
  const PF = "https://amapatapiv2.herokuapp.com/images/";
  const { user } = useContext(Context);
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [comments, setComments] = useState([]);
  const [updateMood, setUpdateMood] = useState(false);
  //get comments details from users
  const [getemail, setEmail] = useState("");
  const [usercomments, setusercomments] = useState("");
  const [Name, setName] = useState("");
  //to get total comments
  const[Nocomment,setNocomment]=useState()
  

  useEffect(() => {
    const getPostComments = async () => {
      await axios
      // .get("http://localhost:5000/api/comments/", {
        .get("https://amapatapiv2.herokuapp.com/api/comments/", {
        params: {
            postid: path,
          },
        })
        .then((response) => {
          console.log("res+ " + JSON.stringify(response.data.data));
          display("comments", response.data.data);
          setComments(response.data.data);
          setNocomment(Object.keys(response.data.data).length)
        });
    };
    console.log("comments useffect");
    getPostComments();
  }, []);

  const submitComment = async (e) => {
    e.preventDefault();
    const newcomments={
      name:Name,
      comment:usercomments,
      postid:post._id
    }

    // const addComments=await axios.post("http://localhost:5000/api/comments/",newcomments)
    const addComments=await axios.post("https://amapatapiv2.herokuapp.com/api/comments/",newcomments)

    console.log("added response"+JSON.stringify(addComments))
    alert("comment added " + getemail + " " + usercomments+post._id);
  };

  useEffect(() => {
    const getPost = async () => {
      // const res = await axios.get("http://localhost:5000/api/posts/" + path);
      const res = await axios.get("https://amapatapiv2.herokuapp.com/api/posts/" + path);
      setPost(res.data);
      setTitle(res.data.title);
      setDesc(res.data.desc);
      // console.log(res)
    };
    getPost();
  }, [path]);
  //get comments

  const handleDelete = async () => {
    console.log("user" + user.username);
    try {
      await axios
        .delete(`http://localhost:5000/api/posts/${path}`, {
          data: {
            username: user.username,
            id: "ama",
          },
        })
        .then((res) => {
          console.log("detailsy" + " " + res);
        });
      window.location.replace("/");
    } catch (error) {
      console.log("deel" + error);
    }
  };
 
  const handleUpdate = async () => {
    try {
      await axios
        .put(`http://localhost:5000/api/posts/${post._id}`, {
          //data:{
          username: user.username,
          title: title,
          desc: desc,
          //  }
        })
        .then((res) => {
          console.log("detailsy" + " " + res);
        });
      // window.location.reload()
      setUpdateMood(false);
    } catch (error) {
      console.log("deel" + error);
    }
  };
  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        {/* /if there is ost image
         */}
        {post.photo && (
          <img
            // s rc={require('../assets/work2.webp')}
            src={PF + post.photo}
            alt=""
            className="singlePostImg"
          />
        )}
        {updateMood ? (
          <input
            type="text"
            value={title}
            className="singlePostTitleInput"
            autoFocus
            onChange={(e) => setTitle(e.target.value)}
          />
        ) : (
          <h1 className="singlePostTitle">
            {/* {title}
            {post.username === user?.username && (
              <div className="singlePostEdit">
                <i
                  className="singlePostIcon fa fa-edit"
                  onClick={() => {
                    setUpdateMood(true);
                  }}
                ></i>
                <i
                  className="singlePostIcon fa fa-trash-alt"
                  onClick={handleDelete}
                ></i>
              </div>
            )} */}
          </h1>
        )}
        <div className="singlePostInfo">
          <span className="singlePostAuthor">
            Author:
            <Link to={`/?user=${post.username}`} className="link">
              <b>{post.username}</b>
            </Link>
          </span>
          <span className="singlePostDate">
            {new Date(post.createdAt).toDateString()}
          </span>
        </div>
        {updateMood ? (
          <textarea
            className="singlePostDescInput"
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
          />
        ) : (
          <p className="singlePostDesc">{desc}</p>
        )}

        {updateMood && (
          <button className="singlePostButton" onClick={handleUpdate}>
            update
          </button>
        )}
        <div className="sharepostcontainer">
          <span>{Nocomment}Comments</span>
          <FacebookShareButton url="https://amatecblog.herokuapp.com/post/62dd60d80f4fcd50ec25b2c8"
          quote={title}
          >
<FacebookIcon logofillcolor='white' round={true}></FacebookIcon>
          </FacebookShareButton>
          <WhatsappShareButton  url="https://amatecblog.herokuapp.com/post/62dd60d80f4fcd50ec25b2c8" title={title}>
            <WhatsappIcon
            logofillcolor="white" round={true}
            >

            </WhatsappIcon>
          </WhatsappShareButton>
          {
          
          /* <FacebookShareButton url="localhost:3001/post/62dd60d80f4fcd50ec25b2c8"
          quote={title}
          >
<FacebookIcon logofillcolor='white' round={true}></FacebookIcon>
          </FacebookShareButton>
          <WhatsappShareButton  url="facebook.com" title={title}>
            <WhatsappIcon
            logofillcolor="white" round={true}
            >

            </WhatsappIcon>
          </WhatsappShareButton> */}
        </div>
      </div>
      <Form class="container" onSubmit={submitComment }>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder="Please enter your name" onChange={(e) => {setName(e.target.value);}}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Please enter your email" onChange={(e) => {setEmail(e.target.value); }}/>
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>
      <Form.Control
          as="textarea"
          placeholder="Leave a comment here"
          style={{ height: '100px' }}
          onChange={(e) => {
            setusercomments(e.target.value);
          }}
        />
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
      {comments.map((comment) => {
        return (
          <div>
            <h2>{comment.name}</h2>
            <p>{comment.comment}</p>
          </div>

          // <hi>{comment.name}</h2>
        );
      })}
    </div>
  );
}

const display = (message, infor) => {
  console.log("message :" + message + ", data" + JSON.stringify(infor));
  // console.log("message :"+message+", data"+infor)
};

// import React from 'react'

// export default function SinglePost() {
//   return (
//     <div>
//       <p>sinnnnnn</p>
//     </div>
//   )
// }
