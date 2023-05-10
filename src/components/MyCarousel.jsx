import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
/* import myPhoto from "../images/personal image 3-cropped.jpg"; */
import AmrPhoto from "../images/Amr Mohammed.jpg";
import MohamedGaberPhoto from "../images/Mohamed Gaber.jpg";
import MySlide from "./MySlide";

function MyCarousel() {
  var settings = {
    dots: true,
    slidesToShow: 2,
    slidesToScroll: 2,
    arrows: false,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="p-4">
      <Slider {...settings}>
        <MySlide
          stars={5}
          name="Mohamed Gaber"
          location="Software Engineer at EPAM Systems"
          desc="I am thrilled to provide a testimonial for my younger brother, a junior web developer, as he begins his journey in the field. His enthusiasm, dedication, and ability to quickly grasp new concepts make him a standout developer. With his technical prowess, strong work ethic, and creative eye for design, I have no doubt he will excel and make significant contributions to any development team he joins."
          photo={MohamedGaberPhoto}      
        />
        <MySlide
          stars={5}
          name="Amr Mohamed"
          location="Full Stack Engineer at Jabu"
          desc="I've been working with Ibrahim for one year and he is a very passionate, hard working person who can do whatever it takes to get the job done."
          photo={AmrPhoto}      
        />
       {/*  <MySlide
          stars={5}
          name="Ibrahim Gaber"
          location="Cairo, Egypt"
          desc="Only trying it out since a few days. But up to now excellent.
                Seems to work flawlessly. priced simply dummy text of the printing and typesetting industry."
          photo={myPhoto}      
        />
        <MySlide
          stars={5}
          name="Ibrahim Gaber"
          location="Cairo, Egypt"
          desc="Only trying it out since a few days. But up to now excellent.
                Seems to work flawlessly. priced simply dummy text of the printing and typesetting industry."
          photo={myPhoto}      
        /> */}
      </Slider>
      
    </div>
  );
}

export default MyCarousel;
