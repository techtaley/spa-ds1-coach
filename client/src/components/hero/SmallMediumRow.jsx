import React from 'react'
import { Link } from 'react-router-dom';

export default function SmallMediumRow({data}) {
    const { smimage, medimage, title, desc, btn } = data;

  return (
    <div className="hero small-medium-row">
        <div className="small-box">
            <img className="hero-img" src={smimage} />
        </div>

        <div className="medium-box">
            <img className="hero-img" src={medimage} />
        </div>

        <div className="hero leftalign">
            <p className="darkfont">{title}{" "}</p>
            <h2>{desc}</h2>
            <Link className="bold">
                <button className="darkbtn">
                    {btn}
                </button>
            </Link>
        </div>
    </div>
  )
}

