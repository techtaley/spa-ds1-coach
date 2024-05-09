import React from 'react'
import { Link } from 'react-router-dom'

export default function LeftExcerpt({data}) {
    const {image, date, category, desc, btn} = data;

  return (
    <div className="left-excerpt">
        <img
            className="hero-img"
            src={image}
        />
        <div className="column-div-left">
            <p className="small-font bold">{data} | <span className="category">{category}</span></p>
            <p className="small-font">{desc}</p>
            <Link className="bold small-font"><button className="regular-button">{btn}</button></Link>
        </div>
    </div> 
  )
}
