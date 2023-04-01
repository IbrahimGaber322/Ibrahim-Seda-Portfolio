import React from "react";

function Info(props){
 return(
    <div>
    <p className="my-info">Name: {props.name}</p>
      <p className="my-info">Email: <a href="mailto:ibrahimseda322@gmail.com">{props.email}</a></p>
      <p className="my-info">Age: {props.age}</p>
      <p className="my-info" style={{border:"none"}}> From: {props.location}</p>
      </div>
 )
}

export default Info;