import React from "react";
import { Link } from "react-router-dom";
import { BiSolidQuoteAltLeft } from "react-icons/bi";

export default function LeftImageHero({ data, quote, setOpenForm, openForm, setSelected }) { 
  const { title, desc, url, alt, btn, link } = data;

  const handleClick = (e) => {
    e.preventDefault();

    setSelected(e.target.id);
    
    setOpenForm(!openForm)
  }

  return (
    <div className="hero left-image-hero">
      <div className="image left-image-div">
        <img className="hero-image" src={`./../../assets/${url}`} alt={alt} />
      </div>

      <div className="text left-text-div">
        <p>{title}</p>

        <h3>{desc}</h3>
        <Link className="btn bold" id={title} onClick={handleClick}>{btn}</Link>
      </div>

      <div className="quote left-quote-div">
        <BiSolidQuoteAltLeft size={60} />
        {quote.quote}
      </div>
    </div>
  );
}
