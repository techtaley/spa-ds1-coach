import React from "react";
import {Link} from 'react-router-dom';
//import './../../styles/main/main.css';
//import './../donate/css/form.css'

export default function LeftDonateHero({data}) {
    const { image, title, desc, btn } = data;

  return (
    <div className="margin70">
        <div className="left-hero">
          <div>
              <img
              className="hero-img"
              src={image}
              />
          </div>

          <div className="column-div-left">
              <p className="lightfont">{title}</p>
              <h2>{desc}</h2>
              <Link className="lightbtn bold" to="/donate">{btn}</Link>
          </div>
        </div>
    </div>
  );
}
