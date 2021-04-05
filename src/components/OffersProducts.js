import React, { Component, useContext } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ProductsContext } from "../Global/ProductsContext";
import Slider2 from '../components/Slider'
import {Badge} from 'react-bootstrap'
import SpecialOffer from '../components/SpecialOffer'
const Responsive = () => {
  const { offersProducts } = useContext(ProductsContext);
  console.log(offersProducts)

  var settings = {
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 5,
    slidesToScroll: 1,
    initialSlide: 0,
    adaptiveHeight: true,
    autoplay: true,
    className:'slides',
    autoplaySpeed:1200,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div>
      <Slider2/>
      <h2 id="offersHeading" className="py-4">
        Grocery 5% off
      </h2>
      <div id='customContainer'>
      <Slider {...settings}>
        {offersProducts.map((val) => (
          <div id="customStyles" key={val.id}>
            <div className="card" style={{ width: "18rem"}}>
              <img className="card-img-top" src={val.img} alt="Card image cap" />
              <div className="card-body">
                <h5 className="card-title" style={{fontWeight:'600'}}>{val.name}</h5>
                <h5 className="card-title" style={{fontWeight:'600'}}>${val.price}.00</h5>
                <a href="#" className="btn btn-primary" style={{background:'#DA2267',textTransform:'capitalize'}}>
                  Add to Cart
                </a>
              </div>
            </div>
          </div>
        ))}
      </Slider>
      </div>
      <SpecialOffer/>
    </div>
  );
};

export default Responsive;
