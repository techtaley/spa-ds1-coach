import React from "react";
import { Link } from 'react-router-dom'

export default function Parallel({data}) {
  const { title, desc, url, btn, link } = data;

  return (
    <div>

<div className="hero parallel-hero" style={{ backgroundImage: `url(./../../assets/${url})` }}>
      {/* <div>
        <img
          className="parallel-img"
          src={`./../../assets/${url}`}
        />
      </div> */}

      <div className="hero parallel-text">
        <p>{title}</p>
        <Link className="bold">{btn}</Link>
      </div>
    </div>

    <div className="parallel-desc">
        <h2>{desc}</h2>
    </div>

    </div>


  );
}
