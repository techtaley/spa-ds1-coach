import React from "react";
import {Link} from 'react-router-dom'

export default function LeftHero({data}) {
  const { title, desc, image, btn, link } = data;

  return (

    <div className="hero left-hero">
      <div>
        <img
          className="hero-img"
          src={`./../../assets/${image}`}
        />
      </div>

      <div className="hero column-div-left">
        <p>{title}</p>
        <h2>{desc}</h2>
        {/* <Link className="bold">{btn}</Link> */}
      </div>
    </div>
  );
}
