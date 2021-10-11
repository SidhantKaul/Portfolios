import React from "react";
import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';

// Be sure to include styles at some point, probably during your bootstraping
import '@trendmicro/react-sidenav/dist/react-sidenav.css';
function Sidebar() {

  return(
    <SideNav
    style={{backgroundColor:"#8444df",position:"fixed"}}
    onSelect={(selected) => {
        // Add your code here
    }}
>
    <SideNav.Toggle />
    <SideNav.Nav defaultSelected="home">

      <NavItem eventKey="home" style={{margin:"25px 0"}}>
           <NavIcon>
            <a className="links" href="#home">   <i className="fa fa-fw fa-home" style={{ fontSize: '1.75em' }} /> </a>
            </NavIcon>
            <NavText>
          <a className="links" href="#home">  HOME </a>
            </NavText>
        </NavItem>

        <NavItem eventKey="about" style={{margin:"25px 0"}}>
            <NavIcon>
            <a className="links" href="#about">    <i className="far fa-user" style={{ fontSize: '1.75em' }} /></a>
            </NavIcon>
            <NavText>
            <a className="links" href="#about">     ABOUT</a>
            </NavText>
        </NavItem>
        <NavItem eventKey="skills" style={{margin:"25px 0"}}>
            <NavIcon>
            <a className="links" href="#skills">    <i className="fas fa-laptop-code" style={{ fontSize: '1.75em' }} /></a>
            </NavIcon>
            <NavText>
              <a className="links" href="#skills">  SKILLS</a>
            </NavText>
        </NavItem>
        <NavItem eventKey="works" style={{margin:"25px 0"}}>
            <NavIcon>
              <a className="links" href="#project">  <i className="fas fa-briefcase" style={{ fontSize: '1.75em' }} /></a>
            </NavIcon>
            <NavText>
            <a className="links" href="#project">    WORKS</a>
            </NavText>
        </NavItem>
        <NavItem eventKey="contact" style={{margin:"25px 0"}}>
            <NavIcon>
            <a className="links" href="#contact">    <i className="fas fa-phone-alt" style={{ fontSize: '1.75em' }} /></a>
            </NavIcon>
            <NavText>
            <a className="links" href="#contact">    CONTACT </a>
            </NavText>
        </NavItem>
    </SideNav.Nav>
</SideNav>
  );
}
export default Sidebar;
