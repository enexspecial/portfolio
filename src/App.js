import React from "react";
import './App.css';
// import Routes &  Route from react-router-dom
import {Routes, Route } from "react-router-dom";
// import page containers
import Home from "./containers/home";
import Portfolio from "./containers/portfolio";
import About from "./containers/about";
import Resume from "./containers/resume";
import Contact from "./containers/contact";
import Skills from "./containers/skills";
// import components
import NavBar from "./components/navBar";

function App() {
  return (
    <div className="App">

      {/* particles js */}

      {/* Navbar component */}
      <NavBar/>
      {/* Main page content */}

        <Routes>
          {/* create all routes */}
          <Route path="/" index element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/portfolio" element={<Portfolio/>} />
          <Route path="/skills" element={<Skills/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/resume" element={<Resume/>} />
        </Routes>

    </div>
  );
}

export default App;
