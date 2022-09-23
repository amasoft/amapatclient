import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import {
  FacebookShareButton,
  TwitterIcon,
  TwitterShareButton,
  FacebookIcon,
  WhatsappShareButton,
  WhatsappIcon,
} from "react-share";
// import {FacebookIcon,WhatsappIcon} from "react-share"
// import Form from 'react-bootstrap/Form';
// import Form from "react-bootstrap/Form";
import Comment from "../comments/Comment";
import "./comment.css";

import "./singlePost.css";
import axios from "axios";
import React, { Component } from "react";

import { useContext } from "react";
import { Context } from "../../context/Context";
export default function SinglePost() {
  const location = useLocation();
  console.log(location);
  const path = location.pathname.split("/")[2];
  console.log("url " + path);
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
  const [Nocomment, setNocomment] = useState();

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
          //display("comments", response.data.data);
          setComments(response.data.data);
          setNocomment(Object.keys(response.data.data).length);
        });
    };
    console.log("comments useffect");
    getPostComments();
  }, []);

  const submitComment = async (e) => {
    e.preventDefault();
    const newcomments = {
      name: Name,
      comment: usercomments,
      postid: post._id,
    };

    // const addComments=await axios.post("http://localhost:5000/api/comments/",newcomments)
    const addComments = await axios.post(
      "https://amapatapiv2.herokuapp.com/api/comments/",
      newcomments
    );

    console.log("added response" + JSON.stringify(addComments));
    alert("comment added " + getemail + " " + usercomments + post._id);
  };

  useEffect(() => {
    const getPost = async () => {
      // const res = await axios.get("http://localhost:5000/api/posts/" + path);
      const res = await axios.get(
        "https://amapatapiv2.herokuapp.com/api/posts/" + path
      );
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
    <div class="container mt-4">
      <div class="row">
        <div class="col-lg-10">
          <div class="card">
            <div class="card-header">
            {title}
            </div>
            <div class="card-body">
              {post.photo && (
                <img
                  // s rc={require('../assets/work2.webp')}
                  src={PF + post.photo}
                  alt=""
                  class="card-img-top"
                />
              )}{" "}
              <div class="row mt-4">
                <div class="col">
                  <a href="#" class="text-primary">
                    Author:{`${post.username}`}
                  </a>
                </div>
                <div class="col justify-content-end">
                  <a href="#" class="d-flex justify-content-end ">
                  {new Date(post.createdAt).toDateString()}
                  </a>
                </div>
              </div>
              <p class="card-text mt-2">
               {desc}
              </p>
              <div class="row">
                <div class="col justify-content-between">
                  <span>
                    {/* <a href="#" class="text-primary">
                      <i class="fab fa-facebook-f"></i>
                    </a> */}
                    <FacebookShareButton
              url="https://amatecblog.herokuapp.com/post/62dd60d80f4fcd50ec25b2c8"
              quote={title}
            >
              <FacebookIcon logofillcolor="white" style={{width:35}} round={true}></FacebookIcon>
            </FacebookShareButton>
            <WhatsappShareButton  url="facebook.com" title={title}>
             <WhatsappIcon
              logofillcolor="white" round={true} style={{width:35,marginLeft:10}}
              >

              </WhatsappIcon>
            </WhatsappShareButton> 
                    <span>
                      <a href="#" class="text-primary">
                        <i class="fab fa-whatsapp"></i>
                      </a>
                    </span>
                  </span>
                </div>
                <div class="col d-flex justify-content-end">
                  <span>
                    <a href="#" class=" text-primary">
                    {Nocomment}  Comments
                    </a>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
