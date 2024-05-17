import React from "react";
import { Link } from "react-router-dom";
import { BiSolidQuoteAltLeft } from "react-icons/bi";

export default function LeftImageHero({ data }) {
  const { title, desc, url, alt, btn, link } = data;

  return (
    <div className="hero left-image-hero">
      <div className="image left-image-div">
        <img className="hero-image" src={`./../../assets/${url}`} alt={alt} />
      </div>

      <div className="text left-text-div">
        <p>{title}</p>

        <h3>{desc}</h3>
        <Link className="btn bold">{btn}</Link>
      </div>

      <div className="quote left-quote-div">
        <BiSolidQuoteAltLeft size={60} />
        Orci varius natoque penatibus et magnis dis parturient montes, nascetur
        ridiculus mus. Mauris felis ex, interdum eget elementum maximus,
        condimentum quis nulla.
      </div>
    </div>
  );
}
