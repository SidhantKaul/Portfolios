import React from "react";
import IMG from "../sidhant.jpeg";
import PDF from "../resume.pdf"
import Button from 'react-bootstrap/Button'
function Header() {
return(
  <div id="home" className="header">
  <div className="flexbox">
    <div className="my-img flex-item"><img className="every-img" src={IMG} alt="Sidhant Kaul" /></div>
    <div className="flex-item myself">
      <div className="salutation">
        <p>HI THERE! I'M</p>
      </div>
      <div className="name">
        <h1><span className="ch-color">SIDHANT</span> KAUL</h1>
      </div>
      <div className="desc">
        <p>A <span className="ch-color">Full Stack</span> Web Developer passionate about creating interactive applications and experiences on the web.</p>
      </div>
      <div className="flex-2">
        <div className="flex-item res-btn"><Button href={PDF} style={{backgroundColor:"#8444df",color:"white",padding:"10px 40px 10px 40px"}} variant="this-btn rounded-pill">Resume</Button>{' '}</div>
        <div className="flex-item">
          <div className="social"><a href="https://www.linkedin.com/in/sidhant-kaul-203030179/"><i class="fab fa-linkedin-in"></i></a></div>
        </div>
        <div className="flex-item">
          <div className="social"><a href="https://github.com/SidhantKaul"><i class="fab fa-github"></i></a></div>
        </div>
      </div>
    </div>
  </div>
  </div>
);
}
export default Header;
