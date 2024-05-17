import React from "react";
import { Link } from "react-router-dom";
import { BiSolidQuoteAltLeft } from "react-icons/bi";

export default function RightImageHero({ data }) {
  const { title, desc, url, btn, link } = data;

  return (
    <div className="hero right-image-hero">
      <div className="quote right-quote-div">
        <BiSolidQuoteAltLeft size={60} />
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
        viverra tempus nibh. Etiam pretium, sapien eu dignissim ultrices, dui
        risus tincidunt dui, quis cursus lectus nulla ac massa.
      </div>
      <div className="text right-text-div">
        <p>{title}</p>

        <h3>{desc}</h3>
        <Link className="btn bold">{btn}</Link>
      </div>

      <div className="image right-image-div">
        <img className="hero-image" src={`./../../assets/${url}`} />
      </div>
    </div>
  );
}
