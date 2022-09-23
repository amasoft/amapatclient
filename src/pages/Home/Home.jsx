import { useEffect } from "react";
import { useState } from "react";
import Header from "../../components/header/Header";
import Posts from "../../components/posts/Posts";
import Sidebar from "../../components/sidebar/Sidebar";
import React, { Component } from "react";
import {Link} from "react-router-dom"

import "./home.css";
import Axios from "axios";
import { useLocation } from "react-router-dom";
// import axios from 'axios'
export default function Home() {
  const [posts, setPosts] = useState([]);
  const [nopost, setNopost] = useState(false);
  const { search } = useLocation();
  //alert("search"+search)
  useEffect(() => {
    const fetchPosts = async () => {
      Axios.get("https://amapatapiv2.herokuapp.com/api/posts/" + search)
        .then((data) => {
          // Axios.get("http://localhost:5000/api/posts/"+search).then((data)=>{
          console.log(data);
          setPosts(data.data);
          if (data.data === "") {
            setNopost(true);
          }
        })
        .catch((err) => {
          console.log("jet " + err);
          setNopost(true);
        });
    };
    fetchPosts();
  }, [search]);
  //  console.log(posts.length)
  return (
    <>
      {/* <Header/> */}
      {nopost ? (
        <p style={{ color: "red", textAlign: "center", marginTop: "30px" }}>
          NO POST
        </p>
      ) : (
        ""
      )}

      {/* <Sidebar/> */}
      {/* </div> */}
      <div class="container-fluid">
        <div class="row">
          {/* <!-- //post section starts--> */}
          <div class="col-lg-9">
            <div class="container pt-4">
              <div class="row pt-4">
                {posts.map((post) => {
                  return (
                    <div class="col-md-6 col-lg-4">
                      <div class="card mb-3">
                      <Link to={`/post/${post._id}`} className="link">
                        <div class="card-header">
                          {post.title}
                        </div>                       
                          <img src={require('../../components/assets/img/vid-1.png')} class="card-img-top" alt="..."/>
                        <div class="card-body">
                          <p class="card-text" id="postde">
                          {post.desc}
                          </p>
                          <div class="row mb-4">
                            <div class="col">
                              <a href="#" class="text-primary">
                                2 minutes ago
                              </a>
                            </div>
                            <div class="col justify-content-end">
                              <a href="#" class="d-flex justify-content-end ">
                                Read more
                              </a>
                            </div>
                          </div>

                          <div class="row mb-0">
                            <div class="col justify-content-between">
                              <span>
                                <a href="#" class="text-primary">
                                  <i class="fab fa-facebook-f"></i>
                                </a>
                                <span>
                                  {" "}
                                  <a href="#" class="text-primary">
                                    <i class="fab fa-twitter"></i>
                                  </a>
                                </span>
                                <span>
                                  {" "}
                                  <a href="#" class="text-primary">
                                    <i class="fab fa-whatsapp"></i>
                                  </a>
                                </span>
                              </span>
                            </div>

                            <div class="col justify-content-end">
                              <a href="#" class="d-flex justify-content-end ">
                                2 comment
                              </a>
                            </div>
                          </div>
                        </div>
                        </Link>
                      </div>
                    </div>
                  );
                  
                })}
              </div>
            </div>
          </div>
          {/* <!-- //post section ends--> */}

          <div class="col-lg-4">
            {/* <Sidebar/> */}
          </div>
        </div>
      </div>
    </>
  );
}
