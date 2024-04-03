import React from 'react'

export default function TopExcerpt({data}) {
    const { image, date, desc, btn } = data;

  return (
    <div className="top-excerpt">
        <img
            className="hero-img"
            src={image}
        />
        <div className="column-div-left">
            <p className="small-font bold">{date} | <span className="category">{category}</span></p>
            <p className="small-font">{desc}</p>
            <Link className="bold small-font"><button className="regular-button">{btn}</button></Link>
        </div>
    </div> 
  )
}
