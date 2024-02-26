import React from "react";
import netflixImage from '../public/images/netflix.png';
import cartImage from '../public/images/cart.jpg';


function Netflix() {
  return (
    <div>
      <p>
        Back-end : <b>Nill</b> <br />
        API used : <b>TMDB</b> <br />
        FrameWorks : <b>ReactJS</b>
        <br />
        Front-end : <b>React,Css,Javascript</b> <br />
      </p>
    </div>
  );
}
export default Netflix;

export const projects = [
  {
    name: "E-commerce",
    img: cartImage,
    link: "https://maxcart.onrender.com/",
    github: "",
    desp:Netflix,
  },
  {
    name: "Netflix Clone",
    img: netflixImage,
    link: "https://richardshaju.github.io/netflix/",
    github: "https://github.com/richardshaju/netflix",
    desp:Netflix,
  },
  
];
