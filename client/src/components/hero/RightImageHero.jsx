import React from "react";
import { Link } from "react-router-dom";
import { BiSolidQuoteAltLeft } from "react-icons/bi";

export default function RightImageHero({ data, quote, setOpenForm, openForm, setSelected }) {
  const { title, desc, url, alt, btn, link } = data;

  const handleClick = (e) => {
    e.preventDefault();

    setSelected(e.target.id);
    
    setOpenForm(!openForm)
  }

  return (
    <div className="hero right-image-hero">
      <div className="quote right-quote-div">
        <BiSolidQuoteAltLeft size={60} />
        {quote.quote}
      </div>
      <div className="text right-text-div">
        <p>{title}</p>

        <h3>{desc}</h3>
        <Link className="btn bold" id={title} onClick={handleClick}>{btn}</Link>
      </div>

      <div className="image right-image-div">
        <img className="hero-image" src={`./../../assets/${url}`} alt={alt}/>
      </div>
    </div>
  );
}
