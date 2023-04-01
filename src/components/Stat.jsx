import React from "react";

function Stat(props) {
  return (
    <div>
      <p className="stats-title">{props.title}</p>
      <p className="stats-desc">{props.desc}</p>
    </div>
  );
}

export default Stat;
