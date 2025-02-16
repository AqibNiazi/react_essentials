import React from "react";
import "./CoreConcept.css";
const CoreConcept = ({ title, image, description }) => {
  return (
    <li>
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
    </li>
  );
};

export default CoreConcept;
