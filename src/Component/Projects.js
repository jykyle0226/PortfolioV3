import React, { useState } from "react";
import { SliderData } from "../SliderData";
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa";
import "../App.css";

const Projects = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }
  return (
    <section className="slider">
      <FaArrowAltCircleLeft className="left-arrow" onClick={prevSlide} />
      <FaArrowAltCircleRight className="right-arrow" onClick={nextSlide} />
      {SliderData.map((slide, index) => {
        return (
          <div>
            <div className="projectcomp">
              <div
                className={index === current ? "slide active" : "slide"}
                key={index}
              >
                {index === current && (
                  <img src={slide.image} alt="image" className="image" />
                  
                )}
                
              </div>
            </div>
            <div>
            <div
                className={index === current ? "slide active" : "slide"}
                key={index}
              >
                {index === current && (
                  <div className="projectName">{slide.name}</div>
                )}
              </div>
            </div>
          </div>
          
        );
      })}
    </section>
  );
};

export default Projects;
