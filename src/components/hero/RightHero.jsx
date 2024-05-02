import React from "react";
import {Link} from 'react-router-dom'
import './../../styles/main/main.css'

export default function RightHero({data}) {
  const { url, title, desc, btn } = data;
  
  return (
    <div className="hero right-hero">
      <div>
        <img
          className="hero-img"
          src={`./../../assets/${url}`}
        />
      </div>

      <div className="hero column-div-right">
        <p>{title}</p>
        <h2>{desc}</h2>
        {/* <Link className="darkbtn">{btn}</Link> */}
      </div>
    </div>
  );
}
