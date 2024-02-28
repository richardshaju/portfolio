import React from "react";
import netflixImage from '../public/images/netflix.png';
import cartImage from '../public/images/cart.jpg';
import ticImage from '../public/images/tic.jpg';
import olxImage from '../public/images/olx.jpg';
import carImage from '../public/images/car.jpg';
import weekImage from '../public/images/week.jpg';
import irImage from '../public/images/ir.jpg';
import portFolio from '../public/images/portfolio.jpg';


export function Cart() {
  return (
    <div>
     <p style={{ paddingTop: "0.6rem" }} >
            Back-end : <b>NodeJS</b> <br />
            Data Base : <b>MongoDB</b> <br />
            Front-end : <b>Html,Css,Javascript</b> <br />
            FrameWorks : <b>Handlebars,ExpressJS,Bootstrap</b>{" "}
          </p>
    </div>
  );
}
export function Netflix() {
  return (
    <div>
      <p style={{ paddingTop: "0.6rem" }}>
        Back-end : <b>Nill</b> <br />
        API used : <b>TMDB</b> <br />
        FrameWorks : <b>ReactJS</b>
        <br />
        Front-end : <b>React,Css,Javascript</b> <br />
      </p>
    </div>
  );
}
export function OlxClone() {
  return (
    <div>
      <p style={{ paddingTop: "0.6rem" }}>
            Front-end : <b>React JS</b> <br />
            Back-end : <b>Firebase</b>
          </p>
    </div>
  )
}
export function TicTacToe() {
  return (
    <div>
     <p style={{ paddingTop: "0.6rem" }}>
            FrameWorks : <b>React JS</b>
            <br />
            Algorithm: <b>Minimax</b> <br />
            Feature: <b>You can't win</b> <br />
            Front-end : <b>Html,Css,Javascript</b> <br />
          </p>
    </div>
  )
}
export function CarPrice() {
  return (
    <div>
     <p style={{ paddingTop: "0.6rem" }}>
            Web server : <b>Nginx</b>
            <br />
            Back-end : <b>Flask</b> <br />
            Cloud : <b>AWS</b> <br />
            Front-end : <b>Html, Css, Js</b> <br />
            ML Algorithm : <b>LinearRegression</b>
          </p>
    </div>
  )
}
export function Weekend() {
  return (
    <div>
     <p style={{ paddingTop: "0.6rem" }}>
            Front-end : <b>Html,Css,Javascript</b>{" "}
          </p>
    </div>
  )
}
export function ImageRec() {
  return (
    <div>
   <p style={{ paddingTop: "0.6rem" }}>
            Front-end : <b>Html, Css, Js</b> <br />
            Web server : <b>Nginx</b>
            <br />
            Back-end : <b>Flask</b> <br />
            Cloud : <b>AWS</b> <br />
            ML Algorithm : <b>Support Vector Machine</b>
          </p>
    </div>
  )
}
export function Portfolio() {
  return (
    <div>
   <p style={{ paddingTop: "0.6rem" }}>
            Front-end : <b>Next.js</b> <br />
            Library : <b>Tailwind, Aceternity</b>
            <br />
          </p>
    </div>
  )
}




export const projects = [
  {
    name: "E-commerce",
    img: cartImage,
    link: "https://maxcart.onrender.com/",
    github: "",
    desp:Cart,
  },
  {
    name: "Netflix Clone",
    img: netflixImage,
    link: "https://richardshaju.github.io/netflix/",
    github: "https://github.com/richardshaju/netflix",
    desp:Netflix,
  },
  {
    name: "Olx Clone",
    img: olxImage,
    link: "https://richardshaju.github.io/olx-clone/",
    github: "https://github.com/richardshaju/olx-clone",
    desp:OlxClone,
  },
  {
    name: "Tic Tac Toe",
    img: ticImage,
    link: "https://richardshaju.github.io/tictactoe/",
    github: "https://github.com/richardshaju/tictactoe",
    desp:TicTacToe,
  },
  {
    name: "Used car price predictor",
    img: carImage,
    link: "http://ec2-16-16-209-112.eu-north-1.compute.amazonaws.com/",
    github: "https://github.com/richardshaju/used_car_price",
    desp:CarPrice,
  },
  {
    name: "Weeknd Music Player",
    img: weekImage,
    link: "https://richardshaju.github.io/weeknd/",
    github: "https://github.com/richardshaju/weeknd",
    desp:Weekend,
  },
  
  {
    name: "Image Recognizer",
    img: irImage,
    link: "http://ec2-13-48-45-183.eu-north-1.compute.amazonaws.com/",
    github: "https://github.com/richardshaju/Image-recognizer",
    desp:ImageRec,
  },
  
  {
    name: "Portfolio",
    img: portFolio,
    link: "https://richard.is-a.dev/",
    github: "https://github.com/richardshaju",
    desp:Portfolio,
  },
  
];
