import React from "react";

function SectionHeading({ index, eyebrow, title, children }) {
  return (
    <div className="section-heading reveal">
      <p className="eyebrow">
        <span>{index}</span> {eyebrow}
      </p>
      <h2>{title}</h2>
      {children && <p className="section-heading__lead">{children}</p>}
    </div>
  );
}

export default SectionHeading;
