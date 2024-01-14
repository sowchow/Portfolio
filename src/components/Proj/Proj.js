import React, { useState } from "react";
import "./Proj.css";

const Proj = ({ img, title, desc, link }) => {
  const [Show, setShow] = useState(false);
  return (
    <a href={link}>
      <div className="project"
        onMouseEnter={() => setShow(true)}
        onMouseLeave={() => setShow(false)}
      >
        {Show ? (
        <div className="project__content">
          <h4>{title}</h4>
          <p>{desc}</p>
        </div>
        ) : (
        <img src={img} alt="" />)}
      </div>
    </a>
  );
};

export default Proj;
