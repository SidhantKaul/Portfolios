import React from "react";
import Arr from "./projectArr";
function Project() {
  function func(elem) {
    console.log("RIO$HHIFIO$HF");
    return(
      <div className="flex-3-item">
        <div className="flex-4">
          <div className="flex-4-item">
            <img className="project-img" src={elem.img} alt="project-img"/>
          </div>
          <div className="flex-4-item right">
            <h4>{elem.name}</h4>
            <p>
            Technologies Used: <span className="ch-color">
            {elem.tech.map( (ele,index) => {
              if(index+1!==elem.tech.length)
              return ele+" , ";
              else
              return ele;
            })}
            </span>
            </p>
            <ul>
            {  elem.desc.map(ele => {
              return(
                <li>
                  {ele}
                </li>
              )
            })}
            </ul>
          </div>
        </div>
        <div className="links">
        <a className="project-link" href = {elem.live}>LIVE</a>
        <a className="project-link" href = {elem.repo}>REPO</a>
        </div>
      </div>
    );
  }
  return(
    <div id="project" className="about ">
    <h3>Projects</h3>
      <div className="flex-3">
    {  Arr.map(func)}
      </div>
    </div>
  );
}
export default Project;
