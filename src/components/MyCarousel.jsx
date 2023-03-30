import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import myPhoto from "../images/personal image 3-cropped.jpg"
import StarIcon from '@mui/icons-material/Star';
import RadioButtonCheckedIcon from '@mui/icons-material/RadioButtonChecked';
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

          }
        }
      ]
    };
    return (
     <div className="p-4">
        <Slider  {...settings}>
          <div>
           <div className="my-slider-inner-div">
            <div className="my-slider-title-div">
              <img  src={myPhoto} alt="me" />
              <p className="slider-name">Ibrahim Gaber</p>
              <p className="slider-location">Developer from Egypt</p>
            </div>
            <p className="slider-desc">“I am happy Working with printing and typesetting industry. Quidam lisque persius interesset his et, in quot quidam persequeris essent possim iriure.”</p>
            <StarIcon /><StarIcon /><StarIcon />
            </div>
         </div>
         <div>
           <div className="my-slider-inner-div">
            <div className="my-slider-title-div">
              <img  src={myPhoto} alt="me" />
              <p className="slider-name">Ibrahim Gaber</p>
              <p className="slider-location">Developer from Egypt</p>
            </div>
            <p className="slider-desc">“I am happy Working with printing and typesetting industry. Quidam lisque persius interesset his et, in quot quidam persequeris essent possim iriure.”</p>
            <StarIcon /><StarIcon /><StarIcon />
            </div>
         </div>
         <div>
           <div className="my-slider-inner-div">
            <div className="my-slider-title-div">
              <img  src={myPhoto} alt="me" />
              <p className="slider-name">Ibrahim Gaber</p>
              <p className="slider-location">Developer from Egypt</p>
            </div>
            <p className="slider-desc">“I am happy Working with printing and typesetting industry. Quidam lisque persius interesset his et, in quot quidam persequeris essent possim iriure.”</p>
            <StarIcon /><StarIcon /><StarIcon />
            </div>
         </div>
         <div>
           <div className="my-slider-inner-div">
            <div className="my-slider-title-div">
              <img  src={myPhoto} alt="me" />
              <p className="slider-name">Ibrahim Gaber</p>
              <p className="slider-location">Developer from Egypt</p>
            </div>
            <p className="slider-desc">“I am happy Working with printing and typesetting industry. Quidam lisque persius interesset his et, in quot quidam persequeris essent possim iriure.”</p>
            <StarIcon /><StarIcon /><StarIcon />
            </div>
         </div>
        </Slider>
        </div>
    );
  }

  export default MyCarousel;

