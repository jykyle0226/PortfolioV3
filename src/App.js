import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Component/Nav";
import Top from "./Component/Top";
import ContactForm from "./Component/ContactForm";
import Projects from "./Component/Projects";

import React, { useState, useEffect } from "react";
import { SliderData } from "./SliderData";



function App() {



  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(true);

  const updateWidth = () => {
    const width = window.innerWidth;
    const widthLimit = 576;
    const isMobile = width <= widthLimit;
    const wasMobile = previousWidth <= widthLimit;

    if (isMobile !== wasMobile) {
      setIsOpen(!isMobile);
    }

    previousWidth = width;
  };

  let previousWidth = -1;

  useEffect(() => {
    updateWidth();
    window.addEventListener("resize", updateWidth);

    return () => {
      window.removeEventListener("resize", updateWidth);
    };
  }, []);

  const toggle = () => {
    setIsOpen((prevState) => !prevState);
  };
  
  return (
    <div className="App">
      <div>
        <div className="div1">
          <div className="div2Left">
            <Navbar className='navbarcomp'></Navbar>
          </div>
          <div className="div2Right">
            <Top></Top>
            <Projects slides={SliderData}></Projects>
            <ContactForm></ContactForm>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
