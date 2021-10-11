import React from "react";
import Sidebar from "./Sidebar.jsx";
import Header from "./Header.jsx"
import AboutMe from "./AboutMe.jsx"
import Skills from "./Skills";
import Project from "./projects"
import Contact from "./Contact"
import Footer from "./footer"
function App() {
  return (
    <div className="App">
    <Sidebar />
    <Header />
    <AboutMe/>
    <Skills />
    <Project />
    <Contact />
    <Footer />
    </div>
  );
}

export default App;
