import React from "react";
import img1 from "../fitness.png";
import img2 from "../social.png";
import img3 from "../ip.png";
import img4 from "../weather.png";
import img5 from "../chats.png";
const arr = [
  {
    img:img1,
    name:"Track-Fit",
    tech:["React","Node.js","mongoDB","OAuth"],
    desc:["Completely built with hooks and functional components","Stores data of every user indivisually","monitor your routine for past dates"],
    live:"https://ip-tracker-apps.onrender.com/",
    repo:"https://github.com/SidhantKaul/Fitness-Tracker"
  },
  {
    img:img2,
    name:"Social media",
    tech:["React","Node.js","mongoDB"],
    desc:["Login using Google OAuth","Add friend","Comment and Like on posts","Pagination","View your own profile"],
    live:"https://socialmedia-ezud.onrender.com/",
    repo:"https://github.com/SidhantKaul/social-media"
  },
  {
    img:img3,
    name:"IP-Tracker",
    tech:["Node.js","EJS","Abstract API"],
    desc:["Tracks given IP address","Shows real time position","Map with both street and satellite view"],
    live:"https://secure-coast-28794.herokuapp.com/",
    repo:"https://github.com/SidhantKaul/IPtracker"
  },
  {
    img:img4,
    name:"Weather-Watch",
    tech:["React","openWeatherMap"],
    desc:["built with hooks and functional components","shows weather of user's location without searching"],
    live:"https://sidhantkaul.github.io/WeatherApp/",
    repo:"https://github.com/SidhantKaul/WeatherApp"
  },
  {
    img:img5,
    name:"Chats-App",
    tech:["Node.js","mongoDB","socket.io","React"],
    desc:["chat on more than one channel","live time chat","load previous chats from database"],
    live:"https://chats-app-ieiw.onrender.com/",
    repo:"https://github.com/SidhantKaul/chat-app"
  }
]
export default arr;
