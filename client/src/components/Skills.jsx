import React from "react";
import Arr from "./array"
console.log(Arr);
function Skills() {
  function func1(elem,index) {
    console.log(elem.img);
    return(
      <div className="grid-item" style={{justifySelf:"centre"}}>
      <div className="inside-grid">
      <img className="skill-img" src={elem.img} alt="img"/>
      <p>{elem.name}</p>
      </div>
      </div>
    );
  }
  return(
    <div id="skills" className="skills about">
     <h3>SKILLS</h3>
     <div className="grid">
     {Arr.map(func1)}
     </div>
     </div>
  );
}
export default Skills;
