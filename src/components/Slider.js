import React from "react";
import { Carousel } from "react-bootstrap";
import img1 from "../img/testSlider4.jpg";
import img2 from "../img/testSlider3.jpg";
import img3 from "../img/testSlider2.jpg";
import img4 from "../img/testSlider.jpg";
import comboImg from '../img/combo.jpg'

const Slider = () => {
  return (
      <div id="slider">
      <Carousel>
        <Carousel.Item>
          <img className="d-block w-100" src={img3} alt="Second slide" style={{objectFit:'cover'}} />
        </Carousel.Item>

        <Carousel.Item>
          <img className="d-block w-100" src={img4} alt="Second slide" style={{objectFit:'cover'}} />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={img2} alt="Second slide" style={{objectFit:'cover'}} />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={comboImg} alt="First slide"  style={{objectFit:'cover'}}/>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Slider;
