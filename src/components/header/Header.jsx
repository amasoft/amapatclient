import "./header.css"
import React, { Component }  from 'react';

export default function Header() {
  return (
    // <div className='header'>
    //     <div className="headerTitles">
    //         {/* <span className="headerTitlesSm">React & node</span>
    //         <span className="headerTitlesLg">Blog</span> */}
    //     </div>
    //     <img className="headerImg" src={require('../assets/work2.webp')} alt=""/>
    // </div>
    <div>
    <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
    <div class="carousel-inner">
      <div class="carousel-item active">
        <img src={require('./img/bg-1.jpg')} class="d-block w-100 "  alt="..."/>
      </div>
      <div class="carousel-item">
      <img src={require('./img/bg-2.jpg')} class="d-block w-100"  alt="..."/>
      </div>
      <div class="carousel-item">
      <img src={require('./img/bg-3.jpg')} class="d-block w-100"  alt="..."/>
      </div>
    </div>
    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>
  </div>
  )
}
