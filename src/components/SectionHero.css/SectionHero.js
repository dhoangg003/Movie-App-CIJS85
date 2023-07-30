import React, { Component } from "react";
import Slider from "react-slick";
import Slider1 from "../../images/slider1.jpg"
import Slider2 from "../../images/slider2.jpg"
import Slider3 from "../../images/slider3.jpg"


export default class SectionHero extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <div>
        <h2> Feature</h2>
        <div className="SectionHero-taskbar">
          
        </div>
        <Slider {...settings}>
          <div>
            <img src={Slider1}/>
          </div>
          <div>
          <img src={Slider2}/>
          </div>
          <div>
          <img src={Slider3}/>
          </div>
          
        </Slider>
      </div>
    );
  }
}