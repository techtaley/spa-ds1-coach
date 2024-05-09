import React from "react";
import { Link } from "react-router-dom";

export default function Banner({data}) {
  const { url, link, desc, btn } = data;

  return (
    <div className="banner-div">
        <img
          className="hero-img"
          src={`./../../assets/${url}`}
        />
        <div className="banner-text">
          <h1>{desc}</h1>
          <Link className="banner-btn" to={link}>{btn}</Link>
        </div>
    </div>
  )
}
