import React from "react";
import StarIcon from '@mui/icons-material/Star';

function MySlide(props) {
    const stars = [];
     for (let i=props.stars; i > 0; i--) {
           stars.push(<StarIcon />)
          }
  return (
    <div>
      <div className="my-slider-inner-div">
        <div className="my-slider-title-div">
          <img src={props.photo} alt="me" />
          <p className="slider-name">{props.name}</p>
          <p className="slider-location">{props.location}</p>
        </div>
        <p className="slider-desc">
          {props.desc}
        </p>
       {stars}
      </div>
    </div>
  );
}

export default MySlide;